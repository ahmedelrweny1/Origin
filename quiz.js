/* ============================================================
   Quiz runner — picks a lecture + stage + difficulty, runs questions
   Uses the separate question bank (quizbank-lect1-*.js) for richer,
   multi-difficulty questions instead of the inline stage.quiz.
   ============================================================ */

const params = new URLSearchParams(window.location.search);
const lectureId = params.get('lecture');
const difficultyParam = params.get('difficulty') || 'all';

const runnerState = {
  lecture: null,
  stages: [],
  bank: [],           // [{ id, stageId, difficulty, question, options, answer, explain }]
  filteredBank: [],   // active filter
  questions: [],      // pool for current run
  scopeLabel: '',
  activeDifficulty: 'all',
  cursor: 0,
  correct: 0,
  wrong: 0,
  skipped: 0,
  answered: false,
  perDifficulty: { easy: { c: 0, w: 0 }, medium: { c: 0, w: 0 }, hard: { c: 0, w: 0 }, creative: { c: 0, w: 0 } }
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function ensureLectureLoaded(id) {
  const map = LECTURE_DATA_MAP[id];
  if (!map) return null;
  if (!window[map.stagesAr]) await loadScript(map.scriptAr);
  if (!window[map.stagesEn]) await loadScript(map.scriptEn);
  if (map.bankAr && !window[map.bankArVar]) await loadScript(map.bankAr);
  if (map.bankEn && !window[map.bankEnVar]) await loadScript(map.bankEn);
  return {
    stagesAr: window[map.stagesAr] || [],
    stagesEn: window[map.stagesEn] || [],
    bankAr: window[map.bankArVar] || [],
    bankEn: window[map.bankEnVar] || []
  };
}

function getStagesForCurrentLang(data) {
  return currentLang === 'ar' ? data.stagesAr : data.stagesEn;
}

function getBankForCurrentLang(data) {
  return currentLang === 'ar' ? data.bankAr : data.bankEn;
}

function getStageTitle(stageId) {
  const s = runnerState.stages.find(x => x.id === stageId);
  if (s) return s.title;
  if (stageId === null) {
    return currentLang === 'ar' ? 'سؤال شامل' : 'Cross-stage';
  }
  return currentLang === 'ar' ? 'فصل' : 'Stage';
}

function getStageGlyph(stageId) {
  const s = runnerState.stages.find(x => x.id === stageId);
  return s ? (s.glyph || '') : '';
}

function tOrEn(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.en && translations.en[key])
    || key;
}

function getJourney(id) {
  return (typeof journeys !== 'undefined') ? journeys.find(j => j.id === id) : null;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ------------------------------------------------------------------
   Init
------------------------------------------------------------------ */
async function init() {
  if (!lectureId) { renderNoLecture(); return; }
  const journey = getJourney(lectureId);
  if (!journey || !LECTURE_DATA_MAP[lectureId]) { renderUnknownLecture(); return; }

  runnerState.lecture = journey;
  document.getElementById('quizLectureLabel').textContent =
    `${journey.tag[currentLang] || journey.tag.en}`;

  const data = await ensureLectureLoaded(lectureId);
  if (!data) return;

  runnerState.stages = getStagesForCurrentLang(data);
  runnerState.bank = getBankForCurrentLang(data);
  runnerState.activeDifficulty = difficultyParam;

  // If the user picked a difficulty at /quiz.html?difficulty=hard, apply it now
  applyDifficultyFilter(runnerState.activeDifficulty);

  renderPicker();

  const total = runnerState.filteredBank.length;
  document.getElementById('quizProgressFill').style.width = '0%';
  document.getElementById('quizProgressLabel').textContent = `00 / ${String(total).padStart(2, '0')}`;
}

function renderNoLecture() {
  document.getElementById('quizPicker').innerHTML =
    `<div class="picker-head">
       <span class="mono">${tOrEn('qzNoLecture')}</span>
       <h1>${tOrEn('qzNoLectureTitle')}</h1>
       <p class="muted">${tOrEn('qzNoLectureHint')}</p>
       <p style="margin-top:2rem;"><a href="quizzes.html" class="btn btn-primary btn-arrow">${tOrEn('qzBackToList')}</a></p>
     </div>`;
}

function renderUnknownLecture() {
  document.getElementById('quizPicker').innerHTML =
    `<div class="picker-head">
       <span class="mono">404</span>
       <h1>${tOrEn('qzUnknownLecture')}</h1>
       <p class="muted">${tOrEn('qzUnknownLectureHint')}</p>
       <p style="margin-top:2rem;"><a href="quizzes.html" class="btn btn-primary btn-arrow">${tOrEn('qzBackToList')}</a></p>
     </div>`;
}

/* ------------------------------------------------------------------
   Difficulty filter
------------------------------------------------------------------ */
function applyDifficultyFilter(diff) {
  runnerState.activeDifficulty = diff;
  if (diff === 'all') {
    runnerState.filteredBank = [...runnerState.bank];
  } else {
    runnerState.filteredBank = runnerState.bank.filter(q => q.difficulty === diff);
  }

  // Update active chip UI
  document.querySelectorAll('.diff-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.diff === diff);
  });

  // Update "all chapters" count + scope label
  document.getElementById('allCount').textContent =
    `${String(runnerState.filteredBank.length).padStart(2, '0')} ${currentLang === 'ar' ? 'سؤال' : (runnerState.filteredBank.length === 1 ? 'question' : 'questions')}`;
  document.getElementById('allScopeLabel').textContent =
    diff === 'all' ? '' : tOrEn(`diff_${diff}`);

  // Re-show stage counts (they depend on filter)
  renderStageButtons();
}

function renderPicker() {
  // Stage buttons
  renderStageButtons();

  // Wire "all chapters" button
  document.querySelector('[data-mode="all"]').addEventListener('click', () => startQuiz(null));

  // Wire difficulty chips
  document.querySelectorAll('.diff-chip').forEach(chip => {
    chip.addEventListener('click', () => applyDifficultyFilter(chip.dataset.diff));
  });

  // Apply initial difficulty filter from URL
  applyDifficultyFilter(runnerState.activeDifficulty);
}

function renderStageButtons() {
  const grid = document.getElementById('stageButtons');
  if (!grid) return;
  grid.innerHTML = '';

  // Group question counts per stage for the active filter
  const counts = {};
  runnerState.filteredBank.forEach(q => {
    if (q.stageId === null) {
      counts['__cross'] = (counts['__cross'] || 0) + 1;
    } else {
      counts[q.stageId] = (counts[q.stageId] || 0) + 1;
    }
  });

  if (runnerState.stages.length === 0) {
    grid.innerHTML = `<p class="muted" style="grid-column:1/-1;">${tOrEn('qzNoQuestions')}</p>`;
    return;
  }

  runnerState.stages.forEach((stage, i) => {
    const num = String(i + 1).padStart(2, '0');
    const cnt = counts[stage.id] || 0;
    const hasQ = cnt > 0;
    const btn = document.createElement('button');
    btn.className = 'stage-pick' + (hasQ ? '' : ' disabled');
    btn.disabled = !hasQ;
    btn.dataset.stageId = stage.id;
    btn.innerHTML = `
      <span class="stage-pick-num">${num}</span>
      <span class="stage-pick-glyph">${stage.glyph || ''}</span>
      <span class="stage-pick-title">${stage.title}</span>
      <span class="stage-pick-tag">${hasQ ? '❓ ' + cnt : '—'}</span>
    `;
    btn.addEventListener('click', () => { if (hasQ) startQuiz(stage.id); });
    grid.appendChild(btn);
  });

  // Cross-stage section
  if ((counts['__cross'] || 0) > 0) {
    const cross = document.createElement('button');
    cross.className = 'stage-pick cross-stage';
    cross.dataset.stageId = '__cross';
    cross.innerHTML = `
      <span class="stage-pick-num">✦</span>
      <span class="stage-pick-glyph">🧩</span>
      <span class="stage-pick-title">${tOrEn('qzCrossStage')}</span>
      <span class="stage-pick-tag">❓ ${counts['__cross']}</span>
    `;
    cross.addEventListener('click', () => startQuiz('__cross'));
    grid.appendChild(cross);
  }
}

/* ------------------------------------------------------------------
   Run a quiz
------------------------------------------------------------------ */
function startQuiz(scopeId) {
  let pool;
  if (scopeId === null) {
    pool = runnerState.filteredBank;
    runnerState.scopeLabel = runnerState.activeDifficulty === 'all'
      ? (currentLang === 'ar' ? 'كل الفصول' : 'All chapters')
      : tOrEn(`diff_${runnerState.activeDifficulty}`);
  } else if (scopeId === '__cross') {
    pool = runnerState.filteredBank.filter(q => q.stageId === null);
    runnerState.scopeLabel = tOrEn('qzCrossStage');
  } else {
    pool = runnerState.filteredBank.filter(q => q.stageId === scopeId);
    runnerState.scopeLabel = getStageTitle(scopeId);
  }

  runnerState.questions = shuffle(pool);
  runnerState.cursor = 0;
  runnerState.correct = 0;
  runnerState.wrong = 0;
  runnerState.skipped = 0;
  runnerState.answered = false;
  runnerState.perDifficulty = {
    easy: { c: 0, w: 0 }, medium: { c: 0, w: 0 },
    hard: { c: 0, w: 0 }, creative: { c: 0, w: 0 }
  };

  document.getElementById('quizPicker').classList.add('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizRunner').classList.remove('hidden');

  renderCurrent();
}

function renderCurrent() {
  const q = runnerState.questions[runnerState.cursor];
  if (!q) return finishQuiz();

  const total = runnerState.questions.length;
  const num = String(runnerState.cursor + 1).padStart(2, '0');

  document.getElementById('runnerStageLabel').textContent =
    `${currentLang === 'ar' ? 'سؤال' : 'Question'} ${num} / ${String(total).padStart(2, '0')}`;
  document.getElementById('runnerScore').textContent =
    `${currentLang === 'ar' ? 'صحيحة' : 'correct'}: ${runnerState.correct} / ${runnerState.correct + runnerState.wrong}`;

  const stageTitle = getStageTitle(q.stageId);
  const glyph = getStageGlyph(q.stageId);
  document.getElementById('runnerStageTitle').innerHTML =
    `${glyph ? `<span class="qg">${glyph}</span>` : ''}<span>${stageTitle}</span>`;

  // Difficulty badge
  document.getElementById('runnerDifficulty').textContent = tOrEn(`diff_${q.difficulty}`);
  document.getElementById('runnerDifficulty').className = `diff-badge diff-${q.difficulty}`;

  document.getElementById('runnerQuestion').innerHTML = q.question;

  const optsEl = document.getElementById('runnerOptions');
  optsEl.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-card-opt';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(idx, btn));
    optsEl.appendChild(btn);
  });

  const feedback = document.getElementById('runnerFeedback');
  feedback.className = 'quiz-card-feedback hidden';
  feedback.innerHTML = '';

  document.getElementById('runnerSkipBtn').classList.remove('hidden');
  document.getElementById('runnerNextBtn').classList.add('hidden');
  document.getElementById('runnerNextBtn').textContent = tOrEn('qzNext');
  runnerState.answered = false;

  // Top progress
  const pct = Math.round((runnerState.cursor / total) * 100);
  document.getElementById('quizProgressFill').style.width = pct + '%';
  document.getElementById('quizProgressLabel').textContent =
    `${num} / ${String(total).padStart(2, '0')}`;

  document.getElementById('quizRunner').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleAnswer(idx, btn) {
  if (runnerState.answered) return;
  runnerState.answered = true;

  const q = runnerState.questions[runnerState.cursor];
  const buttons = document.querySelectorAll('#runnerOptions .quiz-card-opt');
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    else if (i === idx) b.classList.add('wrong');
  });

  const good = idx === q.answer;
  if (good) {
    runnerState.correct++;
    runnerState.perDifficulty[q.difficulty].c++;
  } else {
    runnerState.wrong++;
    runnerState.perDifficulty[q.difficulty].w++;
  }

  const feedback = document.getElementById('runnerFeedback');
  feedback.className = 'quiz-card-feedback ' + (good ? 'good' : 'bad');
  feedback.innerHTML = (good
    ? (currentLang === 'ar' ? '✅ إجابة صحيحة! ' : '✅ Correct! ')
    : (currentLang === 'ar' ? '❌ مش دي — الإجابة المحددة بالأخضر هي الصح. ' : '❌ Not quite — the highlighted answer is correct. '))
    + (q.explain || '');
  feedback.classList.remove('hidden');

  document.getElementById('runnerSkipBtn').classList.add('hidden');
  const nextBtn = document.getElementById('runnerNextBtn');
  nextBtn.classList.remove('hidden');
  const isLast = runnerState.cursor === runnerState.questions.length - 1;
  nextBtn.textContent = isLast
    ? (currentLang === 'ar' ? '← عرض النتيجة' : 'See results →')
    : tOrEn('qzNext');

  document.getElementById('runnerScore').textContent =
    `${currentLang === 'ar' ? 'صحيحة' : 'correct'}: ${runnerState.correct} / ${runnerState.correct + runnerState.wrong}`;
}

function handleSkip() {
  if (runnerState.answered) return goNext();
  runnerState.skipped++;
  goNext();
}

function goNext() {
  runnerState.cursor++;
  if (runnerState.cursor >= runnerState.questions.length) finishQuiz();
  else renderCurrent();
}

function finishQuiz() {
  document.getElementById('quizRunner').classList.add('hidden');
  document.getElementById('quizResult').classList.remove('hidden');

  const total = runnerState.questions.length;
  const pct = total ? Math.round((runnerState.correct / total) * 100) : 0;

  document.getElementById('quizProgressFill').style.width = '100%';
  document.getElementById('quizProgressLabel').textContent =
    `${String(total).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  document.getElementById('resultTitle').textContent =
    currentLang === 'ar'
      ? `${runnerState.correct} من ${total} صحيحة`
      : `${runnerState.correct} / ${total} correct`;
  document.getElementById('resultSubtitle').textContent =
    (currentLang === 'ar' ? 'من: ' : 'From: ') + runnerState.scopeLabel;
  document.getElementById('resultScore').textContent = pct + '%';
  document.getElementById('resultCorrect').textContent = String(runnerState.correct).padStart(2, '0');
  document.getElementById('resultWrong').textContent = String(runnerState.wrong).padStart(2, '0');
  document.getElementById('resultSkipped').textContent = String(runnerState.skipped).padStart(2, '0');

  // Per-difficulty breakdown
  const breakdown = document.getElementById('resultBreakdown');
  breakdown.innerHTML = '';
  ['easy', 'medium', 'hard', 'creative'].forEach(d => {
    const stat = runnerState.perDifficulty[d];
    const total = stat.c + stat.w;
    if (total === 0) return;
    const cell = document.createElement('div');
    cell.className = `result-stat diff-${d}`;
    cell.innerHTML = `
        <span class="mono">${tOrEn('diff_' + d)}</span>
        <strong>${stat.c}<span class="result-stat-of">/${total}</span></strong>
      `;
    breakdown.appendChild(cell);
  });

  document.getElementById('quizResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ------------------------------------------------------------------
   Wire buttons
------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  init();
  document.getElementById('runnerSkipBtn').addEventListener('click', handleSkip);
  document.getElementById('runnerNextBtn').addEventListener('click', goNext);
  document.getElementById('resultRetryBtn').addEventListener('click', () => {
    document.getElementById('quizPicker').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizPicker').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('langChanged', () => {
  if (!runnerState.lecture) return;
  const data = (typeof LECTURE_DATA_MAP !== 'undefined') ? LECTURE_DATA_MAP[runnerState.lecture.id] : null;
  if (!data) return;

  const stages = getStagesForCurrentLang({
    stagesAr: window[data.stagesAr] || [],
    stagesEn: window[data.stagesEn] || []
  });
  runnerState.stages = stages;
  runnerState.bank = getBankForCurrentLang({
    bankAr: window[data.bankArVar] || [],
    bankEn: window[data.bankEnVar] || []
  });

  document.getElementById('quizLectureLabel').textContent =
    `${runnerState.lecture.tag[currentLang] || runnerState.lecture.tag.en}`;

  if (!document.getElementById('quizPicker').classList.contains('hidden')) {
    applyDifficultyFilter(runnerState.activeDifficulty);
    return;
  }
  if (!document.getElementById('quizRunner').classList.contains('hidden')) {
    // Reset run with same filter
    runnerState.questions = shuffle(runnerState.filteredBank);
    runnerState.cursor = 0;
    runnerState.correct = 0;
    runnerState.wrong = 0;
    runnerState.skipped = 0;
    runnerState.answered = false;
    runnerState.perDifficulty = {
      easy: { c: 0, w: 0 }, medium: { c: 0, w: 0 },
      hard: { c: 0, w: 0 }, creative: { c: 0, w: 0 }
    };
    renderCurrent();
    return;
  }
  if (!document.getElementById('quizResult').classList.contains('hidden')) {
    finishQuiz();
  }
});