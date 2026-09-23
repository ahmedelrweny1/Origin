/* ============================================================
   Admin — local passcode gate + exam timer config.
   All local: origin-admin-passcode, origin-admin-exam-config.
   ============================================================ */

const PASS_KEY = 'origin-admin-passcode';
const CONFIG_KEY = 'origin-admin-exam-config';
const EXAMS = {
  'final-l1l2': {
    total: 50,
    seed: {
      durationMin: 45,
      passMark: 25,
      attemptLimit: 1,
      windowEnabled: true,
      windowStart: new Date(2026, 8, 15, 10, 0, 0).getTime(),
      windowEnd: new Date(2026, 8, 15, 12, 0, 0).getTime()
    }
  },
  'mid-l1l2': {
    total: 40,
    seed: {
      durationMin: 60,
      passMark: 20,
      attemptLimit: 1,
      windowEnabled: false,
      windowStart: 0,
      windowEnd: 0
    }
  }
};
const ATT_KEY = (id) => `origin-timed-exam-${id}-attempts`;
const LOG_KEY = (id) => `origin-timed-exam-${id}-log`;
const DEFAULT_PASS = '1234';
const SESSION_KEY = 'origin-admin-unlocked';

function currentExamId() {
  try {
    const v = ($('examSelect') && $('examSelect').value) || 'final-l1l2';
    if (EXAMS[v]) return v;
  } catch (e) {}
  return 'final-l1l2';
}
function currentTotal() { return EXAMS[currentExamId()].total; }

const $ = (id) => document.getElementById(id);

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

function getPass() {
  try { return localStorage.getItem(PASS_KEY) || DEFAULT_PASS; }
  catch (e) { return DEFAULT_PASS; }
}
function isUnlocked() {
  try { return sessionStorage.getItem(SESSION_KEY) === '1'; }
  catch (e) { return false; }
}
/* Default seeds per exam (see EXAMS above).
   Apply until the admin saves different settings. */
function seedConfig() {
  return Object.assign({}, EXAMS[currentExamId()].seed);
}
function normConfig(c) {
  const s = seedConfig();
  const total = currentTotal();
  const durationMin = Math.min(180, Math.max(5, parseInt(c.durationMin, 10) || s.durationMin));
  const passMark = Math.min(total, Math.max(1, parseInt(c.passMark, 10) || s.passMark));
  let attemptLimit = parseInt(c.attemptLimit, 10);
  if (!(attemptLimit >= 0)) attemptLimit = s.attemptLimit;
  const windowEnabled = !!c.windowEnabled;
  const windowStart = Number(c.windowStart) || 0;
  const windowEnd = Number(c.windowEnd) || 0;
  return { durationMin, passMark, attemptLimit, windowEnabled, windowStart, windowEnd };
}
function getConfig() {
  try {
    const all = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}');
    if (all && all[currentExamId()]) return normConfig(all[currentExamId()]);
  } catch (e) {}
  return seedConfig();
}
function toLocalInput(ms) {
  const d = new Date(ms);
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}

function showLocked() {
  $('lockCard').classList.remove('hidden');
  $('settingsCard').classList.add('hidden');
  $('dangerCard').classList.add('hidden');
  $('rosterCard').classList.add('hidden');
}
function showUnlocked() {
  $('lockCard').classList.add('hidden');
  $('settingsCard').classList.remove('hidden');
  $('dangerCard').classList.remove('hidden');
  $('rosterCard').classList.remove('hidden');
  const c = getConfig();
  const total = currentTotal();
  if ($('examSelect')) $('examSelect').value = currentExamId();
  const passLabel = $('passMarkLabel');
  if (passLabel) {
    passLabel.textContent = currentLang === 'ar'
      ? `درجة النجاح (إجابات صحيحة من ${total})`
      : `Pass mark (correct answers out of ${total})`;
  }
  $('durationInput').value = c.durationMin;
  const passInput = $('passInput');
  passInput.value = c.passMark;
  passInput.max = String(total);
  $('windowEnable').checked = c.windowEnabled;
  $('windowStartInput').value = c.windowStart > 0 ? toLocalInput(c.windowStart) : toLocalInput(seedConfig().windowStart);
  $('windowEndInput').value = c.windowEnd > 0 ? toLocalInput(c.windowEnd) : toLocalInput(seedConfig().windowEnd);
  $('attemptInput').value = String(c.attemptLimit === 0 ? 0 : 1);
  renderRoster();
  syncAdminRemote();
}

function readLog() {
  try {
    const l = JSON.parse(localStorage.getItem(LOG_KEY(currentExamId())) || '[]');
    return Array.isArray(l) ? l : [];
  } catch (e) { return []; }
}

function fmtDateTime(ms) {
  try {
    return new Date(ms).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-GB', {
      day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit'
    });
  } catch (e) { return ''; }
}

let rosterRows = [];
let rosterRemote = false;
let lastRemoteFetch = 0;

function toRow(r, docId) {
  return {
    docId: docId || null,
    name: r.name || '',
    score: r.score | 0,
    total: r.total | 0,
    pct: (r.pct !== undefined && r.pct !== null) ? (r.pct | 0) : (r.total ? Math.round(((r.score | 0) / r.total) * 100) : 0),
    passed: !!r.passed,
    perType: r.perType || {},
    wrong: r.wrong | 0,
    unanswered: r.unanswered | 0,
    durationUsed: r.durationUsed | 0,
    expired: !!r.expired,
    submittedAt: r.submittedAt || r.clientAt || 0,
    items: Array.isArray(r.items) ? r.items : []
  };
}

function flashLog(msg) {
  const m = $('logMsg');
  if (!m) return;
  m.classList.remove('hidden');
  m.textContent = msg;
  setTimeout(() => m.classList.add('hidden'), 3500);
}

function renderRoster() {
  rosterRows = readLog().slice().reverse().map((r) => toRow(r, null));
  rosterRemote = false;
  paintRoster();
}

function remoteCanDelete() {
  return (typeof Remote !== 'undefined') && !!Remote.teacher;
}

function paintRoster() {
  const list = $('rosterList');
  const sum = $('rosterSummary');
  if (!list || !sum) return;
  const log = rosterRows;
  const isAr = currentLang === 'ar';

  if (!log.length) {
    sum.innerHTML = '';
    list.innerHTML = `<p class="admin-note">${tOrEn('roEmpty')}</p>`;
    return;
  }

  const avg = Math.round(log.reduce((a, r) => a + (r.pct || 0), 0) / log.length);
  const passed = log.filter((r) => r.passed).length;
  sum.innerHTML = `
    <span>👥 ${log.length} ${tOrEn('roAttempts')}</span>
    <span>· 📊 ${tOrEn('roAvg')}: ${avg}%</span>
    <span>· ✅ ${tOrEn('roPassed')}: ${passed}</span>
    <span>· ${rosterRemote ? '🌐 ' + tOrEn('adOnlineRoster') : '📱 ' + tOrEn('adLocalRoster')}</span>`;

  list.innerHTML = log.map((r, i) => {
    const wrong = (r.items || []).filter((it) => !it.good);
    const wrongHtml = wrong.length
      ? `<div class="roster-wrong">${wrong.map((it) => {
        const ya = it.your === null || it.your === undefined ? '—' : String(it.your);
        return `<div>Q${it.n} · ${esc(ya.length > 80 ? ya.slice(0, 80) + '…' : ya)}</div>`;
      }).join('')}</div>`
      : `<p class="admin-note">${tOrEn('roNoWrong')}</p>`;
    const perType = Object.keys(r.perType || {}).map((k) => {
      const s = r.perType[k];
      return `<span class="chip">${tOrEn('type_' + k)} ${s.c}/${s.t}</span>`;
    }).join('');
    const secs = Math.round((r.durationUsed || 0) / 1000);
    const dur = isAr
      ? (secs < 60 ? `${secs} ث` : `${Math.floor(secs / 60)} د ${secs % 60} ث`)
      : (secs < 60 ? `${secs}s` : `${Math.floor(secs / 60)}m ${secs % 60}s`);
    return `
      <details class="roster-row">
        <summary>
          <strong>${esc(r.name || '—')}</strong>
          <span class="roster-score">${r.score} / ${r.total} · ${r.pct}%</span>
          <span class="texam-status ${r.passed ? 'st-done' : ''}">${r.passed ? '✓' : '✗'}</span>
        </summary>
        <div class="roster-det">
          <p class="muted">${fmtDateTime(r.submittedAt)} · ⏱ ${dur}${r.expired ? (isAr ? ' · الوقت خلص عليه' : ' · time ran out') : ''}</p>
          <div class="roster-chips">${perType}</div>
          <p class="mono">${tOrEn('roWrong')} (${wrong.length}) · ${tOrEn('roDetails')}</p>
          ${wrongHtml}
          ${(r.docId && remoteCanDelete()) ? `<div class="texam-actions"><button class="btn btn-ghost" data-del="${esc(r.docId)}">${tOrEn('roDelete')}</button></div>` : ''}
        </div>
      </details>`;
  }).join('');

  list.querySelectorAll('[data-del]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      if (!confirm(tOrEn('adDeleteAsk'))) return;
      try {
        await Remote.deleteAttempt(btn.dataset.del);
        rosterRows = rosterRows.filter((r) => r.docId !== btn.dataset.del);
        paintRoster();
        flashLog(tOrEn('adDeleted'));
      } catch (e) {}
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (isUnlocked()) showUnlocked();
  else showLocked();

  $('unlockBtn').addEventListener('click', () => {
    if ($('lockPassInput').value === getPass()) {
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) {}
      $('lockErr').textContent = '';
      $('lockPassInput').value = '';
      showUnlocked();
    } else {
      $('lockErr').textContent = tOrEn('adWrong');
    }
  });
  $('lockPassInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') $('unlockBtn').click();
  });

  $('saveBtn').addEventListener('click', async () => {
    const examId = currentExamId();
    const total = currentTotal();
    const durationMin = Math.min(180, Math.max(5, parseInt($('durationInput').value, 10) || 45));
    const passMark = Math.min(total, Math.max(1, parseInt($('passInput').value, 10) || 25));
    const attemptLimit = $('attemptInput').value === '0' ? 0 : 1;
    const windowEnabled = $('windowEnable').checked;
    const windowStart = new Date($('windowStartInput').value).getTime();
    const windowEnd = new Date($('windowEndInput').value).getTime();
    const ok = $('saveOk');
    if (windowEnabled && (!(windowStart > 0) || !(windowEnd > windowStart))) {
      ok.classList.remove('hidden');
      ok.style.color = 'var(--c-red)';
      ok.textContent = currentLang === 'ar' ? 'ظبط معاد الفتح والقفل الأول — القفل لازم يبقى بعد الفتح.' : 'Set a valid open/close time first — close must be after open.';
      return;
    }
    let all = {};
    try { all = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}'); } catch (e) {}
    all[examId] = { durationMin, passMark, attemptLimit, windowEnabled, windowStart, windowEnd };
    try { localStorage.setItem(CONFIG_KEY, JSON.stringify(all)); } catch (e) {}
    const np = $('newPassInput').value.trim();
    if (np.length >= 4) {
      try { localStorage.setItem(PASS_KEY, np); } catch (e) {}
      $('newPassInput').value = '';
    }
    // Push to students (Firestore). This ONLY reaches student devices
    // when signed in as the teacher — otherwise it stays local.
    const pub = await publishConfig(examId, all[examId]);
    ok.classList.remove('hidden');
    if (pub === 'ok') {
      ok.style.color = '';
      ok.textContent = tOrEn('adPublished') + ` · ${durationMin} min · ${passMark}/${total}`;
    } else if (pub === 'noteacher') {
      ok.style.color = 'var(--c-red)';
      ok.textContent = tOrEn('adLocalOnly');
    } else {
      ok.style.color = 'var(--c-red)';
      ok.textContent = tOrEn('errNet');
    }
    setTimeout(() => ok.classList.add('hidden'), 5000);
  });

  $('lockBtn').addEventListener('click', () => {
    try { sessionStorage.removeItem(SESSION_KEY); } catch (e) {}
    showLocked();
  });

  const examSel = $('examSelect');
  if (examSel) examSel.addEventListener('change', () => {
    if (isUnlocked()) showUnlocked();
  });

  $('clearAttemptsBtn').addEventListener('click', () => {
    if (!confirm(tOrEn('adClearConfirm'))) return;
    try {
      const examId = currentExamId();
      localStorage.removeItem(`origin-timed-exam-${examId}-state`);
      localStorage.removeItem(`origin-timed-exam-${examId}-report`);
      localStorage.removeItem(ATT_KEY(examId));
    } catch (e) {}
    $('saveOk').classList.remove('hidden');
    $('saveOk').textContent = tOrEn('adCleared');
    setTimeout(() => $('saveOk').classList.add('hidden'), 3500);
  });

  $('exportCsvBtn').addEventListener('click', () => {
    if (!rosterRows.length) return;
    const head = ['name', 'score', 'total', 'pct', 'passed', 'wrong', 'unanswered', 'time_used_sec', 'expired', 'submitted_at'];
    const rows = rosterRows.map((r) => [
      `"${String(r.name || '').replace(/"/g, '""')}"`,
      r.score, r.total, r.pct, r.passed ? 1 : 0, r.wrong, r.unanswered,
      Math.round((r.durationUsed || 0) / 1000), r.expired ? 1 : 0,
      new Date(r.submittedAt).toISOString()
    ].join(','));
    const csv = '﻿' + head.join(',') + '\n' + rows.join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `exam-results-${currentExamId()}.csv`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  });

  $('clearLogBtn').addEventListener('click', () => {
    if (!confirm(tOrEn('roClearConfirm'))) return;
    try { localStorage.removeItem(LOG_KEY(currentExamId())); } catch (e) {}
    renderRoster();
    const m = $('logMsg');
    m.classList.remove('hidden');
    m.textContent = tOrEn('roLogCleared');
    setTimeout(() => m.classList.add('hidden'), 3500);
  });

  $('clearRemoteBtn').addEventListener('click', async () => {
    if (!confirm(tOrEn('adClearRemoteConfirm'))) return;
    try {
      if ((typeof Remote !== 'undefined') && Remote.teacher) {
        await Remote.clearRoster(currentExamId());
        rosterRows = [];
        paintRoster();
        flashLog(tOrEn('roLogCleared'));
      }
    } catch (e) {}
  });

  $('loginBtn').addEventListener('click', async () => {
    const b = $('loginBtn');
    b.disabled = true;
    try {
      await Remote.teacherLogin($('teacherEmail').value.trim(), $('teacherPass').value);
      $('teacherPass').value = '';
      refreshLoginUI();
      await loadRemoteRoster();
    } catch (e) {
      const st = $('loginState');
      st.style.color = 'var(--c-red)';
      st.textContent = tOrEn('adLoginFail');
      setTimeout(() => { st.style.color = ''; }, 3000);
    }
    b.disabled = false;
  });

  $('logoutBtn').addEventListener('click', async () => {
    try { await Remote.teacherLogout(); } catch (e) {}
    refreshLoginUI();
    renderRoster();
  });

  if (typeof Remote !== 'undefined') {
    Remote.onAuth((isT) => {
      refreshLoginUI();
      if (isT && isUnlocked()) loadRemoteRoster().catch(() => {});
      else if (!isT && rosterRemote) renderRoster();
    });
  }
});

async function publishConfig(examId, cfg) {
  // Pushes the config to Firestore so ALL student devices pick it up.
  // Returns 'ok' | 'noteacher' | 'fail'. Never throws.
  try {
    if (typeof Remote === 'undefined' || !Remote.enabled || !Remote.teacher) return 'noteacher';
    await Remote.saveConfig(examId, cfg);
    return 'ok';
  } catch (e) { return 'fail'; }
}

function refreshLoginUI() {
  const card = $('loginCard');
  if (!card) return;
  let configured = false;
  try {
    const fc = window.FIREBASE_CONFIG || {};
    configured = !!(fc.apiKey && fc.apiKey.indexOf('PASTE') !== 0);
  } catch (e) {}
  const show = (typeof Remote !== 'undefined') && configured && isUnlocked();
  card.classList.toggle('hidden', !show);
  if (!show) return;
  const st = $('loginState');
  const form = $('loginForm');
  const out = $('logoutBtn');
  if (Remote.teacher) {
    st.style.color = '';
    st.textContent = tOrEn('adLoggedInAs') + ' ' + (Remote.teacherEmail || '');
    form.classList.add('hidden');
    out.classList.remove('hidden');
  } else {
    st.textContent = tOrEn('adNeedLogin');
    form.classList.remove('hidden');
    out.classList.add('hidden');
  }
}

async function loadRemoteRoster() {
  const rows = await Remote.fetchRoster(currentExamId());
  rosterRows = rows.map((r) => toRow(r, r.id));
  rosterRemote = true;
  lastRemoteFetch = Date.now();
  paintRoster();
}

async function syncAdminRemote() {
  refreshLoginUI();
  try {
    if (typeof Remote === 'undefined') return;
    if (!Remote.enabled) await Remote.init();
    refreshLoginUI();
    if (Remote.teacher) {
      if (rosterRemote && Date.now() - lastRemoteFetch < 60000) paintRoster();
      else await loadRemoteRoster();
    } else if (rosterRemote) {
      renderRoster(); // signed out → back to local
    }
  } catch (e) {}
}

window.addEventListener('langChanged', () => {
  if (isUnlocked()) showUnlocked();
});
