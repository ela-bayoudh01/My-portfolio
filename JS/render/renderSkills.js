/* ═══════════════════════════════════════════
   render/renderSkills.js
═══════════════════════════════════════════ */

import { skillGroups } from '../../data/skills.js';
import { ui } from '../../data/ui.js';
import { getLocale, tr } from '../i18n.js';

const LEVELS = ['confirmed', 'working', 'notions'];

export function renderSkills() {
  const legend = document.getElementById('skills-legend');
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const s = ui[getLocale()].skillsLegend;
  if (legend) {
    legend.innerHTML = LEVELS.map(level => `
      <div class="skills-legend-item">
        <span class="skills-legend-dot" data-level="${level}"></span>
        <span>${s[level]}</span>
      </div>
    `).join('');
  }

  grid.innerHTML = skillGroups.map((group, i) => `
    <div class="skill-category reveal reveal-delay-${(i % 4) + 1}">
      <div class="skill-category-name">${tr(group.category)}</div>
      <div class="skill-tags">
        ${group.items.map(item => `
          <span class="skill-tag" ${item.level ? `data-level="${item.level}"` : ''}>
            ${item.level ? '<span class="skill-tag-level"></span>' : ''}${tr(item.name)}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}
