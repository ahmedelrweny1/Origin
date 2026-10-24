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
      windowEnd: new Date(2026, 8, 15, 12, 0, 0).getTime(),
      hideScores: true
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
      windowEnd: 0,
      hideScores: true
    }
  },
  'final-l4': {
    total: 50,
    seed: {
      durationMin: 60,
      passMark: 25,
      attemptLimit: 1,
      windowEnabled: true,
      windowStart: new Date(2026, 9, 24, 12, 0, 0).getTime(),
      windowEnd: new Date(2026, 9, 26, 23, 59, 59).getTime(),
      hideScores: true
    }
  }
};
const ATT_KEY = (id) => `origin-timed-exam-${id}-attempts`;
const LOG_KEY = (id) => `origin-timed-exam-${id}-log`;
const EXAM_ORDER = ['final-l1l2', 'mid-l1l2', 'final-l4'];
const DEFAULT_PASS = '1234';
const SESSION_KEY = 'origin-admin-unlocked';

function normName(s) {
  return String(s || '').trim().toLowerCase()
    .replace(/[ً-ٰٟ]/g, '').replace(/ـ/g, '')
    .replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
    .replace(/\s+/g, ' ');
}

function rosterView() {
  try {
    const v = ($('rosterView') && $('rosterView').value) || 'all';
    if (v === 'all' || EXAMS[v]) return v;
  } catch (e) {}
  return 'all';
}

function examShort(id) {
  if (id === 'final-l1l2') return tOrEn('roFirst');
  if (id === 'mid-l1l2') return tOrEn('roSecond');
  if (id === 'final-l4') return tOrEn('roThird');
  return id;
}

function mergeKey(r) {
  if (r.owner) return 'uid:' + r.owner;
  return 'name:' + normName(r.name);
}

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
  const hideScores = c.hideScores !== undefined ? !!c.hideScores : true;
  return { durationMin, passMark, attemptLimit, windowEnabled, windowStart, windowEnd, hideScores };
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
  if ($('hideScoresCheck')) $('hideScoresCheck').checked = c.hideScores !== false;
  renderRoster();
  syncAdminRemote();
}

function readLog(examId) {
  const id = (examId && EXAMS[examId]) ? examId : currentExamId();
  try {
    const l = JSON.parse(localStorage.getItem(LOG_KEY(id)) || '[]');
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
let combinedRows = [];
let rosterRemote = false;
let lastRemoteFetch = 0;
let lastRemoteView = '';

function getExamBank(examId, lang) {
  const isAr = lang ? lang === 'ar' : currentLang === 'ar';
  const g = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : {});
  if (examId === 'final-l4') {
    return isAr
      ? (g.LECT4_FULL_EXAM_AR || g.LECT4_FULL_EXAM_EN || [])
      : (g.LECT4_FULL_EXAM_EN || g.LECT4_FULL_EXAM_AR || []);
  }
  if (examId === 'mid-l1l2') {
    return isAr
      ? (g.LECT_MID_EXAM_AR || g.LECT_MID_EXAM_EN || [])
      : (g.LECT_MID_EXAM_EN || g.LECT_MID_EXAM_AR || []);
  }
  if (examId === 'final-l1l2') {
    return isAr
      ? (g.LECT_FINAL_EXAM_AR || g.LECT_FINAL_EXAM_EN || [])
      : (g.LECT_FINAL_EXAM_EN || g.LECT_FINAL_EXAM_AR || []);
  }
  return [];
}

function isSingle(q) {
  return !q.type || q.type === 'mcq' || q.type === 'tf';
}

function getBankCorrectText(q) {
  if (!q) return '';
  if (isSingle(q)) {
    return (q.options && q.options[q.answer] !== undefined)
      ? q.options[q.answer]
      : String(q.answer !== undefined ? q.answer : '');
  }
  if (q.type === 'typing') {
    return Array.isArray(q.accepted) ? q.accepted.join(' / ') : String(q.answer || '');
  }
  if (q.type === 'multi') {
    return (q.answers || []).slice().sort((a, b) => a - b)
      .map((i) => (q.options && q.options[i]) ? q.options[i] : (i + 1))
      .join(' + ');
  }
  if (q.type === 'ordering') {
    return (q.answers || []).map((oi, k) => `${k + 1}. ${(q.options && q.options[oi]) ? q.options[oi] : oi}`).join('   ');
  }
  if (q.type === 'matching') {
    return (q.pairs || []).map((p) => `${p.left} → ${p.right}`).join('   ');
  }
  return String(q.answer !== undefined ? q.answer : '');
}

function formatStudentAnswer(it, q) {
  const ans = it.your;
  if (ans === null || ans === undefined || ans === '') return null; // Unanswered
  if (q) {
    if (isSingle(q) && typeof ans === 'number' && q.options && q.options[ans] !== undefined) {
      return q.options[ans];
    }
    if (q.type === 'multi' && Array.isArray(ans)) {
      if (!ans.length) return null;
      return ans.slice().sort((a, b) => a - b).map((i) => (q.options && q.options[i]) ? q.options[i] : (i + 1)).join(' + ');
    }
    if (q.type === 'ordering' && Array.isArray(ans)) {
      if (!ans.length) return null;
      return ans.map((oi, k) => `${k + 1}. ${(q.options && q.options[oi]) ? q.options[oi] : oi}`).join('   ');
    }
    if (q.type === 'matching' && typeof ans === 'object' && !Array.isArray(ans)) {
      const keys = Object.keys(ans);
      if (!keys.length) return null;
      return keys.map((k) => `${k} → ${ans[k]}`).join('   ');
    }
  }
  if (typeof ans === 'object') {
    try { return JSON.stringify(ans); } catch (e) { return String(ans); }
  }
  return String(ans);
}

function enrichItem(it, examId, lang) {
  const bank = getExamBank(examId, lang || currentLang);
  let q = null;
  if (it.id) q = bank.find((x) => x.id === it.id);
  if (!q && it.n && bank[it.n - 1]) q = bank[it.n - 1];

  const type = it.type || (q ? (q.type || 'mcq') : 'mcq');
  const good = !!it.good;
  const question = it.question || (q ? q.question : (currentLang === 'ar' ? `السؤال رقم ${it.n || ''}` : `Question #${it.n || ''}`));
  const correct = it.correct || (q ? getBankCorrectText(q) : '');
  const explain = it.explain || (q ? (q.explain || '') : '');
  const accepted = it.accepted || (q ? q.accepted : null);
  const yourFormatted = formatStudentAnswer(it, q);

  return {
    n: it.n || 0,
    id: it.id || (q ? q.id : ''),
    type,
    good,
    question,
    your: it.your,
    yourFormatted,
    correct,
    explain,
    accepted
  };
}

function toRow(r, docId, examId) {
  const exId = examId || r.examId || currentExamId();
  const rawItems = Array.isArray(r.items) ? r.items : [];
  const items = rawItems.map((it) => enrichItem(it, exId, r.lang || currentLang));
  const score = r.score | 0;
  const total = (r.total | 0) || (EXAMS[exId] ? EXAMS[exId].total : (items.length || 0));
  const pct = (r.pct !== undefined && r.pct !== null) ? (r.pct | 0) : (total ? Math.round((score / total) * 100) : 0);
  const wrongCount = r.wrong !== undefined ? (r.wrong | 0) : items.filter((it) => !it.good).length;
  const unansweredCount = r.unanswered !== undefined ? (r.unanswered | 0) : items.filter((it) => it.yourFormatted === null).length;
  const typingCount = items.filter((it) => it.type === 'typing').length;

  return {
    docId: docId || null,
    examId: exId,
    lang: r.lang || currentLang,
    name: r.name || '',
    owner: r.owner || null,
    score,
    total,
    pct,
    passed: !!r.passed,
    perType: r.perType || {},
    wrong: wrongCount,
    unanswered: unansweredCount,
    typingCount,
    durationUsed: r.durationUsed | 0,
    expired: !!r.expired,
    submittedAt: r.submittedAt || r.clientAt || 0,
    items
  };
}

function flashLog(msg) {
  const m = $('logMsg');
  if (!m) return;
  m.classList.remove('hidden');
  m.textContent = msg;
  setTimeout(() => m.classList.add('hidden'), 3500);
}

function mergeRowsDynamic(rowsByExam) {
  const byKey = new Map();
  EXAM_ORDER.forEach((examId) => {
    const list = rowsByExam[examId] || [];
    list.forEach((row) => {
      const key = mergeKey(row);
      let entry = byKey.get(key);
      if (!entry) {
        entry = { key, name: row.name || '', exams: {}, latest: 0 };
        byKey.set(key, entry);
      }
      const cur = entry.exams[examId];
      if (!cur || (row.submittedAt || 0) >= (cur.submittedAt || 0)) {
        entry.exams[examId] = row;
      }
      if ((row.submittedAt || 0) >= entry.latest) {
        entry.latest = row.submittedAt || 0;
        if (row.name) entry.name = row.name;
      }
    });
  });
  for (const entry of byKey.values()) {
    entry.first = entry.exams['final-l1l2'] || null;
    entry.second = entry.exams['mid-l1l2'] || null;
    entry.third = entry.exams['final-l4'] || null;
  }
  return [...byKey.values()].sort((a, b) => (b.latest || 0) - (a.latest || 0));
}

function renderRoster() {
  const view = rosterView();
  if (view === 'all') {
    renderCombinedLocal();
    return;
  }
  rosterRows = readLog(view).slice().reverse().map((r) => toRow(r, null, view));
  combinedRows = [];
  rosterRemote = false;
  paintRoster();
}

function renderCombinedLocal() {
  const rowsByExam = {};
  EXAM_ORDER.forEach((id) => {
    rowsByExam[id] = readLog(id).map((r) => toRow(r, null, id));
  });
  combinedRows = mergeRowsDynamic(rowsByExam);
  rosterRows = [];
  rosterRemote = false;
  paintCombined();
}

function remoteCanDelete() {
  return (typeof Remote !== 'undefined') && !!Remote.teacher;
}

function renderQuestionCards(items, filter, isAr) {
  if (!items || !items.length) {
    return `<p class="admin-note" style="padding:0.5rem 0;">${isAr ? 'لا توجد تفاصيل مسجلة لأسئلة هذه المحاولة.' : 'No question details recorded for this attempt.'}</p>`;
  }
  let list = items;
  if (filter === 'mistakes') {
    list = items.filter((it) => !it.good);
    if (!list.length) {
      return `<p class="admin-note" style="padding:0.6rem 0;color:var(--c-green);font-weight:600;">✓ ${tOrEn('roNoWrong')}</p>`;
    }
  } else if (filter === 'written') {
    list = items.filter((it) => it.type === 'typing');
    if (!list.length) {
      return `<p class="admin-note" style="padding:0.6rem 0;">${tOrEn('roNoWritten')}</p>`;
    }
  }

  return list.map((it) => {
    const isGood = !!it.good;
    const isTyping = it.type === 'typing';
    const cardClass = isGood ? 'item-good' : 'item-bad';
    const badgeText = isGood
      ? (isAr ? '✓ إجابة صحيحة' : '✓ Correct')
      : (isAr ? '✗ إجابة غير صحيحة' : '✗ Incorrect');

    const typeBadge = isTyping
      ? `<span class="roster-q-badge" style="background:rgba(255,160,0,0.15);color:var(--c-amber,#b78103);border:1px solid rgba(255,160,0,0.3);">✍️ ${isAr ? 'سؤال مقالي / كتابي' : 'Written / Typing'}</span>`
      : `<span class="roster-q-badge" style="opacity:0.8;">${tOrEn('type_' + it.type)}</span>`;

    const ansBoxClass = isGood ? 'ans-good' : 'ans-bad';
    const yourLabel = isTyping ? tOrEn('roYourWritten') : tOrEn('roYourAns');
    const yourHtml = it.yourFormatted !== null
      ? esc(it.yourFormatted)
      : `<em style="opacity:0.65;font-weight:normal;">${tOrEn('roUnanswered')}</em>`;

    const showCorrect = (!isGood || isTyping) && !!it.correct;
    const correctBox = showCorrect
      ? `<div class="roster-ans-box ans-correct">
           <span class="ans-label">${tOrEn('roCorrectAns')}</span>
           <div class="ans-val" style="font-weight:600;">${esc(it.correct)}</div>
         </div>`
      : '';

    const explainBox = it.explain
      ? `<div class="roster-q-explain">
           <span class="ans-label">💡 ${tOrEn('roExplain')}</span>
           <div class="ans-val">${esc(it.explain)}</div>
         </div>`
      : '';

    return `
      <div class="roster-q-card ${cardClass}">
        <div class="roster-q-header">
          <div class="roster-q-num">
            <span>#${it.n || ''}</span>
            ${typeBadge}
          </div>
          <span class="roster-q-badge ${cardClass}">${badgeText}</span>
        </div>
        <p class="roster-q-text">${esc(it.question)}</p>
        <div class="roster-q-answers">
          <div class="roster-ans-box ${ansBoxClass}">
            <span class="ans-label">${yourLabel}</span>
            <div class="ans-val">${yourHtml}</div>
          </div>
          ${correctBox}
          ${explainBox}
        </div>
      </div>`;
  }).join('');
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
    const typing = (r.items || []).filter((it) => it.type === 'typing');
    const totalItems = (r.items || []).length;
    const defaultTab = wrong.length > 0 ? 'mistakes' : (typing.length > 0 ? 'written' : 'all');

    const perType = Object.keys(r.perType || {}).map((k) => {
      const s = r.perType[k];
      return `<span class="chip">${tOrEn('type_' + k)} ${s.c}/${s.t}</span>`;
    }).join('');

    const secs = Math.round((r.durationUsed || 0) / 1000);
    const dur = isAr
      ? (secs < 60 ? `${secs} ث` : `${Math.floor(secs / 60)} د ${secs % 60} ث`)
      : (secs < 60 ? `${secs}s` : `${Math.floor(secs / 60)}m ${secs % 60}s`);

    return `
      <details class="roster-row" data-row-idx="${i}">
        <summary>
          <div class="roster-summary-left">
            <strong>${esc(r.name || '—')}</strong>
            <span class="roster-meta-mini">${fmtDateTime(r.submittedAt)} · ⏱ ${dur}</span>
          </div>
          <span class="roster-score">${r.score} / ${r.total} · ${r.pct}%</span>
          <span class="texam-status ${r.passed ? 'st-done' : ''}">${r.passed ? '✓' : '✗'}</span>
        </summary>
        <div class="roster-det">
          <p class="muted">${fmtDateTime(r.submittedAt)} · ⏱ ${dur}${r.expired ? (isAr ? ' · انتهى الوقت' : ' · time ran out') : ''}</p>
          <div class="roster-chips">${perType}</div>

          <div style="margin:0.8rem 0 0.4rem;padding-top:0.6rem;border-top:1px dashed var(--rule-soft);">
            <div class="roster-overview-stats">
              <span class="chip" style="background:rgba(211,47,47,0.1);color:var(--c-red);font-weight:700;">❌ ${wrong.length} ${tOrEn('roMistakes')}</span>
              <span class="chip" style="background:rgba(255,160,0,0.15);color:var(--c-amber,#b78103);font-weight:700;">✍️ ${typing.length} ${tOrEn('roWritten')}</span>
              <span class="chip" style="opacity:0.8;">📋 ${totalItems} ${isAr ? 'سؤال إجمالي' : 'total questions'}</span>
            </div>

            <div class="roster-filter-tabs">
              <button type="button" class="roster-tab-btn ${defaultTab === 'mistakes' ? 'active' : ''}" data-tab="mistakes">
                ❌ ${tOrEn('roTabMistakes')} (${wrong.length})
              </button>
              <button type="button" class="roster-tab-btn ${defaultTab === 'written' ? 'active' : ''}" data-tab="written">
                ✍️ ${tOrEn('roTabWritten')} (${typing.length})
              </button>
              <button type="button" class="roster-tab-btn ${defaultTab === 'all' ? 'active' : ''}" data-tab="all">
                📋 ${tOrEn('roTabAll')} (${totalItems})
              </button>
            </div>

            <div class="roster-items-container">
              ${renderQuestionCards(r.items, defaultTab, isAr)}
            </div>
          </div>

          ${(r.docId && remoteCanDelete()) ? `<div class="texam-actions" style="margin-top:0.8rem;"><button class="btn btn-ghost" data-del="${esc(r.docId)}">${tOrEn('roDelete')}</button></div>` : ''}
        </div>
      </details>`;
  }).join('');

  list.querySelectorAll('.roster-tab-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const rowEl = btn.closest('.roster-row');
      if (!rowEl) return;
      const rowIdx = parseInt(rowEl.dataset.rowIdx, 10);
      const row = rosterRows[rowIdx];
      if (!row) return;
      const tab = btn.dataset.tab;
      const parentTabs = btn.closest('.roster-filter-tabs');
      parentTabs.querySelectorAll('.roster-tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const container = rowEl.querySelector('.roster-items-container');
      if (container) {
        container.innerHTML = renderQuestionCards(row.items, tab, isAr);
      }
    });
  });

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

function paintCombined() {
  const list = $('rosterList');
  const sum = $('rosterSummary');
  if (!list || !sum) return;
  if (!combinedRows.length) {
    sum.innerHTML = '';
    list.innerHTML = `<p class="admin-note">${tOrEn('roEmpty')}</p>`;
    return;
  }
  const isAr = currentLang === 'ar';
  const avgOf = (rows) => rows.length
    ? Math.round(rows.reduce((a, r) => a + (r.pct || 0), 0) / rows.length)
    : 0;

  const statsHtml = EXAM_ORDER.map((id) => {
    const taken = combinedRows.map((e) => e.exams && e.exams[id]).filter(Boolean);
    const avg = avgOf(taken);
    return `<span>· ${esc(examShort(id))}: ${taken.length} (📊 ${avg}%)</span>`;
  }).join(' ');

  sum.innerHTML = `
    <span>👥 ${combinedRows.length} ${tOrEn('roAttempts')}</span>
    ${statsHtml}
    <span>· ${rosterRemote ? '🌐 ' + tOrEn('adOnlineRoster') : '📱 ' + tOrEn('adLocalRoster')}</span>`;

  list.innerHTML = combinedRows.map((e, rowIdx) => {
    const takenCount = EXAM_ORDER.filter((id) => e.exams && e.exams[id]).length;
    const badge = takenCount === EXAM_ORDER.length
      ? tOrEn('roAllExams')
      : `${takenCount}/${EXAM_ORDER.length} ${tOrEn('roAttempts')}`;

    const scorePills = EXAM_ORDER.map((id) => {
      const row = e.exams && e.exams[id];
      const deg = row ? `${row.score}/${row.total} ${row.passed ? '✓' : '✗'}` : tOrEn('roMissing');
      return `${esc(examShort(id))}: ${esc(deg)}`;
    }).join(' · ');

    const examSectionsHtml = EXAM_ORDER.map((id) => {
      const row = e.exams && e.exams[id];
      if (!row) {
        return `
          <div class="roster-combined-exam-block" style="margin-bottom:0.75rem;padding:0.5rem 0;border-bottom:1px dashed var(--rule-soft);">
            <p class="admin-note" style="margin:0.2rem 0;">${esc(examShort(id))}: ${esc(tOrEn('roMissing'))}</p>
          </div>`;
      }
      const wrong = (row.items || []).filter((it) => !it.good);
      const typing = (row.items || []).filter((it) => it.type === 'typing');
      const totalItems = (row.items || []).length;
      const defaultTab = wrong.length > 0 ? 'mistakes' : (typing.length > 0 ? 'written' : 'all');
      const secs = Math.round((row.durationUsed || 0) / 1000);
      const dur = isAr
        ? (secs < 60 ? `${secs} ث` : `${Math.floor(secs / 60)} د ${secs % 60} ث`)
        : (secs < 60 ? `${secs}s` : `${Math.floor(secs / 60)}m ${secs % 60}s`);

      const perType = Object.keys(row.perType || {}).map((k) => {
        const s = row.perType[k];
        return `<span class="chip">${tOrEn('type_' + k)} ${s.c}/${s.t}</span>`;
      }).join('');

      const delBtn = (row.docId && remoteCanDelete())
        ? `<div class="texam-actions" style="margin-top:0.6rem;"><button class="btn btn-ghost" data-del="${esc(row.docId)}" data-exam="${id}">${tOrEn('roDelete')} · ${esc(examShort(id))}</button></div>`
        : '';

      return `
        <div class="roster-combined-exam-block" data-exam="${id}" style="margin-bottom:1rem;padding-bottom:0.8rem;border-bottom:1px solid var(--rule-soft);">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;">
            <h4 style="margin:0;font-size:0.96rem;">${esc(examShort(id))} · ${row.score} / ${row.total} · ${row.pct}% ${row.passed ? '✓' : '✗'}</h4>
            <span class="muted" style="font-size:0.82rem;">${fmtDateTime(row.submittedAt)} · ⏱ ${dur}${row.expired ? (isAr ? ' · انتهى الوقت' : ' · expired') : ''}</span>
          </div>
          <div class="roster-chips" style="margin-top:0.3rem;">${perType}</div>

          <div class="roster-overview-stats" style="margin-top:0.5rem;">
            <span class="chip" style="background:rgba(211,47,47,0.1);color:var(--c-red);font-weight:700;">❌ ${wrong.length} ${tOrEn('roMistakes')}</span>
            <span class="chip" style="background:rgba(255,160,0,0.15);color:var(--c-amber,#b78103);font-weight:700;">✍️ ${typing.length} ${tOrEn('roWritten')}</span>
            <span class="chip" style="opacity:0.8;">📋 ${totalItems} ${isAr ? 'سؤال إجمالي' : 'total'}</span>
          </div>

          <div class="roster-filter-tabs">
            <button type="button" class="roster-tab-btn ${defaultTab === 'mistakes' ? 'active' : ''}" data-tab="mistakes" data-row-idx="${rowIdx}" data-exam="${id}">
              ❌ ${tOrEn('roTabMistakes')} (${wrong.length})
            </button>
            <button type="button" class="roster-tab-btn ${defaultTab === 'written' ? 'active' : ''}" data-tab="written" data-row-idx="${rowIdx}" data-exam="${id}">
              ✍️ ${tOrEn('roTabWritten')} (${typing.length})
            </button>
            <button type="button" class="roster-tab-btn ${defaultTab === 'all' ? 'active' : ''}" data-tab="all" data-row-idx="${rowIdx}" data-exam="${id}">
              📋 ${tOrEn('roTabAll')} (${totalItems})
            </button>
          </div>

          <div class="roster-items-container">
            ${renderQuestionCards(row.items, defaultTab, isAr)}
          </div>
          ${delBtn}
        </div>`;
    }).join('');

    return `
      <details class="roster-row" data-row-idx="${rowIdx}">
        <summary>
          <div class="roster-summary-left">
            <strong>${esc(e.name || '—')}</strong>
            <span class="roster-meta-mini">${esc(scorePills)}</span>
          </div>
          <span class="texam-status ${takenCount === EXAM_ORDER.length ? 'st-done' : ''}">${esc(badge)}</span>
        </summary>
        <div class="roster-det">
          ${examSectionsHtml}
        </div>
      </details>`;
  }).join('');

  list.querySelectorAll('.roster-tab-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const rowIdx = parseInt(btn.dataset.rowIdx, 10);
      const examId = btn.dataset.exam;
      const entry = combinedRows[rowIdx];
      if (!entry || !entry.exams || !entry.exams[examId]) return;
      const examRow = entry.exams[examId];
      const tab = btn.dataset.tab;
      const parentTabs = btn.closest('.roster-filter-tabs');
      parentTabs.querySelectorAll('.roster-tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const container = btn.closest('.roster-combined-exam-block').querySelector('.roster-items-container');
      if (container) {
        container.innerHTML = renderQuestionCards(examRow.items, tab, isAr);
      }
    });
  });

  list.querySelectorAll('[data-del]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      if (!confirm(tOrEn('adDeleteAsk'))) return;
      try {
        await Remote.deleteAttempt(btn.dataset.del);
        const examId = btn.dataset.exam;
        combinedRows = combinedRows.map((e) => {
          if (e.exams && e.exams[examId] && e.exams[examId].docId === btn.dataset.del) {
            delete e.exams[examId];
            e.first = e.exams['final-l1l2'] || null;
            e.second = e.exams['mid-l1l2'] || null;
            e.third = e.exams['final-l4'] || null;
          }
          return e;
        }).filter((e) => Object.keys(e.exams || {}).length > 0);
        paintCombined();
        flashLog(tOrEn('adDeleted'));
      } catch (err) {}
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
    const hideScores = $('hideScoresCheck') ? $('hideScoresCheck').checked : true;
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
    all[examId] = { durationMin, passMark, attemptLimit, windowEnabled, windowStart, windowEnd, hideScores };
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

  const rosterSel = $('rosterView');
  if (rosterSel) rosterSel.addEventListener('change', () => {
    if (!isUnlocked()) return;
    lastRemoteView = '';
    lastRemoteFetch = 0;
    renderRoster();
    syncAdminRemote();
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
    const view = rosterView();
    if (view === 'all') {
      if (!combinedRows.length) return;
      const head = ['name'];
      EXAM_ORDER.forEach((id) => {
        head.push(
          `${id}_score`, `${id}_total`, `${id}_pct`, `${id}_passed`,
          `${id}_wrong_count`, `${id}_written_count`, `${id}_submitted_at`
        );
      });
      const rows = combinedRows.map((e) => {
        const cols = [`"${String(e.name || '').replace(/"/g, '""')}"`];
        EXAM_ORDER.forEach((id) => {
          const r = e.exams && e.exams[id];
          if (!r) {
            cols.push('', '', '', '', '', '', '');
          } else {
            cols.push(
              r.score,
              r.total,
              r.pct,
              r.passed ? 1 : 0,
              r.wrong,
              r.typingCount,
              r.submittedAt ? new Date(r.submittedAt).toISOString() : ''
            );
          }
        });
        return cols.join(',');
      });
      const csv = '\uFEFF' + head.join(',') + '\n' + rows.join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'exam-results-all.csv';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      return;
    }
    if (!rosterRows.length) return;
    const head = [
      'name', 'score', 'total', 'pct', 'passed',
      'wrong_count', 'unanswered_count', 'written_count',
      'time_used_sec', 'expired', 'submitted_at',
      'mistakes_summary', 'written_answers_summary'
    ];
    const rows = rosterRows.map((r) => {
      const wrongList = (r.items || []).filter((it) => !it.good).map((it) => {
        const yourStr = it.yourFormatted !== null ? it.yourFormatted : 'Unanswered';
        return `Q${it.n}: [Your: ${yourStr}] -> [Correct: ${it.correct || ''}]`;
      }).join(' | ');
      const writtenList = (r.items || []).filter((it) => it.type === 'typing').map((it) => {
        const yourStr = it.yourFormatted !== null ? it.yourFormatted : 'Empty';
        return `Q${it.n}: [${yourStr}] (${it.good ? 'PASS' : 'FAIL'}) [Accepted: ${it.correct || ''}]`;
      }).join(' | ');

      return [
        `"${String(r.name || '').replace(/"/g, '""')}"`,
        r.score,
        r.total,
        r.pct,
        r.passed ? 1 : 0,
        r.wrong,
        r.unanswered,
        r.typingCount,
        Math.round((r.durationUsed || 0) / 1000),
        r.expired ? 1 : 0,
        r.submittedAt ? new Date(r.submittedAt).toISOString() : '',
        `"${wrongList.replace(/"/g, '""')}"`,
        `"${writtenList.replace(/"/g, '""')}"`
      ].join(',');
    });
    const csv = '\uFEFF' + head.join(',') + '\n' + rows.join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `exam-results-${view}.csv`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  });

  $('clearLogBtn').addEventListener('click', () => {
    const view = rosterView();
    if (view === 'all') {
      if (!confirm(tOrEn('roClearBothConfirm'))) return;
      try {
        EXAM_ORDER.forEach((id) => localStorage.removeItem(LOG_KEY(id)));
      } catch (e) {}
      renderRoster();
    } else {
      if (!confirm(tOrEn('roClearConfirm'))) return;
      try { localStorage.removeItem(LOG_KEY(view)); } catch (e) {}
      renderRoster();
    }
    const m = $('logMsg');
    m.classList.remove('hidden');
    m.textContent = tOrEn('roLogCleared');
    setTimeout(() => m.classList.add('hidden'), 3500);
  });

  $('clearRemoteBtn').addEventListener('click', async () => {
    const view = rosterView();
    if (view === 'all') {
      if (!confirm(tOrEn('roClearRemoteBothConfirm'))) return;
      try {
        if ((typeof Remote !== 'undefined') && Remote.teacher) {
          for (const id of EXAM_ORDER) {
            await Remote.clearRoster(id);
          }
          combinedRows = [];
          rosterRows = [];
          paintCombined();
          flashLog(tOrEn('roLogCleared'));
        }
      } catch (e) {}
      return;
    }
    if (!confirm(tOrEn('adClearRemoteConfirm'))) return;
    try {
      if ((typeof Remote !== 'undefined') && Remote.teacher) {
        await Remote.clearRoster(view);
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
  const view = rosterView();
  if (view === 'all') {
    const fetched = await Promise.all(EXAM_ORDER.map((id) => Remote.fetchRoster(id)));
    const rowsByExam = {};
    EXAM_ORDER.forEach((id, idx) => {
      rowsByExam[id] = (fetched[idx] || []).map((r) => toRow(r, r.id, id));
    });
    combinedRows = mergeRowsDynamic(rowsByExam);
    rosterRows = [];
    rosterRemote = true;
    lastRemoteFetch = Date.now();
    lastRemoteView = 'all';
    paintCombined();
    return;
  }
  const rows = await Remote.fetchRoster(view);
  rosterRows = rows.map((r) => toRow(r, r.id, view));
  combinedRows = [];
  rosterRemote = true;
  lastRemoteFetch = Date.now();
  lastRemoteView = view;
  paintRoster();
}

async function syncAdminRemote() {
  refreshLoginUI();
  try {
    if (typeof Remote === 'undefined') return;
    if (!Remote.enabled) await Remote.init();
    refreshLoginUI();
    const view = rosterView();
    if (Remote.teacher) {
      if (rosterRemote && view === lastRemoteView && Date.now() - lastRemoteFetch < 60000) {
        if (view === 'all') paintCombined();
        else paintRoster();
      }
      else await loadRemoteRoster();
    } else if (rosterRemote) {
      renderRoster(); // signed out → back to local
    }
  } catch (e) {}
}

window.addEventListener('langChanged', () => {
  if (isUnlocked()) showUnlocked();
});
