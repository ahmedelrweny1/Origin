/* ============================================================
   Revision session — Lectures 1 + 2 combined
   Part 1: categorized keyword glossary + tech words
   Part 2: mixed quiz — MCQ + True/False + Complete (26 Qs)
   Part 3: written self-check questions
   ============================================================ */

const ASSET_V = 'v=4';

/* Category of each keyword id (language-independent) */
const KW_CATS = {
  'k-data': 'data', 'k-info': 'data', 'k-know': 'data',
  'k-persist': 'traits', 'k-repro': 'traits', 'k-propa': 'traits',
  'k-primary': 'sources', 'k-secondary': 'sources', 'k-cross': 'sources',
  'k-expr': 'media', 'k-trans': 'media', 'k-rec': 'media', 'k-medialit': 'media',
  'k-ethics': 'ethics', 'k-copyright': 'ethics', 'k-bully': 'ethics', 'k-geo': 'ethics',
  'k-disinfo': 'ethics', 'k-idtheft': 'ethics', 'k-addict': 'ethics',
  'k-four': 'privacy', 'k-idcode': 'privacy', 'k-sensitive': 'privacy', 'k-privacy': 'privacy',
  'k-image': 'privacy', 'k-publicity': 'privacy', 'k-policy': 'privacy', 'k-mark': 'privacy',
  'k-optin': 'privacy', 'k-optout': 'privacy',
  'k-indprop': 'ip', 'k-formality': 'ip', 'k-patent': 'ip', 'k-utility': 'ip',
  'k-design': 'ip', 'k-trademark': 'ip',
  'k-nonform': 'copy', 'k-moral': 'copy', 'k-economic': 'copy', 'k-pubdom': 'copy',
  'k-neighbor': 'copy', 'k-fairuse': 'copy', 'k-quote': 'copy', 'k-cc': 'copy'
};
const CAT_ORDER = ['data', 'traits', 'sources', 'media', 'ethics', 'privacy', 'ip', 'copy'];

const revState = {
  keywords: [],
  tech: [],
  written: [],
  cross: [],
  tf: [],
  complete: [],
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
  perSource: { lect1: { c: 0, t: 0 }, lect2: { c: 0, t: 0 }, combined: { c: 0, t: 0 } },
  perType: { mcq: { c: 0, t: 0 }, tf: { c: 0, t: 0 }, complete: { c: 0, t: 0 } }
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
    ['LECT2_QUIZBANK_EN', 'quizbank-lect2-en.js'],
    ['REVISION_TECH', 'revision-tech.js']
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

function catLabel(cat) {
  return tOrEn('cat_' + cat);
}

/* ------------------------------------------------------------------
   Init
------------------------------------------------------------------ */
async function init() {
  await ensureRevLoaded();
  reloadLangData();
  applyRevPlaceholders();
  renderKeywords();
  renderTech();
  renderWritten();
  wireQuiz();
}

function reloadLangData() {
  const g = globalThis;
  const ar = currentLang === 'ar';
  revState.keywords = ar ? (g.REVISION_KEYWORDS_AR || []) : (g.REVISION_KEYWORDS_EN || []);
  revState.cross = ar ? (g.REVISION_CROSS_AR || []) : (g.REVISION_CROSS_EN || []);
  revState.tf = ar ? (g.REVISION_TF_AR || []) : (g.REVISION_TF_EN || []);
  revState.complete = ar ? (g.REVISION_COMPLETE_AR || []) : (g.REVISION_COMPLETE_EN || []);
  revState.written = ar ? (g.REVISION_WRITTEN_AR || []) : (g.REVISION_WRITTEN_EN || []);
  revState.bank1 = ar ? (g.LECT1_QUIZBANK_AR || []) : (g.LECT1_QUIZBANK_EN || []);
  revState.bank2 = ar ? (g.LECT2_QUIZBANK_AR || []) : (g.LECT2_QUIZBANK_EN || []);
  revState.tech = g.REVISION_TECH || [];
}

function applyRevPlaceholders() {
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const v = tOrEn(key);
    if (v && v !== key) el.setAttribute('placeholder', v);
  });
}

/* ------------------------------------------------------------------
   Part 1 — Categorized keywords
------------------------------------------------------------------ */
function renderKeywords() {
  const grid = document.getElementById('revKwGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const q = revState.search.trim().toLowerCase();
  const matchFn = (k) => {
    if (revState.filter !== 'all' && k.lecture !== revState.filter) return false;
    if (!q) return true;
    return (k.term + ' ' + stripTags(k.brief)).toLowerCase().includes(q);
  };

  let total = 0;
  CAT_ORDER.forEach(cat => {
    const items = revState.keywords.filter(k => (KW_CATS[k.id] || 'data') === cat && matchFn(k));
    if (!items.length) return;
    total += items.length;

    const h = document.createElement('h3');
    h.className = 'rev-cat-head';
    h.innerHTML = `<span class="rev-cat-bar"></span><span>${catLabel(cat)}</span><span class="mono faint">${items.length}</span>`;
    grid.appendChild(h);

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
  });

  const countEl = document.getElementById('revKwCount');
  if (countEl) {
    countEl.textContent = currentLang === 'ar' ? `${total} مصطلح` : `${total} terms`;
  }
  if (!total) {
    grid.innerHTML = `<p class="muted" style="grid-column:1/-1;">${tOrEn('revNoMatch')}</p>`;
  }
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
   Tech words section
------------------------------------------------------------------ */
function renderTech() {
  const grid = document.getElementById('revTechGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const countEl = document.getElementById('revTechCount');
  if (countEl) {
    countEl.textContent = currentLang === 'ar' ? `${revState.tech.length} كلمة` : `${revState.tech.length} words`;
  }
  revState.tech.forEach(t => {
    const card = document.createElement('div');
    card.className = 'rev-tech-card';
    card.innerHTML = `<strong class="rev-tech-en" dir="ltr">${t.en}</strong><span class="rev-tech-ar">${t.ar}</span>`;
    grid.appendChild(card);
  });
}

/* ------------------------------------------------------------------
   Written questions section
------------------------------------------------------------------ */
function renderWritten() {
  const list = document.getElementById('revWrittenList');
  if (!list) return;
  list.innerHTML = '';
  const countEl = document.getElementById('revWrittenCount');
  if (countEl) {
    countEl.textContent = currentLang === 'ar' ? `${revState.written.length} أسئلة` : `${revState.written.length} questions`;
  }
  revState.written.forEach((w, i) => {
    const num = String(i + 1).padStart(2, '0');
    const card = document.createElement('div');
    card.className = 'rev-written-card';
    card.innerHTML = `
      <div class="rev-written-top">
        <span class="mono">${currentLang === 'ar' ? 'سؤال' : 'Q'} ${num}</span>
        <span class="chip">${w.topics}</span>
      </div>
      <p class="rev-written-q">${w.prompt}</p>
      <textarea class="rev-written-area" rows="3" placeholder="${tOrEn('revWrittenPh')}"></textarea>
      <button class="btn btn-ghost btn-sm rev-model-btn">${tOrEn('revShowModel')}</button>
      <div class="rev-model hidden"><strong>${tOrEn('revModelLabel')}:</strong> ${w.model}</div>
    `;
    card.querySelector('.rev-model-btn').addEventListener('click', (ev) => {
      const m = card.querySelector('.rev-model');
      m.classList.toggle('hidden');
      ev.target.textContent = m.classList.contains('hidden') ? tOrEn('revShowModel') : tOrEn('revHideModel');
    });
    list.appendChild(card);
  });
}

/* ------------------------------------------------------------------
   Part 2 — Mixed quiz: 6 MCQ L1 + 6 MCQ L2 + 4 cross + 6 T/F + 4 complete
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

function typeLabel(t) {
  if (t === 'tf') return tOrEn('revTypeTF');
  if (t === 'complete') return tOrEn('revTypeComplete');
  return tOrEn('revTypeMCQ');
}

function srcLabel(src) {
  if (src === 'lect1') return tOrEn('revSrcL1');
  if (src === 'lect2') return tOrEn('revSrcL2');
  return tOrEn('revSrcCombined');
}

function startRevQuiz() {
  const pool = [
    ...sample(revState.bank1, 6).map(q => ({ ...q, src: 'lect1', qtype: 'mcq' })),
    ...sample(revState.bank2, 6).map(q => ({ ...q, src: 'lect2', qtype: 'mcq' })),
    ...sample(revState.cross, 4).map(q => ({ ...q, src: 'combined', qtype: 'mcq' })),
    ...sample(revState.tf, 6).map(q => ({ ...q, qtype: 'tf' })),
    ...sample(revState.complete, 4).map(q => ({ ...q, qtype: 'complete' }))
  ];
  revState.questions = shuffle(pool);
  revState.cursor = 0;
  revState.correct = 0;
  revState.wrong = 0;
  revState.skipped = 0;
  revState.answered = false;
  revState.perSource = { lect1: { c: 0, t: 0 }, lect2: { c: 0, t: 0 }, combined: { c: 0, t: 0 } };
  revState.perType = { mcq: { c: 0, t: 0 }, tf: { c: 0, t: 0 }, complete: { c: 0, t: 0 } };

  document.getElementById('revPicker').classList.add('hidden');
  document.getElementById('revResult').classList.add('hidden');
  document.getElementById('revRunner').classList.remove('hidden');

  // Update picker mix strip with actual counts
  document.getElementById('revProgressFill').style.width = '0%';
  document.getElementById('revProgressLabel').textContent = `00 / ${String(revState.questions.length).padStart(2, '0')}`;

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
  badge.textContent = `${typeLabel(q.qtype)}${q.qtype === 'mcq' ? ' · ' + tOrEn('diff_' + q.difficulty) : ''}`;
  badge.className = 'diff-badge qtype-' + q.qtype;
  badge.classList.remove('hidden');

  const qEl = document.getElementById('revQuestion');
  if (q.qtype === 'tf') {
    qEl.textContent = (currentLang === 'ar' ? 'صح ولا غلط؟ ' : 'True or false? ') + q.statement;
  } else if (q.qtype === 'complete') {
    qEl.innerHTML = q.sentence.replace('___', '<span class="rev-blank">………</span>');
  } else {
    qEl.innerHTML = q.question;
  }

  const optsEl = document.getElementById('revOptions');
  optsEl.innerHTML = '';
  if (q.qtype === 'tf') {
    const tBtn = document.createElement('button');
    tBtn.className = 'quiz-card-opt rev-tf-btn';
    tBtn.textContent = currentLang === 'ar' ? '✔ صح' : '✔ True';
    tBtn.addEventListener('click', () => handleRevAnswer(true));
    const fBtn = document.createElement('button');
    fBtn.className = 'quiz-card-opt rev-tf-btn';
    fBtn.textContent = currentLang === 'ar' ? '✘ غلط' : '✘ False';
    fBtn.addEventListener('click', () => handleRevAnswer(false));
    optsEl.appendChild(tBtn);
    optsEl.appendChild(fBtn);
  } else {
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-card-opt';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleRevAnswer(idx));
      optsEl.appendChild(btn);
    });
  }

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

function handleRevAnswer(pick) {
  if (revState.answered) return;
  revState.answered = true;

  const q = revState.questions[revState.cursor];
  const good = q.qtype === 'tf' ? (pick === q.answer) : (pick === q.answer);

  const buttons = document.querySelectorAll('#revOptions .quiz-card-opt');
  if (q.qtype === 'tf') {
    buttons.forEach((b, i) => {
      b.disabled = true;
      const val = i === 0;
      if (val === q.answer) b.classList.add('correct');
      else if (val === pick) b.classList.add('wrong');
    });
  } else {
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === q.answer) b.classList.add('correct');
      else if (i === pick) b.classList.add('wrong');
    });
  }

  revState.perSource[q.src].t++;
  revState.perType[q.qtype].t++;
  if (good) {
    revState.correct++;
    revState.perSource[q.src].c++;
    revState.perType[q.qtype].c++;
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
  [['lect1', 6], ['lect2', 6], ['combined', 4]].forEach(([src]) => {
    const stat = revState.perSource[src];
    const cell = document.createElement('div');
    cell.className = 'result-stat src-' + src;
    cell.innerHTML = `
        <span class="mono">${srcLabel(src)}</span>
        <strong>${stat.c}<span class="result-stat-of">/${stat.t}</span></strong>
      `;
    breakdown.appendChild(cell);
  });
  [['mcq', 'revTypeMCQ'], ['tf', 'revTypeTF'], ['complete', 'revTypeComplete']].forEach(([t, labelKey]) => {
    const stat = revState.perType[t];
    if (!stat.t) return;
    const cell = document.createElement('div');
    cell.className = 'result-stat qtype-' + t;
    cell.innerHTML = `
        <span class="mono">${tOrEn(labelKey)}</span>
        <strong>${stat.c}<span class="result-stat-of">/${stat.t}</span></strong>
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
  reloadLangData();
  applyRevPlaceholders();
  renderKeywords();
  renderTech();
  renderWritten();
  if (!document.getElementById('revRunner').classList.contains('hidden') ||
      !document.getElementById('revResult').classList.contains('hidden')) {
    document.getElementById('revRunner').classList.add('hidden');
    document.getElementById('revResult').classList.add('hidden');
    document.getElementById('revPicker').classList.remove('hidden');
  }
});
