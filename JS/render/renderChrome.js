/* ═══════════════════════════════════════════
   render/renderChrome.js — Fixed UI text (nav, section headers, buttons, modal labels)
   Driven by [data-i18n] / [data-i18n-html] attributes already present in index.html.
═══════════════════════════════════════════ */

import { ui } from '../../data/ui.js';

function getPath(obj, path) {
  return path.split('.').reduce((o, key) => (o == null ? o : o[key]), obj);
}

export function applyUiStrings(locale) {
  const dict = ui[locale];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getPath(dict, el.dataset.i18n);
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const value = getPath(dict, el.dataset.i18nHtml);
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const value = getPath(dict, el.dataset.i18nAria);
    if (value != null) el.setAttribute('aria-label', value);
  });
}
