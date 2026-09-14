/* ============================================================
   Mobile hamburger nav — toggles the section links panel.
   Desktop shows links inline (CSS); this only wires the button.
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('navBurger');
  const nav = document.getElementById('mastNav');
  if (!burger || !nav) return;

  const close = () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !nav.classList.contains('open');
    nav.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) close();
  });

  // Keep panel open-state sane across language re-renders.
  window.addEventListener('langChanged', close);
});
