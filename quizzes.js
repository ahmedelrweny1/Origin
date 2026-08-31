/* ============================================================
   Quizzes landing — count + render quiz cards per lecture
   ============================================================ */

const loadedLectureData = {};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function ensureLectureLoaded(lectureId) {
  if (loadedLectureData[lectureId]) return loadedLectureData[lectureId];
  const map = LECTURE_DATA_MAP[lectureId];
  if (!map) return null;

  if (!window[map.stagesAr]) await loadScript(map.scriptAr);
  if (!window[map.stagesEn]) await loadScript(map.scriptEn);
  if (map.bankAr && !window[map.bankArVar]) await loadScript(map.bankAr);
  if (map.bankEn && !window[map.bankEnVar]) await loadScript(map.bankEn);

  loadedLectureData[lectureId] = {
    stagesAr: window[map.stagesAr] || [],
    stagesEn: window[map.stagesEn] || [],
    bankAr: window[map.bankArVar] || [],
    bankEn: window[map.bankEnVar] || []
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

    let quizCount = '—';
    let stageCount = '—';
    let byDiff = { easy: 0, medium: 0, hard: 0, creative: 0 };
    try {
      const data = await ensureLectureLoaded(journey.id);
      if (data) {
        const stages = isAr ? data.stagesAr : data.stagesEn;
        const bank = isAr ? data.bankAr : data.bankEn;
        byDiff = countByDifficulty(bank);
        quizCount = String(bank.length).padStart(2, '0');
        stageCount = String(stages.length).padStart(2, '0');
      }
    } catch (e) {
      console.warn('Could not load lecture data', journey.id, e);
    }

    const card = document.createElement('a');
    card.href = journey.quizUrl || `quiz.html?lecture=${encodeURIComponent(journey.id)}`;
    card.className = 'quiz-card';
    card.setAttribute('aria-label', title);

    card.innerHTML = `
      <span class="journey-index">${num}</span>
      <div class="journey-body">
        <div class="journey-tag-row">
          <span class="chip chip-solid">${tag}</span>
          <span class="chip">${journey.icon} ${isAr ? 'أسئلة' : 'Quizzes'}</span>
        </div>
        <h3 class="journey-title">${title}</h3>
        <p class="journey-desc">${desc}</p>
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
      <span class="journey-arrow">→</span>
    `;

    grid.appendChild(card);
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