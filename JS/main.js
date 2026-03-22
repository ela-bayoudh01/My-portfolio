/* ═══════════════════════════════════════════
   js/main.js — Entry point
   Imports and boots all modules
═══════════════════════════════════════════ */

import { initCanvas }       from './canvas.js';
import { initNav }          from './navigation.js';
import { initReveal, initCursor, initProjectCards } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
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
});