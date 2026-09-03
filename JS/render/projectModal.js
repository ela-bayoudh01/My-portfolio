/* ═══════════════════════════════════════════
   render/projectModal.js — Project detail panel
   Falls back to just the summary when problem/approach/results aren't written yet.
═══════════════════════════════════════════ */

import { projects } from '../../data/projects.js';
import { ui } from '../../data/ui.js';
import { icon } from './icons.js';
import { getLocale, tr } from '../i18n.js';

let modalEl, bodyEl, openProjectId;

export function initProjectModal() {
  modalEl = document.getElementById('project-modal');
  bodyEl = document.getElementById('project-modal-body');
  if (!modalEl) return;

  modalEl.querySelectorAll('[data-modal-close]').forEach(el =>
    el.addEventListener('click', closeProjectModal)
  );
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

export function openProjectModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project || !modalEl) return;

  openProjectId = id;
  bodyEl.innerHTML = renderModalBody(project);
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeProjectModal() {
  if (!modalEl) return;
  openProjectId = null;
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
}

// Re-renders the currently open modal's body in place after a locale switch.
export function refreshOpenProjectModal() {
  if (!openProjectId || !bodyEl) return;
  const project = projects.find(p => p.id === openProjectId);
  if (!project) return;
  bodyEl.innerHTML = renderModalBody(project);
}

function renderModalBody(project) {
  const s = ui[getLocale()];
  const statusLabel = project.featured ? `${project.number} · ${s.project.featured}` : project.number;

  return `
    <div class="project-modal-num">${statusLabel}</div>
    <h3 class="project-modal-title">${tr(project.title)}</h3>
    <div class="project-modal-section">
      <div class="project-modal-section-label">${s.modal.overview}</div>
      <p>${tr(project.summary)}</p>
    </div>
    ${project.problem ? `
    <div class="project-modal-section">
      <div class="project-modal-section-label">${s.modal.problem}</div>
      <p>${tr(project.problem)}</p>
    </div>` : ''}
    ${project.approach ? `
    <div class="project-modal-section">
      <div class="project-modal-section-label">${s.modal.approach}</div>
      <p>${tr(project.approach)}</p>
    </div>` : ''}
    ${project.results && tr(project.results) && tr(project.results).length ? `
    <div class="project-modal-section">
      <div class="project-modal-section-label">${s.modal.results}</div>
      <ul class="project-modal-results">
        ${tr(project.results).map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>` : ''}
    ${project.links && project.links.length ? `
    <div class="project-modal-footer">
      ${project.links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener" class="project-gh-link">
          ${icon('github', 14)} ${l.label}
        </a>
      `).join('')}
    </div>` : ''}
  `;
}
