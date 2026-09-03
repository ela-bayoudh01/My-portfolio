/* ═══════════════════════════════════════════
   render/renderProfile.js — Hero, About, Contact, Footer
═══════════════════════════════════════════ */

import { hero, about, contact, footer } from '../../data/profile.js';
import { icon } from './icons.js';
import { tr } from '../i18n.js';

export function renderHero() {
  const eyebrow = document.getElementById('hero-eyebrow-text');
  const name = document.getElementById('hero-name');
  const title = document.getElementById('hero-title');
  const desc = document.getElementById('hero-desc');
  const stats = document.getElementById('hero-stats');
  if (!eyebrow) return;

  eyebrow.textContent = tr(hero.eyebrow);
  name.innerHTML = `${hero.nameLines[0]}<br><em>${hero.nameLines[1]}</em>`;
  title.innerHTML = tr(hero.title);
  desc.textContent = tr(hero.description);
  stats.innerHTML = hero.stats.map(s => `
    <div class="hero-stat">
      <div class="hero-stat-number">${s.number}</div>
      <div class="hero-stat-label">${tr(s.label)}</div>
    </div>
  `).join('');
}

export function renderAbout() {
  const textEl = document.getElementById('about-text-content');
  const cardsEl = document.getElementById('about-cards');
  if (!textEl) return;

  const paragraphs = about.paragraphs.map(p => `<p>${tr(p)}</p>`).join('');
  const details = `
    <div class="about-detail-list">
      ${about.details.map(d => `
        <div class="about-detail-item">
          <span class="about-detail-key">${tr(d.key)}</span>
          <span class="about-detail-val">${tr(d.value)}</span>
        </div>
      `).join('')}
    </div>
  `;
  textEl.innerHTML = paragraphs + details;

  cardsEl.innerHTML = about.cards.map((c, i) => `
    <div class="about-card reveal reveal-delay-${i + 2}">
      <span class="about-card-icon">${c.icon}</span>
      <h4>${tr(c.title)}</h4>
      <p>${tr(c.description)}</p>
    </div>
  `).join('');
}

export function renderContact() {
  const headline = document.getElementById('contact-headline');
  const sub = document.getElementById('contact-sub');
  const links = document.getElementById('contact-links');
  const availability = document.getElementById('contact-availability-text');
  if (!headline) return;

  headline.innerHTML = tr(contact.headline);
  sub.textContent = tr(contact.sub);
  links.innerHTML = contact.links.map(l => `
    <a href="${l.href}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="contact-link-item">
      <span class="contact-link-icon">${icon(l.icon, 18)}</span>
      <span class="contact-link-info">
        <span class="contact-link-label">${tr(l.label)}</span>
        <span class="contact-link-value">${l.value}</span>
      </span>
    </a>
  `).join('');

  availability.innerHTML = `
    <h3>${tr(contact.availability.heading)}</h3>
    <p>${tr(contact.availability.description)}</p>
  `;
}

export function renderFooter() {
  const copy = document.getElementById('footer-copy');
  const links = document.getElementById('footer-links');
  if (!copy) return;

  copy.textContent = tr(footer.copy);
  links.innerHTML = footer.links.map(l => `<a href="${l.href}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${tr(l.label)}</a>`).join('');
}
