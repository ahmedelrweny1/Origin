/* ============================================================
   Timed final exam runner — fixed order, silent select (no reveal),
   palette (red/green/yellow), flag, Prev/Next, deadline timer,
   localStorage resume, auto-submit on expiry.
   ============================================================ */

const EXAM_ID = 'mid-l1l2';
const STATE_KEY = `origin-timed-exam-${EXAM_ID}-state`;
const REPORT_KEY = `origin-timed-exam-${EXAM_ID}-report`;
const CONFIG_KEY = 'origin-admin-exam-config';
const ATT_KEY = `origin-timed-exam-${EXAM_ID}-attempts`;
const LOG_KEY = `origin-timed-exam-${EXAM_ID}-log`;
const NAME_KEY = 'origin-student-name';

/* Default seed: 60 min, pass 20/40, one attempt, always open.
   Applies until the admin saves different settings. */
function seedConfig() {
  return {
    durationMin: 60,
    passMark: 20,
    attemptLimit: 1,
    windowEnabled: false,
    windowStart: 0,
    windowEnd: 0
  };
}
const DEFAULT_CONFIG = seedConfig();

const exam = {
  bank: [],
  config: { ...DEFAULT_CONFIG },
  state: null,
  timerId: null,
  submitted: false
};

const $ = (id) => document.getElementById(id);

/* ---------------- config + bank ---------------- */
function normConfig(c) {
  const s = seedConfig();
  const durationMin = Math.min(180, Math.max(5, parseInt(c.durationMin, 10) || s.durationMin));
  const passMark = Math.min(40, Math.max(1, parseInt(c.passMark, 10) || s.passMark));
  let attemptLimit = parseInt(c.attemptLimit, 10);
  if (!(attemptLimit >= 0)) attemptLimit = s.attemptLimit;
  return {
    durationMin, passMark, attemptLimit,
    windowEnabled: !!c.windowEnabled,
    windowStart: Number(c.windowStart) || 0,
    windowEnd: Number(c.windowEnd) || 0
  };
}
function getConfig() {
  try {
    const all = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}');
    if (all && all[EXAM_ID]) return normConfig(all[EXAM_ID]);
  } catch (e) {}
  return seedConfig();
}
function winValid(cfg) {
  return cfg.windowEnabled && cfg.windowStart > 0 && cfg.windowEnd > cfg.windowStart;
}
function winState(cfg, now) {
  if (!winValid(cfg)) return 'open';
  if (now < cfg.windowStart) return 'upcoming';
  if (now >= cfg.windowEnd) return 'ended';
  return 'open';
}
function nameKey(name) { return normText(name || ''); }
function currentName() {
  if (exam.state && exam.state.studentName) return exam.state.studentName;
  const el = document.getElementById('studentName');
  return el ? el.value : '';
}
function usedMap() {
  try {
    const m = JSON.parse(localStorage.getItem(ATT_KEY) || '{}');
    if (m && typeof m === 'object' && !Array.isArray(m)) return m;
  } catch (e) {}
  return {};
}
function onlineUser() {
  try {
    if (typeof Remote !== 'undefined' && Remote.enabled) return Remote.currentUser();
  } catch (e) {}
  return null;
}
function isOnline() {
  return (typeof Remote !== 'undefined') && !!Remote.enabled;
}
/* Attempt slot: account uid when online, typed name when local-only. */
function attemptKey() {
  const u = onlineUser();
  if (u && u.uid) return 'uid:' + u.uid;
  return nameKey(currentName());
}
function stateKey() {
  if (exam.state && exam.state.uid) return 'uid:' + exam.state.uid;
  return attemptKey();
}
function getUsed() {
  const m = usedMap();
  return Math.max(0, parseInt(m[attemptKey()] || 0, 10) || 0);
}
function incUsed() {
  try {
    const m = usedMap();
    const k = attemptKey() || 'unknown';
    m[k] = (parseInt(m[k] || 0, 10) || 0) + 1;
    localStorage.setItem(ATT_KEY, JSON.stringify(m));
  } catch (e) {}
}
function attemptsLeft(cfg) {
  if (cfg.attemptLimit === 0) return Infinity;
  return cfg.attemptLimit - getUsed();
}
function fmtDay(ms) {
  return new Date(ms).toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'long' });
}
function fmtTime(ms) {
  return new Date(ms).toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-GB', { hour: 'numeric', minute: '2-digit' });
}
function winLine(cfg) {
  return `${tOrEn('txWinOpen')} ${fmtDay(cfg.windowStart)} · ${tOrEn('txWinFrom')} ${fmtTime(cfg.windowStart)} ${tOrEn('txWinTo')} ${fmtTime(cfg.windowEnd)}`;
}

function getBank() {
  const g = globalThis;
  const arr = currentLang === 'ar' ? g.LECT_MID_EXAM_AR : g.LECT_MID_EXAM_EN;
  return Array.isArray(arr) ? arr : [];
}

function tOrEn(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.en && translations.en[key])
    || key;
}

/* ---------------- answer shapes per type ----------------
   single (mcq/tf/complete): number | typing: string
   multi/ordering: number[] | matching: {leftIdx: rightPos} */
function isSingle(q) {
  const t = q.type || 'mcq';
  return t === 'mcq' || t === 'tf' || t === 'complete';
}
function normText(s) {
  return String(s || '').trim().toLowerCase()
    .replace(/[ً-ٰٟ]/g, '')
    .replace(/ـ/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/\s+/g, ' ');
}
function isAnswered(q, v) {
  if (v === undefined || v === null) return false;
  if (isSingle(q)) return typeof v === 'number';
  if (q.type === 'typing') return typeof v === 'string' && v.trim().length > 0;
  if (q.type === 'multi' || q.type === 'ordering') return Array.isArray(v) && v.length > 0;
  if (q.type === 'matching') return typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length > 0;
  return false;
}
function gradeQ(q, v) {
  if (isSingle(q)) return v === q.answer;
  if (q.type === 'typing') {
    if (typeof v !== 'string') return false;
    const nv = normText(v);
    return nv.length > 0 && (q.accepted || []).some((a) => normText(a) === nv);
  }
  if (q.type === 'multi') {
    if (!Array.isArray(v)) return false;
    const a = [...v].sort((x, y) => x - y);
    const b = [...(q.answers || [])].sort((x, y) => x - y);
    return a.length === b.length && a.every((x, i) => x === b[i]);
  }
  if (q.type === 'ordering') {
    if (!Array.isArray(v) || v.length !== q.options.length) return false;
    return v.every((x, i) => x === q.answers[i]);
  }
  if (q.type === 'matching') {
    if (!v || typeof v !== 'object' || Array.isArray(v)) return false;
    const cmap = {};
    (q.answers || []).forEach((leftIdx, rightPos) => { cmap[leftIdx] = rightPos; });
    return q.lefts.every((_, li) => Number(v[li]) === cmap[li]);
  }
  return false;
}
function yourText(q, v) {
  if (v === undefined || v === null) return null;
  if (isSingle(q)) return q.options[v] !== undefined ? q.options[v] : null;
  if (q.type === 'typing') {
    const t = String(v).trim();
    return t === '' ? null : t;
  }
  if (q.type === 'multi') {
    if (!v.length) return null;
    return [...v].sort((a, b) => a - b).map((i) => q.options[i]).join(' + ');
  }
  if (q.type === 'ordering') {
    if (!v.length) return null;
    return v.map((oi, k) => `${k + 1}. ${q.options[oi]}`).join(' → ');
  }
  if (q.type === 'matching') {
    if (!Object.keys(v).length) return null;
    return q.lefts.map((l, li) => `${l} ↔ ${v[li] !== undefined && v[li] !== null ? q.rights[v[li]] : '—'}`).join(' · ');
  }
  return null;
}

/* ---------------- persistence ---------------- */
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STATE_KEY) || 'null');
    if (s && typeof s === 'object' && s.answers && typeof s.cursor === 'number' && s.deadlineEpoch) return s;
  } catch (e) {}
  return null;
}
function saveState() {
  if (!exam.state || exam.submitted) return;
  try { localStorage.setItem(STATE_KEY, JSON.stringify(exam.state)); } catch (e) {}
}
function clearState() {
  try { localStorage.removeItem(STATE_KEY); } catch (e) {}
}

/* ---------------- gate ---------------- */
function fmtDur(min) {
  const m = String(min).padStart(2, '0');
  return `${m}:00`;
}

function renderGate() {
  exam.config = getConfig();
  exam.bank = getBank();
  const cfg = exam.config;
  const total = exam.bank.length;
  const now = Date.now();
  $('gateCount').textContent = total;
  $('gateTime').textContent = fmtDur(cfg.durationMin);
  $('gatePass').textContent = `${cfg.passMark} / ${total}`;

  // Name prefill (?n= param once, then last used name)
  const nameInput = $('studentName');
  const qparams = new URLSearchParams(window.location.search);
  const urlName = (qparams.get('n') || '').trim();
  if (urlName && !nameInput.dataset.init) {
    nameInput.value = urlName;
    nameInput.dataset.init = '1';
  }
  try {
    if (!nameInput.value) nameInput.value = localStorage.getItem(NAME_KEY) || '';
  } catch (e) {}

  // Window + attempt info line
  const bits = [];
  if (winValid(cfg)) bits.push('🗓 ' + winLine(cfg));
  if (cfg.attemptLimit === 1) bits.push('🎲 ' + tOrEn('txOneAttempt'));
  $('gateWindow').textContent = bits.join(' · ');

  // Short-window warning: window closes before full duration runs out
  const shortWarn = $('gateWarn');
  if (winValid(cfg) && winState(cfg, now) === 'open' && cfg.windowEnd < now + cfg.durationMin * 60000) {
    shortWarn.textContent = '⚠ ' + tOrEn('exShortWarn') + ' (' + fmtMs(cfg.windowEnd - now) + ')';
    shortWarn.classList.remove('hidden');
  } else {
    shortWarn.classList.add('hidden');
  }

  // Blocked? (window closed/upcoming, or single attempt used up)
  const ws = winState(cfg, now);
  let blocked = '';
  if (ws === 'upcoming') blocked = tOrEn('txNotOpenYet') + ' · ' + winLine(cfg);
  else if (ws === 'ended') blocked = tOrEn('txWinClosedMsg');
  else if (attemptsLeft(cfg) <= 0) blocked = tOrEn('txNoAttemptsMsg');
  const blockedEl = $('gateBlocked');
  if (blocked) {
    blockedEl.textContent = '🔒 ' + blocked;
    blockedEl.classList.remove('hidden');
    $('resumeNote').classList.add('hidden');
    $('resumeActions').classList.add('hidden');
    $('startExamBtn').classList.add('hidden');
    $('gateLoginLink').classList.add('hidden');
    return;
  }
  blockedEl.classList.add('hidden');

  const online = isOnline();
  const authUser = onlineUser();

  // Online: account required, name locked to the account.
  if (online && (!authUser || !authUser.uid)) {
    blockedEl.textContent = '🔒 ' + tOrEn('exNeedLogin');
    blockedEl.classList.remove('hidden');
    $('gateNameRow').classList.add('hidden');
    $('resumeNote').classList.add('hidden');
    $('resumeActions').classList.add('hidden');
    $('startExamBtn').classList.add('hidden');
    $('nameHint').classList.add('hidden');
    const ll = $('gateLoginLink');
    ll.href = 'login.html?next=' + encodeURIComponent('exam2.html');
    ll.classList.remove('hidden');
    return;
  }
  $('gateLoginLink').classList.add('hidden');
  if (online && authUser && authUser.name) {
    nameInput.value = authUser.name;
    nameInput.disabled = true;
  } else {
    nameInput.disabled = false;
  }

  const existing = loadState();
  const typed = (nameInput.value || '').trim();
  const okName = online ? !!(authUser && authUser.uid) : typed.length >= 2;
  const ownState = online
    ? !!(authUser && existing && existing.total === total && existing.uid && existing.uid === authUser.uid)
    : !!(existing && existing.total === total && okName && nameKey(existing.studentName) === nameKey(typed));
  const otherActive = online
    ? !!(existing && existing.total === total && existing.deadlineEpoch > now && existing.uid && authUser && existing.uid !== authUser.uid)
    : !!(existing && existing.total === total && existing.deadlineEpoch > now && !ownState && nameKey(existing.studentName || '') !== '');
  if (otherActive) {
    blockedEl.textContent = '🔒 ' + tOrEn('exOtherActive');
    blockedEl.classList.remove('hidden');
    $('gateNameRow').classList.remove('hidden');
    $('resumeNote').classList.add('hidden');
    $('resumeActions').classList.add('hidden');
    $('startExamBtn').classList.add('hidden');
    $('nameHint').classList.add('hidden');
    return;
  }

  const hasProgress = !!(ownState && existing.deadlineEpoch > now);
  if (ownState && existing.deadlineEpoch <= now) {
    // own time ran out while away — submit what they answered
    exam.state = existing;
    exam.submitted = false;
    finishExam(true);
    return;
  }
  if (hasProgress) {
    $('gateNameRow').classList.add('hidden');
    $('gateLoginLink').classList.add('hidden');
    $('nameHint').classList.add('hidden');
    $('resumeNote').classList.remove('hidden');
    $('resumeNote').textContent = tOrEn('exResumeNote') + ' · ' + existing.studentName + ' · ' + fmtMs(Math.max(0, existing.deadlineEpoch - Date.now()));
    $('resumeActions').classList.remove('hidden');
    $('startExamBtn').classList.add('hidden');
  } else {
    $('gateNameRow').classList.remove('hidden');
    $('resumeNote').classList.add('hidden');
    $('resumeActions').classList.add('hidden');
    const startBtn = $('startExamBtn');
    startBtn.classList.remove('hidden');
    startBtn.disabled = !okName;
    $('nameHint').classList.toggle('hidden', okName);
    $('gateLoginLink').classList.add('hidden');
  }
}

async function startFresh() {
  // Guard: window / attempts may have changed since gate render
  if (winState(exam.config, Date.now()) !== 'open' || attemptsLeft(exam.config) <= 0) {
    renderGate();
    return;
  }
  let sname = ($('studentName').value || '').trim();
  let uid = null;
  if (isOnline()) {
    const u = onlineUser();
    if (!u || !u.uid) {
      window.location.href = 'login.html?next=' + encodeURIComponent('exam2.html');
      return;
    }
    sname = (u.name || '').trim() || sname;
    if (sname.length < 2) { renderGate(); return; }
    uid = u.uid;
    const btn = $('startExamBtn');
    if (btn) btn.disabled = true;
    try {
      const already = await Remote.getOwnAttempt(EXAM_ID);
      if (already) {
        try {
          const m = usedMap();
          m['uid:' + uid] = Math.max(parseInt(m['uid:' + uid] || 0, 10) || 0, 1);
          localStorage.setItem(ATT_KEY, JSON.stringify(m));
        } catch (e) {}
        renderGate();
        return;
      }
    } catch (e) {}
  } else if (sname.length < 2) { renderGate(); return; }
  try { localStorage.setItem(NAME_KEY, sname); } catch (e) {}
  const total = exam.bank.length;
  const now = Date.now();
  // Effective deadline: personal duration, but never past the window close
  let deadline = now + exam.config.durationMin * 60000;
  if (winValid(exam.config)) deadline = Math.min(deadline, exam.config.windowEnd);
  exam.state = {
    answers: {},
    flagged: [],
    cursor: 0,
    startedAt: now,
    deadlineEpoch: deadline,
    studentName: sname,
    uid: uid,
    total
  };
  exam.submitted = false;
  saveState();
  enterRunner();
}

function resumeExisting() {
  const s = loadState();
  if (!s) return startFresh();
  if (isOnline()) {
    const u = onlineUser();
    if (!u || !u.uid || !s.uid || s.uid !== u.uid) { renderGate(); return; }
  } else {
    const typed = ($('studentName').value || '').trim();
    if (typed.length < 2 || nameKey(s.studentName) !== nameKey(typed)) { renderGate(); return; }
  }
  if (s.deadlineEpoch <= Date.now()) {
    // expired while away -> auto-submit from saved answers
    exam.state = s;
    exam.submitted = false;
    finishExam(true);
    return;
  }
  exam.state = s;
  exam.submitted = false;
  enterRunner();
}

function enterRunner() {
  $('examGate').classList.add('hidden');
  $('examRunner').classList.remove('hidden');
  $('bottomBar').classList.remove('hidden');
  if (window.innerWidth >= 1024) $('palette').classList.remove('closed');
  renderQuestion();
  renderPalette();
  startTimer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------------- timer ---------------- */
function fmtMs(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = h > 0 ? String(m).padStart(2, '0') : String(m).padStart(2, '0');
  if (h > 0) return `${h}:${mm}:${String(sec).padStart(2, '0')}`;
  return `${mm}:${String(sec).padStart(2, '0')}`;
}

function startTimer() {
  stopTimer();
  const tick = () => {
    if (!exam.state || exam.submitted) return;
    const left = exam.state.deadlineEpoch - Date.now();
    const chip = $('timerChip');
    chip.textContent = '⏱ ' + fmtMs(left);
    chip.classList.toggle('danger', left < 5 * 60000);
    if (left <= 0) finishExam(true);
  };
  tick();
  exam.timerId = setInterval(tick, 1000);
}
function stopTimer() {
  if (exam.timerId) clearInterval(exam.timerId);
  exam.timerId = null;
}

/* ---------------- rendering ---------------- */
function typeLabel(t) {
  return tOrEn('type_' + (t || 'mcq'));
}

function renderQuestion() {
  const q = exam.bank[exam.state.cursor];
  if (!q) return;
  const total = exam.bank.length;
  const n = String(exam.state.cursor + 1).padStart(2, '0');
  const t = String(total).padStart(2, '0');

  $('qNum').textContent = `Q ${n} / ${t}`;
  $('qType').textContent = typeLabel(q.type);
  $('qText').textContent = q.question;
  $('examProgressMini').textContent = `${n} / ${t}`;

  const optsEl = $('qOptions');
  optsEl.innerHTML = '';
  const picked = exam.state.answers[q.id];

  const hintKey = q.type === 'typing' ? 'exHintTyping'
    : q.type === 'multi' ? 'exHintMulti'
    : q.type === 'ordering' ? 'exHintOrdering'
    : q.type === 'matching' ? 'exHintMatching' : null;
  if (hintKey) {
    const hint = document.createElement('p');
    hint.className = 'q-hint';
    hint.textContent = tOrEn(hintKey);
    optsEl.appendChild(hint);
  }

  if (isSingle(q)) renderSingle(q, optsEl, picked);
  else if (q.type === 'typing') renderTyping(q, optsEl, picked);
  else if (q.type === 'multi') renderMulti(q, optsEl, picked);
  else if (q.type === 'ordering') renderOrdering(q, optsEl, picked);
  else if (q.type === 'matching') renderMatching(q, optsEl, picked);

  const flagged = exam.state.flagged.includes(q.id);
  const flagBtn = $('flagBtn');
  flagBtn.classList.toggle('is-flagged', flagged);
  flagBtn.setAttribute('aria-pressed', flagged ? 'true' : 'false');

  $('prevBtn').disabled = exam.state.cursor === 0;
  const isLast = exam.state.cursor === total - 1;
  $('nextBtn').textContent = isLast ? tOrEn('exSubmit') : tOrEn('exNext');

  renderPaletteCurrent();
}

function renderSingle(q, optsEl, picked) {
  const letters = currentLang === 'ar' ? ['أ', 'ب', 'ج', 'د', 'هـ', 'و'] : ['A', 'B', 'C', 'D', 'E', 'F'];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'q-opt' + (picked === idx ? ' is-selected' : '');
    btn.setAttribute('aria-pressed', picked === idx ? 'true' : 'false');
    btn.innerHTML = `<span class="q-letter">${letters[idx] || (idx + 1)}</span><span></span>`;
    btn.lastChild.textContent = opt;
    btn.addEventListener('click', () => selectOption(idx));
    optsEl.appendChild(btn);
  });
}

function renderTyping(q, optsEl, picked) {
  const inp = document.createElement('input');
  inp.className = 'q-textinput';
  inp.type = 'text';
  inp.autocomplete = 'off';
  inp.setAttribute('aria-label', q.question);
  inp.placeholder = currentLang === 'ar' ? 'اكتب هنا…' : 'Type here…';
  inp.value = typeof picked === 'string' ? picked : '';
  inp.addEventListener('input', () => {
    if (exam.submitted) return;
    exam.state.answers[q.id] = inp.value;
    saveState();
    renderPaletteCurrent();
  });
  optsEl.appendChild(inp);
}

function renderMulti(q, optsEl, picked) {
  const sel = Array.isArray(picked) ? [...picked] : [];
  const letters = currentLang === 'ar' ? ['أ', 'ب', 'ج', 'د', 'هـ', 'و'] : ['A', 'B', 'C', 'D', 'E', 'F'];
  q.options.forEach((opt, idx) => {
    const on = sel.includes(idx);
    const btn = document.createElement('button');
    btn.className = 'q-opt' + (on ? ' is-selected' : '');
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.innerHTML = `<span class="q-letter">${on ? '✓' : (letters[idx] || (idx + 1))}</span><span></span>`;
    btn.lastChild.textContent = opt;
    btn.addEventListener('click', () => {
      if (exam.submitted) return;
      const cur = Array.isArray(exam.state.answers[q.id]) ? [...exam.state.answers[q.id]] : [];
      const at = cur.indexOf(idx);
      if (at >= 0) cur.splice(at, 1);
      else cur.push(idx);
      if (cur.length) exam.state.answers[q.id] = cur;
      else delete exam.state.answers[q.id];
      saveState();
      renderQuestion();
    });
    optsEl.appendChild(btn);
  });
}

function renderOrdering(q, optsEl, picked) {
  const seq = Array.isArray(picked) ? [...picked] : [];
  const letters = currentLang === 'ar' ? ['أ', 'ب', 'ج', 'د', 'هـ', 'و'] : ['A', 'B', 'C', 'D', 'E', 'F'];
  q.options.forEach((opt, idx) => {
    const pos = seq.indexOf(idx);
    const placed = pos >= 0;
    const btn = document.createElement('button');
    btn.className = 'q-opt' + (placed ? ' is-selected' : '');
    btn.setAttribute('aria-pressed', placed ? 'true' : 'false');
    btn.innerHTML = `<span class="q-letter${placed ? ' placed' : ''}">${placed ? (pos + 1) : (letters[idx] || (idx + 1))}</span><span></span>`;
    btn.lastChild.textContent = opt;
    btn.addEventListener('click', () => {
      if (exam.submitted) return;
      let cur = Array.isArray(exam.state.answers[q.id]) ? [...exam.state.answers[q.id]] : [];
      const at = cur.indexOf(idx);
      if (at >= 0) cur.splice(at, 1);
      else cur.push(idx);
      if (cur.length) exam.state.answers[q.id] = cur;
      else delete exam.state.answers[q.id];
      saveState();
      renderQuestion();
    });
    optsEl.appendChild(btn);
  });
  const rst = document.createElement('button');
  rst.className = 'q-reset';
  rst.textContent = tOrEn('exReset');
  rst.addEventListener('click', () => {
    delete exam.state.answers[q.id];
    saveState();
    renderQuestion();
  });
  optsEl.appendChild(rst);
}

let matchQid = null;
let matchPick = null;

function renderMatching(q, optsEl, picked) {
  if (matchQid !== q.id) { matchQid = q.id; matchPick = null; }
  const links = (picked && typeof picked === 'object' && !Array.isArray(picked)) ? picked : {};
  const wrap = document.createElement('div');
  wrap.className = 'q-match-wrap';

  const leftCol = document.createElement('div');
  leftCol.className = 'q-match-col';

  q.lefts.forEach((lt, li) => {
    const linked = links[li] !== undefined && links[li] !== null;
    const btn = document.createElement('button');
    btn.className = 'q-opt' + (linked ? ' is-selected' : '') + (matchPick === li ? ' is-picked' : '');
    btn.setAttribute('aria-pressed', linked ? 'true' : 'false');
    btn.textContent = linked ? `${lt} ✓` : lt;
    btn.addEventListener('click', () => {
      if (exam.submitted) return;
      const cur = { ...((exam.state.answers[q.id] && typeof exam.state.answers[q.id] === 'object') ? exam.state.answers[q.id] : {}) };
      if (cur[li] !== undefined && cur[li] !== null) {
        delete cur[li]; // tap linked left to unlink
        if (!Object.keys(cur).length) delete exam.state.answers[q.id];
        else exam.state.answers[q.id] = cur;
        matchPick = null;
        saveState();
        renderQuestion();
      } else {
        matchPick = matchPick === li ? null : li;
        renderQuestion();
      }
    });
    leftCol.appendChild(btn);
  });

  const rightCol = document.createElement('div');
  rightCol.className = 'q-match-col';

  // which left is linked to each right pos?
  const rev = {};
  Object.keys(links).forEach((li) => { rev[links[li]] = Number(li); });
  q.rights.forEach((rt, rj) => {
    const linkedLeft = rev[rj];
    const linked = linkedLeft !== undefined;
    const btn = document.createElement('button');
    btn.className = 'q-opt' + (linked ? ' is-selected' : '');
    btn.setAttribute('aria-pressed', linked ? 'true' : 'false');
    btn.textContent = rt;
    btn.addEventListener('click', () => {
      if (exam.submitted) return;
      const cur = { ...((exam.state.answers[q.id] && typeof exam.state.answers[q.id] === 'object') ? exam.state.answers[q.id] : {}) };
      if (linked) {
        delete cur[linkedLeft]; // tap linked right to unlink the pair
        if (!Object.keys(cur).length) delete exam.state.answers[q.id];
        else exam.state.answers[q.id] = cur;
        matchPick = null;
      } else if (matchPick !== null && matchPick !== undefined) {
        cur[matchPick] = rj;
        exam.state.answers[q.id] = cur;
        matchPick = null;
      } else {
        return;
      }
      saveState();
      renderQuestion();
    });
    rightCol.appendChild(btn);
  });

  wrap.appendChild(leftCol);
  wrap.appendChild(rightCol);
  optsEl.appendChild(wrap);
}

function renderPalette() {
  const grid = $('paletteGrid');
  grid.innerHTML = '';
  exam.bank.forEach((q, i) => {
    const b = document.createElement('button');
    b.className = 'pal-btn';
    b.textContent = i + 1;
    b.setAttribute('aria-label', `Question ${i + 1}`);
    b.addEventListener('click', () => {
      exam.state.cursor = i;
      saveState();
      renderQuestion();
      if (window.innerWidth < 1024) closePalette();
      document.querySelector('.q-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    grid.appendChild(b);
  });
  renderPaletteCurrent();
}

function renderPaletteCurrent() {
  const grid = $('paletteGrid');
  if (!grid || !grid.children.length) return;
  exam.bank.forEach((q, i) => {
    const b = grid.children[i];
    if (!b) return;
    const answered = isAnswered(q, exam.state.answers[q.id]);
    const flagged = exam.state.flagged.includes(q.id);
    b.classList.toggle('is-answered', answered && !flagged);
    b.classList.toggle('is-flagged', flagged);
    b.classList.toggle('is-current', i === exam.state.cursor);
  });
}

/* ---------------- actions ---------------- */
function selectOption(idx) {
  const q = exam.bank[exam.state.cursor];
  if (!q || exam.submitted) return;
  if (exam.state.answers[q.id] === idx) {
    delete exam.state.answers[q.id]; // tap again to deselect
  } else {
    exam.state.answers[q.id] = idx;
  }
  saveState();
  renderQuestion(); // silent: neutral highlight only, no correct/wrong reveal
}

function toggleFlag() {
  const q = exam.bank[exam.state.cursor];
  if (!q || exam.submitted) return;
  const i = exam.state.flagged.indexOf(q.id);
  if (i >= 0) exam.state.flagged.splice(i, 1);
  else exam.state.flagged.push(q.id);
  saveState();
  renderQuestion();
}

function goNext() {
  const total = exam.bank.length;
  if (exam.state.cursor >= total - 1) {
    openSubmitModal();
    return;
  }
  exam.state.cursor++;
  saveState();
  renderQuestion();
  document.querySelector('.q-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goPrev() {
  if (exam.state.cursor <= 0) return;
  exam.state.cursor--;
  saveState();
  renderQuestion();
  document.querySelector('.q-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openPalette() {
  $('palette').classList.remove('closed');
  $('paletteBackdrop').classList.remove('hidden');
}
function closePalette() {
  if (window.innerWidth >= 1024) return;
  $('palette').classList.add('closed');
  $('paletteBackdrop').classList.add('hidden');
}

function counts() {
  const total = exam.bank.length;
  let answered = 0;
  exam.bank.forEach((q) => { if (isAnswered(q, exam.state.answers[q.id])) answered++; });
  const flagged = exam.state.flagged.length;
  return { answered, flagged, left: total - answered, total };
}

function openSubmitModal() {
  const c = counts();
  $('mAnswered').textContent = c.answered;
  $('mFlagged').textContent = c.flagged;
  $('mLeft').textContent = c.left;
  $('submitModal').classList.remove('hidden');
}
function closeSubmitModal() {
  $('submitModal').classList.add('hidden');
}

/* ---------------- grading + report ---------------- */
async function finishExam(expired) {
  if (exam.submitted) return;
  exam.submitted = true;
  stopTimer();

  const total = exam.bank.length;
  let correct = 0;
  let answeredCount = 0;
  const perType = {};
  const items = exam.bank.map((q, i) => {
    const your = exam.state.answers[q.id];
    if (isAnswered(q, your)) answeredCount++;
    const good = gradeQ(q, your);
    if (good) correct++;
    const k = q.type || 'mcq';
    perType[k] = perType[k] || { c: 0, t: 0 };
    perType[k].t++;
    if (good) perType[k].c++;
    return {
      n: i + 1,
      id: q.id,
      lecture: q.lecture,
      type: q.type,
      question: q.question,
      your: yourText(q, your),
      good,
      explain: q.explain || ''
      // NOTE: correct option intentionally NOT stored — report teaches via explanation only
    };
  });

  const durationUsed = Date.now() - (exam.state.startedAt || Date.now());
  const pct = Math.round((correct / total) * 100);
  const report = {
    examId: EXAM_ID,
    lang: currentLang,
    name: (exam.state.studentName || ''),
    uid: (exam.state.uid || null),
    score: correct,
    total,
    wrong: total - correct,
    unanswered: total - answeredCount,
    perType,
    items,
    expired: !!expired,
    passMark: exam.config.passMark,
    passed: correct >= exam.config.passMark,
    durationUsed,
    submittedAt: Date.now()
  };
  try { localStorage.setItem(REPORT_KEY, JSON.stringify(report)); } catch (e) {}
  incUsed();
  // Upload to the shared roster (best effort: 5s cap, else queue for later)
  try {
    if (typeof Remote !== 'undefined' && Remote.enabled) {
      const rec = {
        name: report.name,
        score: correct,
        total,
        pct,
        passed: report.passed,
        perType,
        wrong: total - correct,
        unanswered: total - answeredCount,
        durationUsed,
        expired: !!expired,
        owner: (exam.state.uid || null),
        clientAt: Date.now(),
        lang: currentLang,
        items: items.map((it) => ({ n: it.n, type: it.type, good: it.good, your: it.your }))
      };
      await Promise.race([
        Remote.submitAttempt(EXAM_ID, (exam.state.uid || nameKey(report.name)), rec),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 5000))
      ]);
    }
  } catch (e) {
    try {
      if (typeof Remote !== 'undefined' && Remote.enabled) {
        Remote.queueOutbox(EXAM_ID, {
          docKey: (exam.state.uid || nameKey(report.name)),
          slot: stateKey(),
          record: {
            name: report.name,
            score: correct,
            total,
            pct,
            passed: report.passed,
            perType,
            wrong: total - correct,
            unanswered: total - answeredCount,
            durationUsed,
            expired: !!expired,
            owner: (exam.state.uid || null),
        clientAt: Date.now(),
            lang: currentLang,
            items: items.map((it) => ({ n: it.n, type: it.type, good: it.good, your: it.your }))
          }
        });
      }
    } catch (err) {}
  }
  // Append to the attempts log for the admin roster (compact, max 100)
  try {
    const log = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    log.push({
      name: report.name,
      score: correct,
      total,
      pct,
      passed: report.passed,
      perType,
      wrong: total - correct,
      unanswered: total - answeredCount,
      durationUsed,
      expired: !!expired,
      submittedAt: Date.now(),
      lang: currentLang,
      items: items.map((it) => ({ n: it.n, type: it.type, good: it.good, your: it.your }))
    });
    while (log.length > 100) log.shift();
    localStorage.setItem(LOG_KEY, JSON.stringify(log));
  } catch (e) {}
  clearState();
  saveStateOff();
  window.location.href = `exams.html?report=${encodeURIComponent(EXAM_ID)}`;
}

function saveStateOff() {
  // ensure no further saves after submit
  exam.state = null;
}

/* ---------------- wire ---------------- */
async function bootRemote() {
  try {
    if (typeof Remote === 'undefined') return;
    const ok = await Remote.init();
    if (!ok) return;
    try { await Remote.refreshProfile(); } catch (e) {}
    try {
      if (typeof Remote.onAuth === 'function') {
        Remote.onAuth(() => {
          try {
            const g = document.getElementById('examGate');
            if (g && !g.classList.contains('hidden')) renderGate();
          } catch (e) {}
        });
      }
    } catch (e) {}
    try {
      const g = document.getElementById('examGate');
      if (g && !g.classList.contains('hidden')) renderGate();
    } catch (e) {}
    // Pull the centrally published config (window/duration/attempts)
    try {
      const rc = await Remote.syncConfig(EXAM_ID);
      if (rc) {
        const before = JSON.stringify(exam.config);
        let all = {};
        try { all = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}'); } catch (e) {}
        all[EXAM_ID] = rc;
        try { localStorage.setItem(CONFIG_KEY, JSON.stringify(all)); } catch (e) {}
        exam.config = normConfig(rc);
        const gate = document.getElementById('examGate');
        if (JSON.stringify(exam.config) !== before && gate && !gate.classList.contains('hidden')) renderGate();
      }
    } catch (e) {}
    // Retry any submissions that failed while offline
    try {
      await Remote.retryOutbox(EXAM_ID, (nk) => {
        try {
          const m = usedMap();
          m[nk] = Math.max(parseInt(m[nk] || 0, 10) || 0, 1);
          localStorage.setItem(ATT_KEY, JSON.stringify(m));
        } catch (e) {}
      });
    } catch (e) {}
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  exam.config = getConfig();
  exam.bank = getBank();
  renderGate();
  bootRemote();

  $('studentName').addEventListener('input', () => {
    try { localStorage.setItem(NAME_KEY, $('studentName').value); } catch (e) {}
    if ($('examGate').classList.contains('hidden')) return;
    renderGate();
  });
  $('startExamBtn').addEventListener('click', startFresh);
  $('resumeExamBtn').addEventListener('click', resumeExisting);
  $('restartExamBtn').addEventListener('click', () => {
    if (confirm(tOrEn('exRestartConfirm'))) {
      clearState();
      startFresh();
    }
  });

  $('prevBtn').addEventListener('click', goPrev);
  $('nextBtn').addEventListener('click', goNext);
  $('flagBtn').addEventListener('click', toggleFlag);
  $('paletteToggleBtn').addEventListener('click', openPalette);
  $('paletteCloseBtn').addEventListener('click', closePalette);
  $('paletteBackdrop').addEventListener('click', closePalette);
  $('paletteSubmitBtn').addEventListener('click', openSubmitModal);
  $('confirmSubmitBtn').addEventListener('click', () => finishExam(false));
  $('cancelSubmitBtn').addEventListener('click', closeSubmitModal);

  document.addEventListener('keydown', (e) => {
    if ($('examRunner').classList.contains('hidden')) return;
    if (!$('submitModal').classList.contains('hidden')) {
      if (e.key === 'Escape') closeSubmitModal();
      return;
    }
    if (e.key === 'ArrowRight') {
      if (document.documentElement.dir === 'rtl') goPrev(); else goNext();
    } else if (e.key === 'ArrowLeft') {
      if (document.documentElement.dir === 'rtl') goNext(); else goPrev();
    } else if (e.key >= '1' && e.key <= '6') {
      const cq = exam.bank[exam.state.cursor];
      if (cq && isSingle(cq)) selectOption(parseInt(e.key, 10) - 1);
    } else if (e.key.toLowerCase() === 'f') {
      toggleFlag();
    }
  });

  window.addEventListener('beforeunload', saveState);
  document.addEventListener('visibilitychange', () => { if (document.hidden) saveState(); });
});

window.addEventListener('langChanged', () => {
  exam.bank = getBank();
  exam.config = getConfig();
  if (!exam.state) {
    renderGate();
    return;
  }
  // keep answers/cursor/deadline — only swap text
  renderQuestion();
  renderPalette();
});
