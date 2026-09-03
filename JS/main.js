/* ═══════════════════════════════════════════
   js/main.js — Entry point
   Renders data-driven sections, then boots interactive modules
═══════════════════════════════════════════ */

import { initCanvas }       from './canvas.js';
import { initNav }          from './navigation.js';
import { initReveal, initCursor, initProjectCards, bindCursorHoverTargets, markAllRevealed } from './animations.js';

import { renderHero, renderAbout, renderContact, renderFooter } from './render/renderProfile.js';
import { renderSkills }      from './render/renderSkills.js';
import { renderExperience }  from './render/renderExperience.js';
import { renderEducation }   from './render/renderEducation.js';
import { renderProjects }    from './render/renderProjects.js';
import { renderAwards }      from './render/renderAwards.js';
import { initProjectModal, refreshOpenProjectModal } from './render/projectModal.js';
import { applyUiStrings }    from './render/renderChrome.js';
import { getLocale, setLocale, onLocaleChange } from './i18n.js';

function renderContent() {
  applyUiStrings(getLocale());
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderEducation();
  renderProjects();
  renderAwards();
  renderContact();
  renderFooter();
  refreshOpenProjectModal();
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === getLocale());
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = getLocale();

  // Inject data-driven content first, so reveal/cursor/card-glow can bind to it
  renderContent();
  initProjectModal();

  // Background canvas
  const canvas = document.getElementById('hero-canvas');
  if (canvas) initCanvas(canvas);

  // Navigation
  initNav();

  // Scroll-reveal
  initReveal();

  // Custom cursor (desktop only)
  if (!matchMedia('(hover: none)').matches) initCursor();

  // Project card glow
  initProjectCards();

  // Language switcher
  updateLangButtons();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLocale(btn.dataset.lang));
  });

  onLocaleChange(() => {
    renderContent();
    initProjectCards();      // re-bind glow on freshly rendered project cards
    bindCursorHoverTargets(); // re-bind cursor hover on freshly rendered elements
    markAllRevealed();       // skip reveal replay on a language switch
    updateLangButtons();
  });
});
