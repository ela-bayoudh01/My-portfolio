/* ═══════════════════════════════════════════
   i18n.js — Locale state, persisted in localStorage
═══════════════════════════════════════════ */

const STORAGE_KEY = 'portfolio:locale';
const DEFAULT_LOCALE = 'en';

function readStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'fr' || stored === 'en' ? stored : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

let locale = readStoredLocale();
const listeners = [];

export function getLocale() {
  return locale;
}

export function setLocale(next) {
  if (next !== 'en' && next !== 'fr') return;
  if (next === locale) return;
  locale = next;
  try { localStorage.setItem(STORAGE_KEY, locale); } catch {}
  document.documentElement.lang = locale;
  listeners.forEach(fn => fn(locale));
}

export function onLocaleChange(fn) {
  listeners.push(fn);
}

// Reads a { en, fr } field in the current locale. Plain strings pass through unchanged.
export function tr(field) {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[locale] ?? field.en ?? '';
}
