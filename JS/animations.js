/* ═══════════════════════════════════════════
   js/animations.js — Reveal + custom cursor
═══════════════════════════════════════════ */

export function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  els.forEach(el => obs.observe(el));
}

// Language switches rebuild content in place — skip the scroll-reveal replay so
// already-visible sections don't blink out and re-animate.
export function markAllRevealed() {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

export function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');

  if (!dot || !ring) {
    document.body.classList.add('no-custom-cursor');
    return;
  }

  let mx = 0, my = 0, rx = 0, ry = 0;
  let started = false;

  // ── Move dot instantly, ring lags behind ──
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';

    if (!started) {
      started = true;
      dot.classList.add('active');
      ring.classList.add('active');
    }
  });

  // Hide when pointer leaves the window
  document.addEventListener('mouseleave', () => {
    dot.classList.remove('active');
    ring.classList.remove('active');
  });
  document.addEventListener('mouseenter', () => {
    if (started) {
      dot.classList.add('active');
      ring.classList.add('active');
    }
  });

  // Smooth ring follow with lerp
  function lerp(a, b, t) { return a + (b - a) * t; }
  (function animate() {
    rx = lerp(rx, mx, 0.12);
    ry = lerp(ry, my, 0.12);
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animate);
  })();

  bindCursorHoverTargets();
}

// Re-run after any re-render (e.g. a language switch) that recreates these elements.
export function bindCursorHoverTargets() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  const hoverTargets = 'a, button, .project-card, .skill-tag, .about-card, .contact-link-item, .edu-item, .timeline-item';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('hovering');
      ring.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('hovering');
      ring.classList.remove('hovering');
    });
  });
}

export function initProjectCards() {
  // Mouse-tracking glow on project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    });
  });
}