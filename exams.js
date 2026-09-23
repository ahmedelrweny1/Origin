/* ============================================================
   Exams list + last-report view (supports N timed exams).
   Name-aware: status/CTA computed for the typed student name.
   Reads admin config, timed-exam state, attempt map, last report.
   ============================================================ */

const EXAMS = [
  {
    id: 'final-l1l2',
    total: 50,
    runUrl: 'exam.html',
    tag: 'L1 + L2',
    titleEn: 'Final Exam · Lectures 1 + 2',
    titleAr: 'الامتحان النهائي · المحاضرة الأولى + التانية',
    descKey: 'txCardDesc',
    seed: {
      durationMin: 45,
      passMark: 25,
      attemptLimit: 1,
      windowEnabled: true,
      windowStart: new Date(2026, 8, 15, 10, 0, 0).getTime(),
      windowEnd: new Date(2026, 8, 15, 12, 0, 0).getTime()
    }
  },
  {
    id: 'mid-l1l2',
    total: 40,
    runUrl: 'exam2.html',
    tag: 'L1 + L2 · Tricky',
    titleEn: 'Tricky Exam · Lectures 1 + 2',
    titleAr: 'امتحان الخداع · الأولى + التانية',
    descKey: 'tx2CardDesc',
    seed: {
      durationMin: 60,
      passMark: 20,
      attemptLimit: 1,
      windowEnabled: false,
      windowStart: 0,
      windowEnd: 0
    }
  }
];

const T_CONFIG_KEY = 'origin-admin-exam-config';
const T_NAME_KEY = 'origin-student-name';
const EXAM_STORE_KEY = (id) => `origin-exam-${id}`;
const UNLOCK_STORE_KEY = (id) => `origin-unlock-${id}`;
const stateKeyOf = (id) => `origin-timed-exam-${id}-state`;
const reportKeyOf = (id) => `origin-timed-exam-${id}-report`;
const attKeyOf = (id) => `origin-timed-exam-${id}-attempts`;

function tOrEn(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.en && translations.en[key])
    || key;
}

function esc(s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function normName(s) {
  return String(s || '').trim().toLowerCase()
    .replace(/[ً-ٰٟ]/g, '').replace(/ـ/g, '')
    .replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
    .replace(/\s+/g, ' ');
}

function readJSON(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); }
  catch (e) { return null; }
}

function seedOf(exam) { return exam.seed; }

function getTConfig(exam) {
  try {
    const all = readJSON(T_CONFIG_KEY) || {};
    if (all[exam.id]) {
      const c = all[exam.id];
      const s = seedOf(exam);
      let attemptLimit = parseInt(c.attemptLimit, 10);
      if (!(attemptLimit >= 0)) attemptLimit = s.attemptLimit;
      return {
        durationMin: Math.min(180, Math.max(5, parseInt(c.durationMin, 10) || s.durationMin)),
        passMark: Math.min(exam.total, Math.max(1, parseInt(c.passMark, 10) || s.passMark)),
        attemptLimit,
        windowEnabled: !!c.windowEnabled,
        windowStart: Number(c.windowStart) || 0,
        windowEnd: Number(c.windowEnd) || 0
      };
    }
  } catch (e) {}
  return Object.assign({}, seedOf(exam));
}

function usedMapT(exam) {
  try {
    const m = JSON.parse(localStorage.getItem(attKeyOf(exam.id)) || '{}');
    if (m && typeof m === 'object' && !Array.isArray(m)) return m;
  } catch (e) {}
  return {};
}
function usedBy(exam, name) {
  const m = usedMapT(exam);
  return Math.max(0, parseInt(m[normName(name)] || 0, 10) || 0);
}
function usedBySlot(exam, slot) {
  const m = usedMapT(exam);
  return Math.max(0, parseInt(m[slot] || 0, 10) || 0);
}
function leftForSlot(cfg, exam, slot) {
  if (cfg.attemptLimit === 0) return Infinity;
  return cfg.attemptLimit - usedBySlot(exam, slot);
}
function onlineUserL() {
  try {
    if (typeof Remote !== 'undefined' && Remote.enabled) return Remote.currentUser();
  } catch (e) {}
  return null;
}

function winValidT(cfg) {
  return cfg.windowEnabled && cfg.windowStart > 0 && cfg.windowEnd > cfg.windowStart;
}
function winStateT(cfg, now) {
  if (!winValidT(cfg)) return 'open';
  if (now < cfg.windowStart) return 'upcoming';
  if (now >= cfg.windowEnd) return 'ended';
  return 'open';
}
function fmtDay(ms) {
  return new Date(ms).toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'long' });
}
function fmtTime(ms) {
  return new Date(ms).toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-GB', { hour: 'numeric', minute: '2-digit' });
}
function winLineT(cfg) {
  return `${tOrEn('txWinOpen')} ${fmtDay(cfg.windowStart)} · ${tOrEn('txWinFrom')} ${fmtTime(cfg.windowStart)} ${tOrEn('txWinTo')} ${fmtTime(cfg.windowEnd)}`;
}
function typeName(k) {
  return tOrEn('type_' + (k || 'mcq'));
}

function fmtMs(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function fmtDurUsed(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  if (currentLang === 'ar') return m < 1 ? `${s} ث` : `${m} د ${s % 60} ث`;
  return m < 1 ? `${s}s` : `${m}m ${s % 60}s`;
}

function fmtCountdown(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400);
  const h = String(Math.floor((s % 86400) / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  const core = `${h}:${m}:${sec}`;
  if (d <= 0) return core;
  return currentLang === 'ar' ? `${d} يوم ${core}` : `${d}d ${core}`;
}

let reportFilter = 'all';
let winTickId = null;
function stopWinTick() {
  if (winTickId) clearInterval(winTickId);
  winTickId = null;
}

function savedName() {
  try { return localStorage.getItem(T_NAME_KEY) || ''; }
  catch (e) { return ''; }
}
function readNameInput() {
  const el = document.getElementById('stName');
  return el ? el.value : savedName();
}

function renderList() {
  stopWinTick();
  const list = document.getElementById('examList');
  const isAr = currentLang === 'ar';

  document.getElementById('txTocCount').textContent = isAr
    ? (EXAMS.length === 1 ? 'امتحان واحد' : EXAMS.length === 2 ? 'امتحانان' : `${EXAMS.length} امتحانات`)
    : (EXAMS.length === 1 ? '01 exam' : `0${EXAMS.length} exams`);

  list.innerHTML = EXAMS.map((exam) => {
    const cfg = getTConfig(exam);
    const winMeta = winValidT(cfg) ? `<span>· 🗓 ${winLineT(cfg)}</span>` : '';
    const attMeta = cfg.attemptLimit === 1 ? `<span>· 🎲 ${tOrEn('txOneAttempt')}</span>` : '';
    const title = isAr ? exam.titleAr : exam.titleEn;
    return `
    <article class="texam-card" id="texamCard-${exam.id}">
      <div class="texam-card-head">
        <span class="chip chip-solid">⏱ ${tOrEn('txTimed')}</span>
        <span class="chip">${esc(exam.tag)}</span>
        <span id="cardStatus-${exam.id}"></span>
      </div>
      <h2>${esc(title)}</h2>
      <p class="muted">${tOrEn(exam.descKey)}</p>
      <div class="texam-meta">
        <span>❓ ${exam.total} ${isAr ? 'سؤال' : 'questions'}</span>
        <span>· ⏱ ${cfg.durationMin} ${isAr ? 'دقيقة' : 'min'}</span>
        <span>· 🎯 ${cfg.passMark} / ${exam.total} ${isAr ? 'للنجاح' : 'to pass'}</span>
        ${winMeta}
        ${attMeta}
      </div>
      <div class="texam-actions" id="cardCta-${exam.id}"></div>
    </article>`;
  }).join('') + `
    <label class="gate-name"><span>${tOrEn('exNameLabel')}</span>
      <input type="text" id="stName" maxlength="60" autocomplete="name" value="${esc(savedName())}" placeholder="Ahmed / أحمد">
    </label>`;

  let deb = null;
  document.getElementById('stName').addEventListener('input', (e) => {
    try { localStorage.setItem(T_NAME_KEY, e.target.value); } catch (err) {}
    if (deb) clearTimeout(deb);
    deb = setTimeout(updateAllForName, 250);
  });

  updateAllForName();

  // Report section: param match wins, else newest existing report
  const params = new URLSearchParams(window.location.search);
  const wantId = params.get('report');
  let shown = null;
  if (wantId && EXAMS.some((e) => e.id === wantId)) {
    const rep = readJSON(reportKeyOf(wantId));
    if (rep) shown = { exam: EXAMS.find((e) => e.id === wantId), report: rep };
  }
  if (!shown) {
    let best = null;
    EXAMS.forEach((exam) => {
      const rep = readJSON(reportKeyOf(exam.id));
      if (rep && (!best || (rep.submittedAt || 0) > (best.report.submittedAt || 0))) {
        best = { exam, report: rep };
      }
    });
    shown = best;
  }
  if (shown) renderReport(shown.exam, shown.report, getTConfig(shown.exam), true);
  else document.getElementById('examReport').classList.add('hidden');

  // Live 1s tick: refresh countdown + in-progress timers without re-render
  stopWinTick();
  winTickId = setInterval(() => {
    let alive = false;
    EXAMS.forEach((exam) => {
      const cfg = getTConfig(exam);
      const now = Date.now();
      const cd = document.getElementById(`winCountdown-${exam.id}`);
      if (cd && winStateT(cfg, now) === 'upcoming') {
        const leftMs = cfg.windowStart - now;
        if (leftMs <= 0) { updateAllForName(); return; }
        cd.textContent = fmtCountdown(leftMs);
        alive = true;
      }
      const ip = document.getElementById(`inprogLeft-${exam.id}`);
      if (ip) {
        const state = readJSON(stateKeyOf(exam.id));
        if (state && state.deadlineEpoch > now) {
          ip.textContent = fmtMs(state.deadlineEpoch - now);
          alive = true;
        } else {
          updateAllForName();
        }
      }
    });
    if (!alive) { /* keep ticking cheaply; cards re-render on input/lang only */ }
  }, 1000);
}

function updateAllForName() {
  EXAMS.forEach((exam) => updateForName(exam));
}

function updateForName(exam) {
  const cfg = getTConfig(exam);
  const state = readJSON(stateKeyOf(exam.id));
  const report = readJSON(reportKeyOf(exam.id));
  const online = (typeof Remote !== 'undefined') && !!Remote.enabled;
  const authUser = onlineUserL();
  const nameEl = document.getElementById('stName');
  if (nameEl) {
    if (online && authUser && authUser.name) {
      nameEl.value = authUser.name;
      nameEl.disabled = true;
    } else {
      nameEl.disabled = false;
    }
  }
  const name = (readNameInput() || '').trim();
  const okName = online ? !!(authUser && authUser.uid) : name.length >= 2;
  const slot = (online && authUser && authUser.uid) ? ('uid:' + authUser.uid) : normName(name);
  const now = Date.now();
  const ws = winStateT(cfg, now);
  const left = okName ? leftForSlot(cfg, exam, slot) : Infinity;
  const samePerson = (a, b) => normName(a) === normName(b);
  const ownReport = !!(report && (online
    ? (authUser && report.uid && report.uid === authUser.uid)
    : (okName && samePerson(report.name, name))));

  const ownState = online
    ? !!(authUser && state && state.total === exam.total && state.uid && state.uid === authUser.uid)
    : !!(state && state.total === exam.total && okName && samePerson(state.studentName, name));
  const inProgress = !!(ownState && state.deadlineEpoch > now && ws === 'open' && left > 0);
  const orphaned = !!(ownState && state.deadlineEpoch > now && (ws !== 'open' || left <= 0));

  const card = document.getElementById(`texamCard-${exam.id}`);
  const statusEl = document.getElementById(`cardStatus-${exam.id}`);
  const ctaEl = document.getElementById(`cardCta-${exam.id}`);
  if (!card || !statusEl || !ctaEl) return;

  card.classList.toggle('resume', inProgress);

  let statusHtml;
  if (!okName) {
    statusHtml = `<span class="texam-status st-new">✦ ${tOrEn('exNameNeed')}</span>`;
  } else if (inProgress) {
    statusHtml = `<span class="texam-status st-inprogress">⏳ ${tOrEn('txInProgress')} · <span id="inprogLeft-${exam.id}">${fmtMs(state.deadlineEpoch - now)}</span> ${tOrEn('txLeft')}</span>`;
  } else if (ws === 'upcoming') {
    statusHtml = `<span class="texam-status st-new">🗓 ${tOrEn('txNotOpenYet')} · ${tOrEn('txOpensIn')} <span id="winCountdown-${exam.id}">${fmtCountdown(cfg.windowStart - now)}</span></span>`;
  } else if (ws === 'ended') {
    statusHtml = `<span class="texam-status st-done">🔒 ${tOrEn('txWindowEnded')}</span>`;
  } else if (left <= 0) {
    statusHtml = `<span class="texam-status st-done">✓ ${tOrEn('txNoAttempts')}</span>`;
  } else if (ownReport) {
    statusHtml = `<span class="texam-status st-done">✓ ${tOrEn('txBest')}: ${report.score} / ${report.total}${report.passed ? ' · ' + tOrEn('txPassed') : ''}</span>`;
  } else {
    statusHtml = `<span class="texam-status st-new">✦ ${tOrEn('txNew')}</span>`;
  }
  statusEl.innerHTML = statusHtml;

  const canStart = okName && ws === 'open' && left > 0 && !inProgress && !orphaned;
  const runHref = `${exam.runUrl}?n=${encodeURIComponent(name)}`;
  let cta;
  if (!okName) {
    cta = online
      ? `<a class="btn btn-primary btn-arrow" href="login.html?next=${encodeURIComponent('exams.html')}">${tOrEn('tabLogin')}</a>`
      : `<button class="btn btn-primary" disabled>${tOrEn('exStart')}</button>`;
  } else if (inProgress || orphaned) {
    cta = `<a class="btn btn-primary btn-arrow" href="${runHref}">${tOrEn('exResume')}</a>`;
  } else if (canStart) {
    cta = `<a class="btn btn-primary btn-arrow" href="${runHref}">${ownReport ? tOrEn('exRetake') : tOrEn('exStart')}</a>`;
  } else {
    cta = `<a class="btn btn-ghost" href="quizzes.html">${tOrEn('qzBackToList')}</a>`;
  }
  ctaEl.innerHTML = cta;
}

function renderReport(exam, report, cfg, canStart) {
  const box = document.getElementById('examReport');
  box.classList.remove('hidden');
  const isAr = currentLang === 'ar';
  const pct = Math.round((report.score / report.total) * 100);

  const perTypeHtml = Object.keys(report.perType || {}).map((k) => {
    const s = report.perType[k];
    return `<div class="report-stat"><span class="mono">${typeName(k)}</span><strong>${s.c}<span class="result-stat-of">/${s.t}</span></strong></div>`;
  }).join('');

  const items = (report.items || []).filter((it) => {
    if (reportFilter === 'wrong') return !it.good;
    if (reportFilter === 'correct') return it.good;
    return true;
  });

  const typeTag = (it) => typeName(it.type);
  const itemsHtml = items.map((it) => `
    <div class="mistake-card${it.good ? ' ok' : ''}">
      <span class="mistake-tag">Q${it.n} · ${typeTag(it)} · ${it.good ? (isAr ? 'صح' : 'Correct') : (isAr ? 'غلط' : 'Wrong')}</span>
      <p class="mistake-q">${it.question}</p>
      <p class="mistake-your">${isAr ? 'إجابتك كانت: ' : 'Your answer: '}${it.your === null ? (isAr ? '— سيبته فاضي' : '— no answer') : esc(it.your)}</p>
      ${it.explain ? `<p class="mistake-why">${it.explain}</p>` : ''}
    </div>`).join('') || `<p class="muted">${tOrEn('txNoItems')}</p>`;

  box.innerHTML = `
    <div class="report-head">
      <span class="mono">${report.expired ? tOrEn('txAutoSubmitted') : tOrEn('txSubmitted')}</span>
      <h2>${report.passed ? tOrEn('txPassedTitle') : tOrEn('txFailedTitle')}</h2>
      <p class="muted">${tOrEn('txStudent')}: ${esc(report.name || '—')}</p>
      <p class="muted">${tOrEn('txTimeUsed')}: ${fmtDurUsed(report.durationUsed || 0)} · ${tOrEn('txPassLine')} ${cfg.passMark} / ${report.total}</p>
    </div>
    <div class="report-score${report.passed ? ' pass' : ''}">${pct}%</div>
    <div class="report-grid">
      <div class="report-stat"><span class="mono">${tOrEn('qzStatCorrect')}</span><strong>${report.score}</strong></div>
      <div class="report-stat"><span class="mono">${tOrEn('qzStatWrong')}</span><strong>${report.wrong}</strong></div>
      <div class="report-stat"><span class="mono">${tOrEn('qzStatSkipped')}</span><strong>${report.unanswered}</strong></div>
    </div>
    ${perTypeHtml ? `<div class="report-grid" style="margin-top:1rem;">${perTypeHtml}</div>` : ''}
    <div class="report-filters">
      <button class="filter-chip${reportFilter === 'all' ? ' active' : ''}" data-f="all">${tOrEn('txFAll')}</button>
      <button class="filter-chip${reportFilter === 'wrong' ? ' active' : ''}" data-f="wrong">${tOrEn('txFWrong')}</button>
      <button class="filter-chip${reportFilter === 'correct' ? ' active' : ''}" data-f="correct">${tOrEn('txFCorrect')}</button>
    </div>
    <div id="mistakeList">${itemsHtml}</div>
    <div class="texam-actions">
      ${canStart ? `<a class="btn btn-primary btn-arrow" href="${exam.runUrl}">${tOrEn('exRetake')}</a>` : ''}
      <a class="btn btn-ghost" href="quizzes.html">${tOrEn('qzBackToList')}</a>
    </div>`;

  box.querySelectorAll('.filter-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      reportFilter = btn.dataset.f;
      renderReport(exam, report, cfg, canStart);
    });
  });
  box.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 2 + 1;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.setProperty('--duration', `${Math.random() * 4 + 3}s`);
    p.style.setProperty('--delay', `${Math.random() * 5}s`);
    container.appendChild(p);
  }
}

function updateSyncNote() {
  let pending = 0;
  try {
    if (typeof Remote !== 'undefined') {
      EXAMS.forEach((exam) => { pending += Remote.outboxCount(exam.id) || 0; });
    }
  } catch (e) {}
  let el = document.getElementById('syncNote');
  if (pending > 0) {
    if (!el) {
      el = document.createElement('p');
      el.id = 'syncNote';
      el.className = 'muted';
      const list = document.getElementById('examList');
      if (list) list.appendChild(el);
    }
    if (el) el.textContent = '⏳ ' + tOrEn('syncPending');
  } else if (el) {
    el.remove();
  }
}

async function bootRemoteList() {
  updateSyncNote();
  try {
    if (typeof Remote === 'undefined') return;
    const ok = await Remote.init();
    if (!ok) return;
    try { await Remote.refreshProfile(); } catch (e) {}
    try {
      if (typeof Remote.onAuth === 'function') Remote.onAuth(() => renderList());
    } catch (e) {}
    renderList();
    try {
      let changed = false;
      const before = localStorage.getItem(T_CONFIG_KEY);
      let all = {};
      try { all = JSON.parse(before || '{}'); } catch (e) {}
      for (const exam of EXAMS) {
        try {
          const rc = await Remote.syncConfig(exam.id);
          if (rc) { all[exam.id] = rc; changed = true; }
        } catch (e) {}
      }
      if (changed) {
        try { localStorage.setItem(T_CONFIG_KEY, JSON.stringify(all)); } catch (e) {}
        if (localStorage.getItem(T_CONFIG_KEY) !== before) renderList();
      }
    } catch (e) {}
    try {
      let synced = false;
      for (const exam of EXAMS) {
        try {
          const r = await Remote.retryOutbox(exam.id, () => {});
          if (r.synced) synced = true;
        } catch (e) {}
      }
      if (synced) renderList();
    } catch (e) {}
  } catch (e) {}
  updateSyncNote();
}

document.addEventListener('DOMContentLoaded', () => {
  renderList();
  createParticles();
  bootRemoteList();
});

window.addEventListener('langChanged', renderList);
