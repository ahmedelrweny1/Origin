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
    const isComingSoon = journey.status === 'coming-soon';
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
      </div>
      <span class="journey-arrow">→</span>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderJourneys();
  createParticles();
});

window.addEventListener('langChanged', () => {
  renderJourneys();
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