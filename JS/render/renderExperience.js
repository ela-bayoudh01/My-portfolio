/* ═══════════════════════════════════════════
   render/renderExperience.js
═══════════════════════════════════════════ */

import { experience } from '../../data/experience.js';
import { tr } from '../i18n.js';

export function renderExperience() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = experience.map((item, i) => `
    <div class="timeline-item reveal ${i > 0 ? `reveal-delay-${i}` : ''}">
      <span class="timeline-dot"></span>
      <div class="timeline-date">${tr(item.date)}</div>
      <h3 class="timeline-role">${tr(item.role)}</h3>
      <div class="timeline-company">${tr(item.company)}</div>
      <p class="timeline-desc">${tr(item.description)}</p>
      <div class="timeline-tags">
        ${item.tags.map(t => `<span class="timeline-tag">${tr(t)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}
