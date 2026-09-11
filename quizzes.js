/* ============================================================
   Quizzes landing — per lecture: exam card + gated practice card
   ============================================================ */

const loadedLectureData = {};
const EXAM_STORE_KEY = (id) => `origin-exam-${id}`;
const UNLOCK_STORE_KEY = (id) => `origin-unlock-${id}`;

const ASSET_V = 'v=5';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src + (src.includes('?') ? '&' : '?') + ASSET_V;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function ensureLectureLoaded(lectureId) {
  if (loadedLectureData[lectureId]) return loadedLectureData[lectureId];
  const map = LECTURE_DATA_MAP[lectureId];
  if (!map) return null;
  const g = globalThis;
  if (typeof g[map.stagesAr] === 'undefined') await loadScript(map.scriptAr);
  if (typeof g[map.stagesEn] === 'undefined') await loadScript(map.scriptEn);
  if (map.bankAr && typeof g[map.bankArVar] === 'undefined') await loadScript(map.bankAr);
  if (map.bankEn && typeof g[map.bankEnVar] === 'undefined') await loadScript(map.bankEn);
  if (map.examAr && typeof g[map.examArVar] === 'undefined') await loadScript(map.examAr);
  if (map.examEn && typeof g[map.examEnVar] === 'undefined') await loadScript(map.examEn);

  loadedLectureData[lectureId] = {
    stagesAr: g[map.stagesAr] || [],
    stagesEn: g[map.stagesEn] || [],
    bankAr: g[map.bankArVar] || [],
    bankEn: g[map.bankEnVar] || [],
    examAr: g[map.examArVar] || [],
    examEn: g[map.examEnVar] || []
  };
  return loadedLectureData[lectureId];
}

function countByDifficulty(bank) {
  const out = { easy: 0, medium: 0, hard: 0, creative: 0 };
  bank.forEach(q => {
    if (out[q.difficulty] !== undefined) out[q.difficulty]++;
  });
  return out;
}

function getBestExamScore(id) {
  try {
    const v = parseInt(localStorage.getItem(EXAM_STORE_KEY(id)) || '0', 10);
    return isNaN(v) ? 0 : v;
  } catch (e) { return 0; }
}

function isUnlocked(id) {
  try { return localStorage.getItem(UNLOCK_STORE_KEY(id)) === '1'; } catch (e) { return false; }
}

function tOrEn(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.en && translations.en[key])
    || key;
}

async function renderQuizCards() {
  const grid = document.getElementById('quizCards');
  if (!grid || typeof journeys === 'undefined') return;

  grid.innerHTML = '';

  const quizable = journeys.filter(j => j.hasQuizzes);
  const isAr = currentLang === 'ar';
  const countLabel = isAr
    ? `${quizable.length} ${quizable.length === 1 ? 'محاضرة' : 'محاضرات'}`
    : `${quizable.length} ${quizable.length === 1 ? 'lecture' : 'lectures'}`;
  const countEl = document.getElementById('qzTocCount');
  if (countEl) countEl.textContent = countLabel;

  const diffLabels = isAr
    ? { easy: 'سهل', medium: 'متوسط', hard: 'صعب', creative: 'إبداعي' }
    : { easy: 'Easy', medium: 'Medium', hard: 'Hard', creative: 'Creative' };

  for (let index = 0; index < quizable.length; index++) {
    const journey = quizable[index];
    const num = String(index + 1).padStart(2, '0');

    const title = journey.title[currentLang] || journey.title.en;
    const desc = journey.description[currentLang] || journey.description.en;
    const tag = journey.tag[currentLang] || journey.tag.en;

    const map = LECTURE_DATA_MAP[journey.id];
    const threshold = map && map.passThreshold;

    let quizCount = '—';
    let stageCount = '—';
    let examCount = '—';
    let byDiff = { easy: 0, medium: 0, hard: 0, creative: 0 };
    try {
      const data = await ensureLectureLoaded(journey.id);
      if (data) {
        const stages = isAr ? data.stagesAr : data.stagesEn;
        const bank = isAr ? data.bankAr : data.bankEn;
        const exam = isAr ? data.examAr : data.examEn;
        byDiff = countByDifficulty(bank);
        quizCount = String(bank.length).padStart(2, '0');
        stageCount = String(stages.length).padStart(2, '0');
        examCount = String(exam.length).padStart(2, '0');
      }
    } catch (e) {
      console.warn('Could not load lecture data', journey.id, e);
    }

    const passed = isUnlocked(journey.id);
    const bestScore = getBestExamScore(journey.id);

    // ---- Exam card (always available) ----
    const examHref = journey.examUrl || `quiz.html?lecture=${encodeURIComponent(journey.id)}&mode=exam`;
    const examCard = document.createElement('a');
    examCard.href = examHref;
    examCard.className = 'quiz-card';
    examCard.setAttribute('aria-label', title + ' · exam');

    const examStatus = passed
      ? `<span class="quiz-card-status status-passed">✓ ${tOrEn('examPassed')} · ${bestScore}/${examCount}</span>`
      : `<span class="quiz-card-status status-locked">🔒 ${tOrEn('examLocked')}</span>`;

    examCard.innerHTML = `
      <span class="journey-index">${num}</span>
      <div class="journey-body">
        <div class="journey-tag-row">
          <span class="chip chip-solid">${tag}</span>
          <span class="chip">📝 ${isAr ? 'امتحان شامل' : 'Final exam'}</span>
        </div>
        <h3 class="journey-title">${title} · ${isAr ? 'الامتحان الشامل' : 'Final Exam'}</h3>
        <p class="journey-desc">${isAr
          ? `١٥ سؤال مختلط المستوى بغطي كل الفصول. لازم تجيب ${threshold} من ${examCount} عشان يفتحلك بنك الأسئلة الكامل.`
          : `15 mixed-difficulty questions covering every chapter. Pass with ${threshold} / ${examCount} to unlock the full practice bank.`}</p>
        ${examStatus}
        <div class="journey-meta">
          <span>❓ ${examCount} ${isAr ? 'سؤال' : 'questions'}</span>
          <span>· ⏱ ${tOrEn('examTimeEst')}</span>
          <span>· 🎯 ${threshold} / ${examCount} ${isAr ? 'للنجاح' : 'to pass'}</span>
        </div>
      </div>
      <span class="journey-arrow">→</span>
    `;
    grid.appendChild(examCard);

    // ---- Practice card (gated) ----
    const practiceHref = `quiz.html?lecture=${encodeURIComponent(journey.id)}`;
    const practiceCard = document.createElement(passed ? 'a' : 'div');
    practiceCard.className = 'quiz-card quiz-card-practice' + (passed ? '' : ' locked');
    practiceCard.setAttribute('aria-label', title + ' · practice');
    if (passed) practiceCard.href = practiceHref;

    const lockOverlay = passed ? '' : `
      <div class="quiz-card-lock">
        <span class="lock-icon">🔒</span>
        <span class="lock-text">${isAr ? 'افتح الامتحان الأول' : 'Pass the exam to unlock'}</span>
      </div>
    `;

    practiceCard.innerHTML = `
      <span class="journey-index">${isAr ? 'م' : 'P'}</span>
      <div class="journey-body">
        <div class="journey-tag-row">
          <span class="chip chip-solid">${tag}</span>
          <span class="chip">🎯 ${isAr ? 'بنك الأسئلة' : 'Practice bank'}</span>
        </div>
        <h3 class="journey-title">${title} · ${isAr ? 'بنك الأسئلة' : 'Practice Bank'}</h3>
        <p class="journey-desc">${isAr
          ? '٥٢ سؤال موزعين على كل فصل وبكل المستويات (سهل/ متوسط/ صعب/ إبداعي). اختار فصل أو اعمل الكل مخلوط.'
          : '52 questions across all chapters and all difficulties (Easy / Medium / Hard / Creative). Pick a chapter or do them all shuffled.'}</p>
        <div class="journey-meta">
          <span>❓ ${quizCount} ${isAr ? 'سؤال' : 'questions'}</span>
          <span>· 🗺 ${stageCount} ${isAr ? 'محطة' : 'stages'}</span>
        </div>
        <div class="quiz-card-diff">
          <span class="diff-mini diff-mini-easy">${diffLabels.easy}: ${String(byDiff.easy).padStart(2, '0')}</span>
          <span class="diff-mini diff-mini-medium">${diffLabels.medium}: ${String(byDiff.medium).padStart(2, '0')}</span>
          <span class="diff-mini diff-mini-hard">${diffLabels.hard}: ${String(byDiff.hard).padStart(2, '0')}</span>
          <span class="diff-mini diff-mini-creative">${diffLabels.creative}: ${String(byDiff.creative).padStart(2, '0')}</span>
        </div>
      </div>
      ${passed ? '<span class="journey-arrow">→</span>' : ''}
      ${lockOverlay}
    `;
    grid.appendChild(practiceCard);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuizCards();
  createParticles();
});

window.addEventListener('langChanged', () => {
  renderQuizCards();
});

function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  container.innerHTML = '';
  const count = 40;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 2 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    const duration = Math.random() * 4 + 3;
    const delay = Math.random() * 5;
    particle.style.setProperty('--duration', `${duration}s`);
    particle.style.setProperty('--delay', `${delay}s`);
    container.appendChild(particle);
  }
}