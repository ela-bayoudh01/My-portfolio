/* ═══════════════════════════════════════════
   render/renderProjects.js
═══════════════════════════════════════════ */

import { projects } from '../../data/projects.js';
import { ui } from '../../data/ui.js';
import { icon } from './icons.js';
import { openProjectModal } from './projectModal.js';
import { getLocale, tr } from '../i18n.js';

export function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(projectCardHTML).join('');

  grid.querySelectorAll('[data-project-id]').forEach(btn => {
    btn.addEventListener('click', () => openProjectModal(btn.dataset.projectId));
  });
}

function ghLinks(project) {
  if (!project.links || !project.links.length) return '';
  return `
    <div class="project-gh-links">
      ${project.links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener" class="project-gh-link">
          ${icon('github', 14)} ${l.label}
        </a>
      `).join('')}
    </div>
  `;
}

function detailsButton(project, s) {
  return `<button type="button" class="project-details-btn" data-project-id="${project.id}">${s.project.viewDetails}</button>`;
}

function projectCardHTML(project, index) {
  const s = ui[getLocale()];
  const revealClass = index === 0 ? 'reveal' : `reveal reveal-delay-${Math.min(index, 4)}`;
  const isOngoing = project.status.state === 'ongoing';

  if (project.featured) {
    return `
      <article class="project-card featured ${revealClass}">
        <div class="project-info">
          <div class="project-num">${project.number} · ${s.project.featured} · ${isOngoing ? s.project.ongoing : s.project.completed}</div>
          <h3 class="project-title">${tr(project.title)}</h3>
          <p class="project-desc">${tr(project.summary)}</p>
          <div class="project-stack">
            ${project.stack.map(t => `<span>${t}</span>`).join('')}
          </div>
          <span class="project-status ${isOngoing ? 'ongoing' : ''}">${tr(project.status.label)}</span>
          ${ghLinks(project)}
          ${detailsButton(project, s)}
        </div>
        <div class="project-visual">
          <span class="project-visual-inner">${tr(project.visualLabel) || ''}</span>
        </div>
      </article>
    `;
  }

  return `
    <article class="project-card ${revealClass}">
      <div class="project-num">${project.number}</div>
      <h3 class="project-title">${tr(project.title)}</h3>
      <p class="project-desc">${tr(project.summary)}</p>
      <div class="project-stack">
        ${project.stack.map(t => `<span>${t}</span>`).join('')}
      </div>
      <span class="project-status">${tr(project.status.label)}</span>
      ${ghLinks(project)}
      ${detailsButton(project, s)}
    </article>
  `;
}
