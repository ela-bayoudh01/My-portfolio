/* ═══════════════════════════════════════════
   render/renderEducation.js — used by both #education and #training,
   which share the same .education-list / .edu-item markup.
═══════════════════════════════════════════ */

import { education, training } from '../../data/education.js';
import { tr } from '../i18n.js';

function renderList(containerId, entries) {
  const list = document.getElementById(containerId);
  if (!list) return;

  list.innerHTML = entries.map(e => `
    <div class="edu-item">
      <div class="edu-year">${tr(e.year)}</div>
      <div class="edu-info">
        <div class="edu-degree">${tr(e.degree)}</div>
        <div class="edu-school">${tr(e.school)}</div>
      </div>
      <span class="edu-badge ${e.badge.current ? 'current' : ''}">${tr(e.badge.label)}</span>
    </div>
  `).join('');
}

export function renderEducation() {
  renderList('education-list', education);
  renderList('training-list', training);
}
