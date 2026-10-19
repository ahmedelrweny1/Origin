function renderJourneys() {
  const grid = document.getElementById('journeysGrid');
  if (!grid || typeof journeys === 'undefined') return;

  grid.innerHTML = '';

  const totalLabel = currentLang === 'ar'
    ? `${journeys.length} رحلة`
    : `${journeys.length} ${journeys.length === 1 ? 'entry' : 'entries'}`;

  const countEl = document.querySelector('[data-i18n="tocCount"]');
  if (countEl) countEl.textContent = totalLabel;

  journeys.forEach((journey, index) => {
    const isComingSoon = isComingSoonJourney(journey);
    const title = journey.title[currentLang] || journey.title.en;
    const desc = journey.description[currentLang] || journey.description.en;
    const dur = journey.duration[currentLang] || journey.duration.en;
    const tag = journey.tag[currentLang] || journey.tag.en;

    const card = document.createElement('a');
    card.href = journey.url;
    card.className = `journey-card ${isComingSoon ? 'coming-soon' : ''}`;
    card.setAttribute('aria-label', title);

    if (isComingSoon) {
      card.addEventListener('click', (e) => e.preventDefault());
    }

    const num = String(index + 1).padStart(2, '0');
    const lockLabel = currentLang === 'ar' ? 'مقفول' : 'Locked';
    const metaHtml = `
      <span>${isComingSoon ? lockLabel : '⏱ ' + dur}</span>
      <span>· ${tag}</span>
    `;

    card.innerHTML = `
      <span class="journey-index">${num}</span>
      <div class="journey-body">
        <div class="journey-tag-row">
          <span class="chip ${isComingSoon ? '' : 'chip-solid'}">${tag}</span>
          ${isComingSoon ? '' : `<span class="chip">${journey.icon} ${currentLang === 'ar' ? 'متاح' : 'Open'}</span>`}
        </div>
        <h3 class="journey-title">${title}</h3>
        <p class="journey-desc">${desc}</p>
        <div class="journey-meta">${metaHtml}</div>
        ${journeyProgressHtml(journey)}
      </div>
      <span class="journey-arrow">→</span>
    `;

    grid.appendChild(card);
  });
}

function tOrEn(key) {
  return (typeof currentLang === 'string' &&
    typeof translations === 'object' &&
    (translations[currentLang] && translations[currentLang][key])) ||
    (typeof translations === 'object' && translations.en && translations.en[key]) ||
    '';
}

function journeyProgressHtml(journey) {
  if (isComingSoonJourney(journey) || typeof getJourneyProgress !== 'function') return '';
  const p = getJourneyProgress(journey.id);
  if (!p.started) return '';
  const isAr = currentLang === 'ar';
  const done = p.visited === p.total;
  const doneFlag = isAr ? 'خلصتها' : 'done';
  const stops = isAr ? 'محطة' : 'stops';
  const examPart = journey.hasQuizzes
    ? `<span class="journey-progress-chip ${p.examPassed ? 'ok' : 'pending'}">${p.examPassed ? '✓' : '📝'} ${tOrEn('examScoreLabel')} ${p.examBest}/15</span>`
    : '';
  const bankPart = journey.hasQuizzes
    ? `<span class="journey-progress-chip ${p.bankOpen ? 'ok' : 'pending'}">${p.bankOpen ? '🔓' : '🔒'} ${p.bankOpen ? tOrEn('portalBankOpen') : (isAr ? 'البنك مقفول' : 'Bank locked')}</span>`
    : '';
  return `
    <div class="journey-progress">
      <div class="journey-progress-bar"><span style="width:${Math.max(p.pct, done ? 100 : 4)}%"></span></div>
      <div class="journey-progress-meta">
        <span class="mono">${isAr ? `⭐ ${done ? doneFlag : ''} ${p.visited}/${p.total} ${stops}` : `⭐ ${p.visited}/${p.total} ${stops}${done ? ' ' + doneFlag : ''}`}</span>
        <span class="journey-progress-chips">${examPart}${bankPart}</span>
      </div>
    </div>
  `;
}

function isComingSoonJourney(journey) {
  return journey.status === 'coming-soon';
}

function renderContinueBand() {
  const band = document.getElementById('continueBand');
  if (!band || typeof journeys === 'undefined' || typeof getJourneyProgress !== 'function') return;
  const fresh = !journeys.some(j => getJourneyProgress(j.id).started);
  band.classList.toggle('hidden', fresh);
  if (fresh) return;

  const isAr = currentLang === 'ar';
  const active = journeys.filter(j => {
    if (isComingSoonJourney(j)) return false;
    const p = getJourneyProgress(j.id);
    return p.started && p.visited < p.total;
  });
  active.sort((a, b) => (getJourneyProgress(a.id).visited / JOURNEY_TOTALS[a.id] || 0) - (getJourneyProgress(b.id).visited / JOURNEY_TOTALS[b.id] || 0));
  const next = active[0];
  if (!next) return;

  const p = getJourneyProgress(next.id);
  const title = next.title[currentLang] || next.title.en;
  const tag = next.tag[currentLang] || next.tag.en;
  const stops = isAr ? 'محطة' : 'stops';
  const btn = document.createElement('a');
  btn.href = next.url;
  btn.className = 'continue-card';
  btn.innerHTML = `
    <div class="continue-progress">
      <div class="journey-progress-bar"><span style="width:${Math.max(p.pct, 4)}%"></span></div>
      <span class="mono">${p.visited}/${p.total} ${stops}</span>
    </div>
    <div class="continue-body">
      <span class="mono faint">${tOrEn('portalContinue')} · ${tag}</span>
      <h3 class="continue-title">${title}</h3>
    </div>
    <span class="continue-cta">${tOrEn('portalResume')} →</span>
  `;
  band.innerHTML = '';
  band.appendChild(btn);
}

document.addEventListener('DOMContentLoaded', () => {
  renderJourneys();
  
  renderContinueBand();
});

window.addEventListener('langChanged', () => {
  renderJourneys();
  renderContinueBand();
});