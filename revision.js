/* ============================================================
   Revision session — Lectures 1 + 2 combined
   Part 1: searchable keyword glossary
   Part 2: 20-question mixed quiz (7 L1 + 7 L2 + 6 cross)
   ============================================================ */

const ASSET_V = 'v=3';

const revState = {
  keywords: [],
  cross: [],
  bank1: [],
  bank2: [],
  filter: 'all',
  search: '',
  questions: [],
  cursor: 0,
  correct: 0,
  wrong: 0,
  skipped: 0,
  answered: false,
  perSource: { lect1: { c: 0, t: 0 }, lect2: { c: 0, t: 0 }, combined: { c: 0, t: 0 } }
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src + (src.includes('?') ? '&' : '?') + ASSET_V;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function ensureRevLoaded() {
  const g = globalThis;
  const jobs = [
    ['REVISION_KEYWORDS_AR', 'revision-data-ar.js'],
    ['REVISION_KEYWORDS_EN', 'revision-data-en.js'],
    ['LECT1_QUIZBANK_AR', 'quizbank-lect1-ar.js'],
    ['LECT1_QUIZBANK_EN', 'quizbank-lect1-en.js'],
    ['LECT2_QUIZBANK_AR', 'quizbank-lect2-ar.js'],
    ['LECT2_QUIZBANK_EN', 'quizbank-lect2-en.js']
  ];
  for (const [varName, file] of jobs) {
    if (typeof g[varName] === 'undefined') {
      try { await loadScript(file); } catch (e) { console.error('[rev] failed', file, e); }
    }
  }
}

function tOrEn(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.en && translations.en[key])
    || key;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}

function stripTags(html) {
  const d = document.createElement('div');
  d.innerHTML = html;
  return d.textContent || '';
}

/* ------------------------------------------------------------------
   Init
------------------------------------------------------------------ */
async function init() {
  await ensureRevLoaded();
  const g = globalThis;
  revState.keywords = currentLang === 'ar' ? (g.REVISION_KEYWORDS_AR || []) : (g.REVISION_KEYWORDS_EN || []);
  revState.cross = currentLang === 'ar' ? (g.REVISION_CROSS_AR || []) : (g.REVISION_CROSS_EN || []);
  revState.bank1 = currentLang === 'ar' ? (g.LECT1_QUIZBANK_AR || []) : (g.LECT1_QUIZBANK_EN || []);
  revState.bank2 = currentLang === 'ar' ? (g.LECT2_QUIZBANK_AR || []) : (g.LECT2_QUIZBANK_EN || []);

  applyRevPlaceholders();
  renderKeywords();
  wireQuiz();
}

function applyRevPlaceholders() {
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const v = tOrEn(key);
    if (v && v !== key) el.setAttribute('placeholder', v);
  });
}

/* ------------------------------------------------------------------
   Part 1 — Keywords
------------------------------------------------------------------ */
function renderKeywords() {
  const grid = document.getElementById('revKwGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const q = revState.search.trim().toLowerCase();
  const items = revState.keywords.filter(k => {
    if (revState.filter !== 'all' && k.lecture !== revState.filter) return false;
    if (!q) return true;
    const hay = (k.term + ' ' + stripTags(k.brief)).toLowerCase();
    return hay.includes(q);
  });

  const countEl = document.getElementById('revKwCount');
  if (countEl) {
    countEl.textContent = currentLang === 'ar'
      ? `${items.length} مصطلح`
      : `${items.length} terms`;
  }

  if (!items.length) {
    grid.innerHTML = `<p class="muted" style="grid-column:1/-1;">${tOrEn('revNoMatch')}</p>`;
    return;
  }

  items.forEach(k => {
    const card = document.createElement('div');
    card.className = 'rev-kw-card';
    const tagLabel = k.lecture === 'lect1' ? tOrEn('revSrcL1') : tOrEn('revSrcL2');
    card.innerHTML = `
      <div class="rev-kw-top">
        <strong class="rev-kw-term">${k.term}</strong>
        <span class="chip ${k.lecture === 'lect1' ? '' : 'chip-solid'} rev-kw-tag">${tagLabel}</span>
      </div>
      <p class="rev-kw-brief">${k.brief}</p>
    `;
    grid.appendChild(card);
  });
}

function wireFilters() {
  document.querySelectorAll('#revFilterChips .diff-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#revFilterChips .diff-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      revState.filter = chip.dataset.filter;
      renderKeywords();
    });
  });
  const search = document.getElementById('revSearch');
  if (search) {
    search.addEventListener('input', () => {
      revState.search = search.value;
      renderKeywords();
    });
  }
}

/* ------------------------------------------------------------------
   Part 2 — Combined quiz (7 + 7 + 6)
------------------------------------------------------------------ */
function wireQuiz() {
  document.getElementById('revStartBtn').addEventListener('click', startRevQuiz);
  document.getElementById('revSkipBtn').addEventListener('click', () => {
    if (revState.answered) return goNext();
    revState.skipped++;
    goNext();
  });
  document.getElementById('revNextBtn').addEventListener('click', goNext);
  document.getElementById('revRetryBtn').addEventListener('click', () => {
    document.getElementById('revResult').classList.add('hidden');
    document.getElementById('revPicker').classList.remove('hidden');
    document.getElementById('revPicker').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function srcLabel(src) {
  if (src === 'lect1') return tOrEn('revSrcL1');
  if (src === 'lect2') return tOrEn('revSrcL2');
  return tOrEn('revSrcCombined');
}

function startRevQuiz() {
  const pool = [
    ...sample(revState.bank1, 7).map(q => ({ ...q, src: 'lect1' })),
    ...sample(revState.bank2, 7).map(q => ({ ...q, src: 'lect2' })),
    ...sample(revState.cross, 6).map(q => ({ ...q, src: 'combined' }))
  ];
  revState.questions = shuffle(pool);
  revState.cursor = 0;
  revState.correct = 0;
  revState.wrong = 0;
  revState.skipped = 0;
  revState.answered = false;
  revState.perSource = { lect1: { c: 0, t: 0 }, lect2: { c: 0, t: 0 }, combined: { c: 0, t: 0 } };

  document.getElementById('revPicker').classList.add('hidden');
  document.getElementById('revResult').classList.add('hidden');
  document.getElementById('revRunner').classList.remove('hidden');

  renderRevCurrent();
}

function renderRevCurrent() {
  const q = revState.questions[revState.cursor];
  if (!q) return finishRevQuiz();

  const total = revState.questions.length;
  const num = String(revState.cursor + 1).padStart(2, '0');

  document.getElementById('revStageLabel').textContent =
    `${tOrEn('examQuestion')} ${num} / ${String(total).padStart(2, '0')}`;
  document.getElementById('revScore').textContent =
    `${tOrEn('examScoreLabel')}: ${revState.correct} / ${revState.correct + revState.wrong}`;

  document.getElementById('revStageTitle').textContent = srcLabel(q.src);
  const badge = document.getElementById('revSource');
  badge.textContent = `${srcLabel(q.src)} · ${tOrEn('diff_' + q.difficulty)}`;
  badge.className = 'diff-badge src-' + q.src;
  badge.classList.remove('hidden');

  document.getElementById('revQuestion').innerHTML = q.question;

  const optsEl = document.getElementById('revOptions');
  optsEl.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-card-opt';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleRevAnswer(idx));
    optsEl.appendChild(btn);
  });

  const fb = document.getElementById('revFeedback');
  fb.className = 'quiz-card-feedback hidden';
  fb.innerHTML = '';

  document.getElementById('revSkipBtn').classList.remove('hidden');
  document.getElementById('revNextBtn').classList.add('hidden');
  document.getElementById('revNextBtn').textContent = tOrEn('qzNext');
  revState.answered = false;

  document.getElementById('revProgressFill').style.width = Math.round((revState.cursor / total) * 100) + '%';
  document.getElementById('revProgressLabel').textContent = `${num} / ${String(total).padStart(2, '0')}`;

  document.getElementById('revRunner').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleRevAnswer(idx) {
  if (revState.answered) return;
  revState.answered = true;

  const q = revState.questions[revState.cursor];
  const buttons = document.querySelectorAll('#revOptions .quiz-card-opt');
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    else if (i === idx) b.classList.add('wrong');
  });

  const good = idx === q.answer;
  revState.perSource[q.src].t++;
  if (good) {
    revState.correct++;
    revState.perSource[q.src].c++;
  } else {
    revState.wrong++;
  }

  const fb = document.getElementById('revFeedback');
  fb.className = 'quiz-card-feedback ' + (good ? 'good' : 'bad');
  fb.innerHTML = (good
    ? (currentLang === 'ar' ? '✅ إجابة صحيحة! ' : '✅ Correct! ')
    : (currentLang === 'ar' ? '❌ مش دي — الإجابة المحددة بالأخضر هي الصح. ' : '❌ Not quite — the highlighted answer is correct. '))
    + (q.explain || '');
  fb.classList.remove('hidden');

  document.getElementById('revSkipBtn').classList.add('hidden');
  const nextBtn = document.getElementById('revNextBtn');
  nextBtn.classList.remove('hidden');
  const isLast = revState.cursor === revState.questions.length - 1;
  nextBtn.textContent = isLast
    ? (currentLang === 'ar' ? '← عرض النتيجة' : 'See results →')
    : tOrEn('qzNext');

  document.getElementById('revScore').textContent =
    `${tOrEn('examScoreLabel')}: ${revState.correct} / ${revState.correct + revState.wrong}`;
}

function goNext() {
  revState.cursor++;
  if (revState.cursor >= revState.questions.length) finishRevQuiz();
  else renderRevCurrent();
}

function finishRevQuiz() {
  document.getElementById('revRunner').classList.add('hidden');
  const resultEl = document.getElementById('revResult');
  resultEl.classList.remove('hidden');

  const total = revState.questions.length;
  const pct = total ? Math.round((revState.correct / total) * 100) : 0;

  document.getElementById('revProgressFill').style.width = '100%';
  document.getElementById('revProgressLabel').textContent =
    `${String(total).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  document.getElementById('revResultTitle').textContent =
    currentLang === 'ar'
      ? `${revState.correct} من ${total} صحيحة`
      : `${revState.correct} / ${total} correct`;
  document.getElementById('revResultSub').textContent =
    currentLang === 'ar' ? 'مراجعة المحاضرتين الأولى والتانية' : 'Lectures 1 + 2 combined revision';
  document.getElementById('revResultScore').textContent = pct + '%';
  document.getElementById('revCorrect').textContent = String(revState.correct).padStart(2, '0');
  document.getElementById('revWrong').textContent = String(revState.wrong).padStart(2, '0');
  document.getElementById('revSkipped').textContent = String(revState.skipped).padStart(2, '0');

  const breakdown = document.getElementById('revBreakdown');
  breakdown.innerHTML = '';
  [['lect1', 7], ['lect2', 7], ['combined', 6]].forEach(([src, expected]) => {
    const stat = revState.perSource[src];
    const cell = document.createElement('div');
    cell.className = 'result-stat src-' + src;
    cell.innerHTML = `
        <span class="mono">${srcLabel(src)}</span>
        <strong>${stat.c}<span class="result-stat-of">/${stat.t || expected}</span></strong>
      `;
    breakdown.appendChild(cell);
  });

  document.getElementById('revResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ------------------------------------------------------------------
   Lifecycle
------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  wireFilters();
  init();
});

window.addEventListener('langChanged', () => {
  const g = globalThis;
  revState.keywords = currentLang === 'ar' ? (g.REVISION_KEYWORDS_AR || []) : (g.REVISION_KEYWORDS_EN || []);
  revState.cross = currentLang === 'ar' ? (g.REVISION_CROSS_AR || []) : (g.REVISION_CROSS_EN || []);
  revState.bank1 = currentLang === 'ar' ? (g.LECT1_QUIZBANK_AR || []) : (g.LECT1_QUIZBANK_EN || []);
  revState.bank2 = currentLang === 'ar' ? (g.LECT2_QUIZBANK_AR || []) : (g.LECT2_QUIZBANK_EN || []);
  applyRevPlaceholders();
  renderKeywords();
  // Reset quiz views to picker on language switch (keeps things consistent)
  if (!document.getElementById('revRunner').classList.contains('hidden') ||
      !document.getElementById('revResult').classList.contains('hidden')) {
    document.getElementById('revRunner').classList.add('hidden');
    document.getElementById('revResult').classList.add('hidden');
    document.getElementById('revPicker').classList.remove('hidden');
  }
});
