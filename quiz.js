/* ============================================================
   Quiz runner — three modes:
     1. practice — pick chapter or all, multiple difficulty
     2. exam     — 15 questions comprehensive, gated, must pass
   ============================================================ */

const params = new URLSearchParams(window.location.search);
const lectureId = params.get('lecture');
const mode = params.get('mode') === 'exam' ? 'exam' : 'practice';
const difficultyParam = params.get('difficulty') || 'all';

const runnerState = {
  lecture: null,
  stages: [],
  bank: [],
  exam: [],
  mode,
  filteredBank: [],
  questions: [],
  scopeLabel: '',
  activeDifficulty: 'all',
  cursor: 0,
  correct: 0,
  wrong: 0,
  skipped: 0,
  answered: false,
  perDifficulty: { easy: { c: 0, w: 0 }, medium: { c: 0, w: 0 }, hard: { c: 0, w: 0 }, creative: { c: 0, w: 0 } }
};

const STORE_EXAM_KEY = (id) => `origin-exam-${id}`;
const STORE_UNLOCK_KEY = (id) => `origin-unlock-${id}`;

const ASSET_V = 'v=3';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src + (src.includes('?') ? '&' : '?') + ASSET_V;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function ensureLectureLoaded(id) {
  const map = LECTURE_DATA_MAP[id];
  if (!map) return null;
  const g = globalThis;
  try {
    if (typeof g[map.stagesAr] === 'undefined') await loadScript(map.scriptAr);
    if (typeof g[map.stagesEn] === 'undefined') await loadScript(map.scriptEn);
    if (map.bankAr && typeof g[map.bankArVar] === 'undefined') await loadScript(map.bankAr);
    if (map.bankEn && typeof g[map.bankEnVar] === 'undefined') await loadScript(map.bankEn);
    if (map.examAr && typeof g[map.examArVar] === 'undefined') await loadScript(map.examAr);
    if (map.examEn && typeof g[map.examEnVar] === 'undefined') await loadScript(map.examEn);
  } catch (e) {
    console.error('[quiz] failed to load script', e);
    return null;
  }
  return {
    stagesAr: g[map.stagesAr] || [],
    stagesEn: g[map.stagesEn] || [],
    bankAr: g[map.bankArVar] || [],
    bankEn: g[map.bankEnVar] || [],
    examAr: g[map.examArVar] || [],
    examEn: g[map.examEnVar] || []
  };
}

function getStagesForCurrentLang(d) { return currentLang === 'ar' ? d.stagesAr : d.stagesEn; }
function getBankForCurrentLang(d)   { return currentLang === 'ar' ? d.bankAr : d.bankEn; }
function getExamForCurrentLang(d)   { return currentLang === 'ar' ? d.examAr : d.examEn; }

function getStageTitle(stageId) {
  const s = runnerState.stages.find(x => x.id === stageId);
  if (s) return s.title;
  if (stageId === null) return currentLang === 'ar' ? 'سؤال شامل' : 'Cross-stage';
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
  runnerState.exam = getExamForCurrentLang(data);
  runnerState.activeDifficulty = difficultyParam;

  if (runnerState.mode === 'exam') {
    renderExamGate();
  } else {
    renderPicker();
  }

  const total = runnerState.mode === 'exam'
    ? runnerState.exam.length
    : (applyDifficultyFilter(runnerState.activeDifficulty), runnerState.filteredBank.length);
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
   EXAM GATE — landing for mode=exam
------------------------------------------------------------------ */
function renderExamGate() {
  const map = LECTURE_DATA_MAP[lectureId];
  const threshold = map.passThreshold;
  const passedScore = getBestExamScore(lectureId);
  const passed = passedScore >= threshold;
  const pickerEl = document.getElementById('quizPicker');

  const examCount = runnerState.exam.length;
  const lockBanner = passed
    ? `<div class="exam-banner exam-banner-pass">
         <span class="mono">✓ ${tOrEn('examPassed')}</span>
         <strong>${tOrEn('examBestScore')}: ${passedScore} / ${examCount}</strong>
       </div>`
    : `<div class="exam-banner exam-banner-locked">
         <span class="mono">🔒 ${tOrEn('examLocked')}</span>
         <strong>${tOrEn('examPassReq')} ${threshold} / ${examCount}</strong>
       </div>`;

  pickerEl.innerHTML = `
    <div class="picker-head">
      <span class="mono">${tOrEn('examEyebrow')}</span>
      <h1>${tOrEn('examTitle')}</h1>
      <p class="muted">${tOrEn('examSubtitle')}</p>
    </div>

    ${lockBanner}

    <div class="exam-overview">
      <div class="exam-stat">
        <span class="mono">${tOrEn('examCount')}</span>
        <strong>${examCount}</strong>
      </div>
      <div class="exam-stat">
        <span class="mono">${tOrEn('examPassMark')}</span>
        <strong>${threshold} / ${examCount}</strong>
      </div>
      <div class="exam-stat">
        <span class="mono">${tOrEn('examTime')}</span>
        <strong>${tOrEn('examTimeEst')}</strong>
      </div>
    </div>

    <div class="exam-rules">
      <h3 class="mono">${tOrEn('examRulesHeading')}</h3>
      <ul>
        <li>${tOrEn('examRule1')}</li>
        <li>${tOrEn('examRule2')}</li>
        <li>${tOrEn('examRule3')}</li>
      </ul>
    </div>

    <div class="exam-actions">
      <button class="btn btn-primary btn-arrow" id="startExamBtn">${tOrEn('examStart')}</button>
      <a class="btn btn-ghost" href="quizzes.html">${tOrEn('examBackList')}</a>
    </div>
  `;

  document.getElementById('startExamBtn').addEventListener('click', startExam);
}

function startExam() {
  runnerState.questions = shuffle([...runnerState.exam]);
  runnerState.cursor = 0;
  runnerState.correct = 0;
  runnerState.wrong = 0;
  runnerState.skipped = 0;
  runnerState.answered = false;
  runnerState.perDifficulty = {
    easy: { c: 0, w: 0 }, medium: { c: 0, w: 0 },
    hard: { c: 0, w: 0 }, creative: { c: 0, w: 0 }
  };
  runnerState.scopeLabel = tOrEn('examScopeLabel');

  document.getElementById('quizPicker').classList.add('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizRunner').classList.remove('hidden');

  renderExamQuestion();
}

function renderExamQuestion() {
  const q = runnerState.questions[runnerState.cursor];
  if (!q) return finishExam();

  const total = runnerState.questions.length;
  const num = String(runnerState.cursor + 1).padStart(2, '0');

  document.getElementById('runnerStageLabel').textContent =
    `${tOrEn('examQuestion')} ${num} / ${String(total).padStart(2, '0')}`;
  document.getElementById('runnerScore').textContent =
    `${tOrEn('examScoreLabel')}: ${runnerState.correct} / ${runnerState.correct + runnerState.wrong}`;

  // Exam mode: hide chapter title + difficulty badge
  document.getElementById('runnerStageTitle').innerHTML = '';
  document.getElementById('runnerStageTitle').classList.add('exam-title-hidden');
  document.getElementById('runnerDifficulty').classList.add('hidden');

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

  const pct = Math.round((runnerState.cursor / total) * 100);
  document.getElementById('quizProgressFill').style.width = pct + '%';
  document.getElementById('quizProgressLabel').textContent =
    `${num} / ${String(total).padStart(2, '0')}`;

  document.getElementById('quizRunner').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishExam() {
  const map = LECTURE_DATA_MAP[lectureId];
  const threshold = map.passThreshold;
  const total = runnerState.questions.length;
  const passed = runnerState.correct >= threshold;

  // Persist best score and unlock
  const prev = getBestExamScore(lectureId);
  if (runnerState.correct > prev) {
    setBestExamScore(lectureId, runnerState.correct);
  }
  if (passed) {
    setUnlocked(lectureId);
  }

  document.getElementById('quizRunner').classList.add('hidden');
  const resultEl = document.getElementById('quizResult');
  resultEl.classList.remove('hidden');
  resultEl.classList.toggle('result-pass', passed);
  resultEl.classList.toggle('result-fail', !passed);

  document.getElementById('quizProgressFill').style.width = '100%';
  document.getElementById('quizProgressLabel').textContent =
    `${String(total).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  const pct = Math.round((runnerState.correct / total) * 100);

  document.getElementById('resultTitle').textContent = passed
    ? tOrEn('examPassedTitle')
    : tOrEn('examFailedTitle');
  document.getElementById('resultSubtitle').textContent =
    (passed ? tOrEn('examPassedMsg') : tOrEn('examFailedMsg')) + ` · ${tOrEn('examPassReq')} ${threshold}/${total}`;
  document.getElementById('resultScore').textContent = pct + '%';
  document.getElementById('resultCorrect').textContent = String(runnerState.correct).padStart(2, '0');
  document.getElementById('resultWrong').textContent = String(runnerState.wrong).padStart(2, '0');
  document.getElementById('resultSkipped').textContent = String(runnerState.skipped).padStart(2, '0');

  // Per-difficulty breakdown
  const breakdown = document.getElementById('resultBreakdown');
  breakdown.innerHTML = '';
  ['easy', 'medium', 'hard', 'creative'].forEach(d => {
    const stat = runnerState.perDifficulty[d];
    const t = stat.c + stat.w;
    if (t === 0) return;
    const cell = document.createElement('div');
    cell.className = `result-stat diff-${d}`;
    cell.innerHTML = `
        <span class="mono">${tOrEn('diff_' + d)}</span>
        <strong>${stat.c}<span class="result-stat-of">/${t}</span></strong>
      `;
    breakdown.appendChild(cell);
  });

  // Update result actions to be exam-specific
  const actions = resultEl.querySelector('.result-actions');
  actions.innerHTML = passed
    ? `<a class="btn btn-primary btn-arrow" href="quiz.html?lecture=${encodeURIComponent(lectureId)}" id="examGoPractice">${tOrEn('examGoPractice')}</a>
       <button class="btn btn-ghost" id="resultRetryBtn">${tOrEn('examRetry')}</button>
       <a class="btn btn-ghost" href="quizzes.html">${tOrEn('qzBackToList')}</a>`
    : `<button class="btn btn-primary btn-arrow" id="resultRetryBtn">${tOrEn('examRetry')}</button>
       <a class="btn btn-ghost" href="quizzes.html">${tOrEn('qzBackToList')}</a>`;
  actions.querySelector('#resultRetryBtn').addEventListener('click', () => {
    resultEl.classList.add('hidden');
    document.getElementById('quizPicker').classList.remove('hidden');
    document.getElementById('quizPicker').scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (passed) {
      // Already passed — go to practice
      window.location.href = `quiz.html?lecture=${encodeURIComponent(lectureId)}`;
    } else {
      // Failed — re-render gate (which will show passed=false if still failed)
      renderExamGate();
    }
  });

  document.getElementById('quizResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ------------------------------------------------------------------
   EXAM SCORE PERSISTENCE
------------------------------------------------------------------ */
function getBestExamScore(id) {
  try {
    const v = parseInt(localStorage.getItem(STORE_EXAM_KEY(id)) || '0', 10);
    return isNaN(v) ? 0 : v;
  } catch (e) { return 0; }
}
function setBestExamScore(id, score) {
  try { localStorage.setItem(STORE_EXAM_KEY(id), String(score)); } catch (e) {}
}
function setUnlocked(id) {
  try { localStorage.setItem(STORE_UNLOCK_KEY(id), '1'); } catch (e) {}
}
function isUnlocked(id) {
  try { return localStorage.getItem(STORE_UNLOCK_KEY(id)) === '1'; } catch (e) { return false; }
}

/* ------------------------------------------------------------------
   PRACTICE MODE — pick chapter or all
------------------------------------------------------------------ */
function applyDifficultyFilter(diff) {
  runnerState.activeDifficulty = diff;
  if (diff === 'all') {
    runnerState.filteredBank = [...runnerState.bank];
  } else {
    runnerState.filteredBank = runnerState.bank.filter(q => q.difficulty === diff);
  }
  document.querySelectorAll('.diff-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.diff === diff);
  });
  document.getElementById('allCount').textContent =
    `${String(runnerState.filteredBank.length).padStart(2, '0')} ${currentLang === 'ar' ? 'سؤال' : (runnerState.filteredBank.length === 1 ? 'question' : 'questions')}`;
  document.getElementById('allScopeLabel').textContent =
    diff === 'all' ? '' : tOrEn(`diff_${diff}`);
  renderStageButtons();
}

function renderPicker() {
  renderStageButtons();
  document.querySelector('[data-mode="all"]').addEventListener('click', () => startQuiz(null));
  document.querySelectorAll('.diff-chip').forEach(chip => {
    chip.addEventListener('click', () => applyDifficultyFilter(chip.dataset.diff));
  });
  applyDifficultyFilter(runnerState.activeDifficulty);
}

function renderStageButtons() {
  const grid = document.getElementById('stageButtons');
  if (!grid) return;
  grid.innerHTML = '';

  const counts = {};
  runnerState.filteredBank.forEach(q => {
    if (q.stageId === null) counts['__cross'] = (counts['__cross'] || 0) + 1;
    else counts[q.stageId] = (counts[q.stageId] || 0) + 1;
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

  document.getElementById('runnerStageTitle').innerHTML =
    `${getStageGlyph(q.stageId) ? `<span class="qg">${getStageGlyph(q.stageId)}</span>` : ''}<span>${getStageTitle(q.stageId)}</span>`;
  document.getElementById('runnerStageTitle').classList.remove('exam-title-hidden');

  document.getElementById('runnerDifficulty').textContent = tOrEn(`diff_${q.difficulty}`);
  document.getElementById('runnerDifficulty').className = `diff-badge diff-${q.difficulty}`;
  document.getElementById('runnerDifficulty').classList.remove('hidden');

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
    if (runnerState.perDifficulty[q.difficulty]) runnerState.perDifficulty[q.difficulty].c++;
  } else {
    runnerState.wrong++;
    if (runnerState.perDifficulty[q.difficulty]) runnerState.perDifficulty[q.difficulty].w++;
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
  if (runnerState.cursor >= runnerState.questions.length) {
    if (runnerState.mode === 'exam') finishExam();
    else finishQuiz();
  } else if (runnerState.mode === 'exam') renderExamQuestion();
  else renderCurrent();
}

function finishQuiz() {
  document.getElementById('quizRunner').classList.add('hidden');
  const resultEl = document.getElementById('quizResult');
  resultEl.classList.remove('hidden', 'result-pass', 'result-fail');

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

  const breakdown = document.getElementById('resultBreakdown');
  breakdown.innerHTML = '';
  ['easy', 'medium', 'hard', 'creative'].forEach(d => {
    const stat = runnerState.perDifficulty[d];
    const t = stat.c + stat.w;
    if (t === 0) return;
    const cell = document.createElement('div');
    cell.className = `result-stat diff-${d}`;
    cell.innerHTML = `
        <span class="mono">${tOrEn('diff_' + d)}</span>
        <strong>${stat.c}<span class="result-stat-of">/${t}</span></strong>
      `;
    breakdown.appendChild(cell);
  });

  // Restore default actions
  const actions = resultEl.querySelector('.result-actions');
  actions.innerHTML = `
    <button class="btn btn-ghost" id="resultRetryBtn">${tOrEn('qzRetry')}</button>
    <a class="btn btn-primary btn-arrow" href="quizzes.html">${tOrEn('qzOtherLectures')}</a>
  `;
  actions.querySelector('#resultRetryBtn').addEventListener('click', () => {
    document.getElementById('quizPicker').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizPicker').scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  const g = globalThis;
  runnerState.stages = getStagesForCurrentLang({
    stagesAr: g[data.stagesAr] || [],
    stagesEn: g[data.stagesEn] || []
  });
  runnerState.bank = getBankForCurrentLang({
    bankAr: g[data.bankArVar] || [],
    bankEn: g[data.bankEnVar] || []
  });
  runnerState.exam = getExamForCurrentLang({
    examAr: g[data.examArVar] || [],
    examEn: g[data.examEnVar] || []
  });

  document.getElementById('quizLectureLabel').textContent =
    `${runnerState.lecture.tag[currentLang] || runnerState.lecture.tag.en}`;

  // Re-render current view with new language
  if (runnerState.mode === 'exam') {
    if (!document.getElementById('quizPicker').classList.contains('hidden')) renderExamGate();
    else if (!document.getElementById('quizRunner').classList.contains('hidden')) renderExamQuestion();
    else if (!document.getElementById('quizResult').classList.contains('hidden')) finishExam();
  } else {
    if (!document.getElementById('quizPicker').classList.contains('hidden')) {
      applyDifficultyFilter(runnerState.activeDifficulty);
    } else if (!document.getElementById('quizRunner').classList.contains('hidden')) {
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
    } else if (!document.getElementById('quizResult').classList.contains('hidden')) {
      finishQuiz();
    }
  }
});