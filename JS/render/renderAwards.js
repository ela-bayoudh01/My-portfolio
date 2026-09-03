/* ═══════════════════════════════════════════
   render/renderAwards.js
═══════════════════════════════════════════ */

import { awards, engagement } from '../../data/awards.js';
import { tr } from '../i18n.js';

export function renderAwards() {
  const grid = document.getElementById('awards-grid');
  const list = document.getElementById('engagement-list');
  if (!grid) return;

  grid.innerHTML = awards.map((a, i) => `
    <div class="award-card reveal reveal-delay-${i + 1}">
      <div class="award-place">${tr(a.place)}</div>
      <h3 class="award-title">${tr(a.title)}</h3>
      <div class="award-org">${tr(a.org)}</div>
      <p class="award-desc">${tr(a.description)}</p>
    </div>
  `).join('');

  list.innerHTML = engagement.map(e => `
    <div class="engage-item">
      <div class="engage-period">${tr(e.period)}</div>
      <div class="engage-info">
        <div class="engage-role">${tr(e.role)}</div>
        <div class="engage-org">${tr(e.org)}</div>
        <div class="engage-desc">${tr(e.description)}</div>
      </div>
    </div>
  `).join('');
}
