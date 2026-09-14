/* ============================================================
   Exams list + last-report view.
   Name-aware: status/CTA computed for the typed student name.
   Reads admin config, timed-exam state, attempt map, last report.
   ============================================================ */

const TEXAM_ID = 'final-l1l2';
const T_STATE_KEY = `origin-timed-exam-${TEXAM_ID}-state`;
const T_REPORT_KEY = `origin-timed-exam-${TEXAM_ID}-report`;
const T_CONFIG_KEY = 'origin-admin-exam-config';
const T_ATT_KEY = `origin-timed-exam-${TEXAM_ID}-attempts`;
const T_NAME_KEY = 'origin-student-name';
const T_DEFAULTS = { titleEn: 'Final Exam · Lectures 1 + 2', titleAr: 'الامتحان النهائي · المحاضرة الأولى + التانية' };

/* Default seed: 15 Sep 2026, 10:00–12:00, 45 min, one attempt. */
function seedTConfig() {
  return {
    durationMin: 45,
    passMark: 25,
    attemptLimit: 1,
    windowEnabled: true,
    windowStart: new Date(2026, 8, 15, 10, 0, 0).getTime(),
    windowEnd: new Date(2026, 8, 15, 12, 0, 0).getTime()
  };
}

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

function getTConfig() {
  try {
    const all = readJSON(T_CONFIG_KEY) || {};
    if (all[TEXAM_ID]) {
      const c = all[TEXAM_ID];
      const s = seedTConfig();
      let attemptLimit = parseInt(c.attemptLimit, 10);
      if (!(attemptLimit >= 0)) attemptLimit = s.attemptLimit;
      return {
        durationMin: Math.min(180, Math.max(5, parseInt(c.durationMin, 10) || s.durationMin)),
        passMark: Math.min(50, Math.max(1, parseInt(c.passMark, 10) || s.passMark)),
        attemptLimit,
        windowEnabled: !!c.windowEnabled,
        windowStart: Number(c.windowStart) || 0,
        windowEnd: Number(c.windowEnd) || 0
      };
    }
  } catch (e) {}
  return seedTConfig();
}

function usedMapT() {
  try {
    const m = JSON.parse(localStorage.getItem(T_ATT_KEY) || '{}');
    if (m && typeof m === 'object' && !Array.isArray(m)) return m;
  } catch (e) {}
  return {};
}
function usedBy(name) {
  const m = usedMapT();
  return Math.max(0, parseInt(m[normName(name)] || 0, 10) || 0);
}
function usedBySlot(slot) {
  const m = usedMapT();
  return Math.max(0, parseInt(m[slot] || 0, 10) || 0);
}
function leftFor(cfg, name) {
  if (cfg.attemptLimit === 0) return Infinity;
  return cfg.attemptLimit - usedBy(name);
}
function leftForSlot(cfg, slot) {
  if (cfg.attemptLimit === 0) return Infinity;
  return cfg.attemptLimit - usedBySlot(slot);
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
  const cfg = getTConfig();
  const report = readJSON(T_REPORT_KEY);
  const list = document.getElementById('examList');
  const isAr = currentLang === 'ar';

  document.getElementById('txTocCount').textContent = isAr ? 'امتحان واحد' : '01 exam';

  const winMeta = winValidT(cfg) ? `<span>· 🗓 ${winLineT(cfg)}</span>` : '';
  const attMeta = cfg.attemptLimit === 1 ? `<span>· 🎲 ${tOrEn('txOneAttempt')}</span>` : '';

  list.innerHTML = `
    <article class="texam-card" id="texamCard">
      <div class="texam-card-head">
        <span class="chip chip-solid">⏱ ${tOrEn('txTimed')}</span>
        <span class="chip">L1 + L2</span>
        <span id="cardStatus"></span>
      </div>
      <h2>${isAr ? T_DEFAULTS.titleAr : T_DEFAULTS.titleEn}</h2>
      <p class="muted">${tOrEn('txCardDesc')}</p>
      <div class="texam-meta">
        <span>❓ 50 ${isAr ? 'سؤال' : 'questions'}</span>
        <span>· ⏱ ${cfg.durationMin} ${isAr ? 'دقيقة' : 'min'}</span>
        <span>· 🎯 ${cfg.passMark} / 50 ${isAr ? 'للنجاح' : 'to pass'}</span>
        ${winMeta}
        ${attMeta}
      </div>
      <label class="gate-name"><span>${tOrEn('exNameLabel')}</span>
        <input type="text" id="stName" maxlength="60" autocomplete="name" value="${esc(savedName())}" placeholder="Ahmed / أحمد">
      </label>
      <div class="texam-actions" id="cardCta"></div>
    </article>`;

  let deb = null;
  document.getElementById('stName').addEventListener('input', (e) => {
    try { localStorage.setItem(T_NAME_KEY, e.target.value); } catch (err) {}
    if (deb) clearTimeout(deb);
    deb = setTimeout(updateForName, 250);
  });

  updateForName();

  // Report section (after auto-submit redirect or last attempt)
  const params = new URLSearchParams(window.location.search);
  const showReport = params.get('report') === TEXAM_ID || !!report;
  if (showReport && report) renderReport(report, cfg, true);
  else document.getElementById('examReport').classList.add('hidden');
}

function updateForName() {
  const cfg = getTConfig();
  const state = readJSON(T_STATE_KEY);
  const report = readJSON(T_REPORT_KEY);
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
  const left = okName ? leftForSlot(cfg, slot) : Infinity;
  const samePerson = (a, b) => normName(a) === normName(b);
  const ownReport = !!(report && (online
    ? (authUser && report.uid && report.uid === authUser.uid)
    : (okName && samePerson(report.name, name))));

  const ownState = online
    ? !!(authUser && state && state.total === 50 && state.uid && state.uid === authUser.uid)
    : !!(state && state.total === 50 && okName && samePerson(state.studentName, name));
  const inProgress = !!(ownState && state.deadlineEpoch > now && ws === 'open' && left > 0);
  const orphaned = !!(ownState && state.deadlineEpoch > now && (ws !== 'open' || left <= 0));

  const card = document.getElementById('texamCard');
  const statusEl = document.getElementById('cardStatus');
  const ctaEl = document.getElementById('cardCta');
  if (!card || !statusEl || !ctaEl) return;

  card.classList.toggle('resume', inProgress);

  let statusHtml;
  if (!okName) {
    statusHtml = `<span class="texam-status st-new">✦ ${tOrEn('exNameNeed')}</span>`;
  } else if (inProgress) {
    statusHtml = `<span class="texam-status st-inprogress">⏳ ${tOrEn('txInProgress')} · ${fmtMs(state.deadlineEpoch - now)} ${tOrEn('txLeft')}</span>`;
  } else if (ws === 'upcoming') {
    statusHtml = `<span class="texam-status st-new">🗓 ${tOrEn('txNotOpenYet')} · ${tOrEn('txOpensIn')} <span id="winCountdown">${fmtCountdown(cfg.windowStart - now)}</span></span>`;
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
  let cta;
  if (!okName) {
    cta = online
      ? `<a class="btn btn-primary btn-arrow" href="login.html?next=${encodeURIComponent('exams.html')}">${tOrEn('tabLogin')}</a>`
      : `<button class="btn btn-primary" disabled>${tOrEn('exStart')}</button>`;
  } else if (inProgress || orphaned) {
    cta = `<a class="btn btn-primary btn-arrow" href="exam.html?n=${encodeURIComponent(name)}">${tOrEn('exResume')}</a>`;
  } else if (canStart) {
    cta = `<a class="btn btn-primary btn-arrow" href="exam.html?n=${encodeURIComponent(name)}">${ownReport ? tOrEn('exRetake') : tOrEn('exStart')}</a>`;
  } else {
    cta = `<a class="btn btn-ghost" href="quizzes.html">${tOrEn('qzBackToList')}</a>`;
  }
  ctaEl.innerHTML = cta;

  // Live countdown to opening
  stopWinTick();
  if (okName && ws === 'upcoming') {
    winTickId = setInterval(() => {
      const el = document.getElementById('winCountdown');
      const leftMs = cfg.windowStart - Date.now();
      if (!el || leftMs <= 0) {
        stopWinTick();
        updateForName();
        return;
      }
      el.textContent = fmtCountdown(leftMs);
    }, 1000);
  }
}

function renderReport(report, cfg, canStart) {
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
      ${canStart ? `<a class="btn btn-primary btn-arrow" href="exam.html">${tOrEn('exRetake')}</a>` : ''}
      <a class="btn btn-ghost" href="quizzes.html">${tOrEn('qzBackToList')}</a>
    </div>`;

  box.querySelectorAll('.filter-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      reportFilter = btn.dataset.f;
      renderReport(report, cfg, canStart);
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
  const n = (typeof Remote !== 'undefined') ? Remote.outboxCount(TEXAM_ID) : 0;
  let el = document.getElementById('syncNote');
  if (n > 0) {
    if (!el) {
      el = document.createElement('p');
      el.id = 'syncNote';
      el.className = 'muted';
      const card = document.getElementById('texamCard');
      if (card) card.appendChild(el);
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
      const rc = await Remote.syncConfig(TEXAM_ID);
      if (rc) {
        const before = localStorage.getItem(T_CONFIG_KEY);
        let all = {};
        try { all = JSON.parse(before || '{}'); } catch (e) {}
        all[TEXAM_ID] = rc;
        try { localStorage.setItem(T_CONFIG_KEY, JSON.stringify(all)); } catch (e) {}
        if (localStorage.getItem(T_CONFIG_KEY) !== before) renderList();
      }
    } catch (e) {}
    try {
      const r = await Remote.retryOutbox(TEXAM_ID, () => {});
      if (r.synced) renderList();
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
