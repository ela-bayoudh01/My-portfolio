/* ═══════════════════════════════════════════
   js/nav.js — Navbar scroll + mobile toggle
═══════════════════════════════════════════ */

export function initNav() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const links    = navLinks.querySelectorAll('a');

  /* Scroll behaviour */
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    highlightActive();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu */
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* Active link highlight via Intersection Observer */
  const sections = document.querySelectorAll('section[id]');

  function highlightActive() {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 160) current = s.id;
    });
    links.forEach(l => {
      const href = l.getAttribute('href')?.replace('#', '');
      l.classList.toggle('active', href === current);
    });
  }

  highlightActive();
}