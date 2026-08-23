function renderJourneys() {
  const grid = document.getElementById('journeysGrid');
  if (!grid || typeof journeys === 'undefined') return;
  
  grid.innerHTML = '';
  
  journeys.forEach((journey, index) => {
    const isComingSoon = journey.status === 'coming-soon';
    const tagClass = isComingSoon ? 'tag-coming-soon' : 'tag-active';
    const cardClass = isComingSoon ? 'card-coming-soon' : '';
    const actionText = isComingSoon ? t('btnLocked') : t('btnStart');
    
    const title = journey.title[currentLang] || journey.title.en;
    const desc = journey.description[currentLang] || journey.description.en;
    const dur = journey.duration[currentLang] || journey.duration.en;
    const tag = journey.tag[currentLang] || journey.tag.en;
    
    const card = document.createElement('a');
    card.href = journey.url;
    card.className = `journey-card ${cardClass}`;
    card.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    
    if (isComingSoon) {
      card.addEventListener('click', (e) => e.preventDefault());
    }
    
    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${journey.icon}</div>
        <span class="card-tag ${tagClass}">${tag}</span>
      </div>
      <h2>${title}</h2>
      <p>${desc}</p>
      <div class="card-footer">
        <span class="duration">⏱ ${dur}</span>
        <span class="card-action">${actionText}</span>
      </div>
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
  const count = 50;
  
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
