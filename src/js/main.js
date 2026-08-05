import { gsap } from 'gsap';
import { renderComponents, initGridFilters, resetToHome } from './grid.js';
import { initAnimations, closeBook } from './animations.js';

// Setup GSAP initial states
gsap.set(['#gridBookmarks .bookmark', '#leftBookmarks .bookmark'], { y: '1.25rem', opacity: 0 });



// Init Sponsor Button Animation (event-delegated: the button lives inside a <template>)
document.addEventListener('mouseenter', (e) => {
  const btn = e.target.closest && e.target.closest('.sponsor-btn');
  if (!btn) return;
  gsap.to(btn, {
    rotateX: 15, rotateY: -15, rotation: 0, scale: 1.08,
    transformPerspective: 500, duration: 0.4, ease: "power2.out",
    boxShadow: "8px 8px 0px var(--text-ink)"
  });
}, true);
document.addEventListener('mouseleave', (e) => {
  const btn = e.target.closest && e.target.closest('.sponsor-btn');
  if (!btn) return;
  gsap.to(btn, {
    rotateX: 0, rotateY: 0, rotation: 2, scale: 1,
    duration: 0.6, ease: "elastic.out(1, 0.4)",
    boxShadow: "4px 4px 0px var(--text-ink)"
  });
}, true);

// Close Book Button: close the notebook and reset to home
const closeBookBtn = document.getElementById('closeBookBtn');
if (closeBookBtn) {
  closeBookBtn.addEventListener('click', async () => {
    await closeBook();
    resetToHome();
  });
}

// Initialize modules
initGridFilters();
renderComponents(false);
initAnimations();
