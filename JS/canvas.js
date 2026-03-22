/* ═══════════════════════════════════════════
   js/canvas.js — Network node background
═══════════════════════════════════════════ */

export function initCanvas(canvasEl) {
  const ctx  = canvasEl.getContext('2d');
  let W, H, nodes, raf;

  const COLORS = ['#b49dff', '#f4a7c0', '#c8deff'];
  const COUNT  = 60;

  class Dot {
    constructor() { this.reset(true); }

    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 1.5 + 0.5;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }

    draw() {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function resize() {
    W = canvasEl.width  = window.innerWidth;
    H = canvasEl.height = window.innerHeight;
    nodes = Array.from({ length: COUNT }, () => new Dot());
  }

  function drawEdges() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx   = nodes[i].x - nodes[j].x;
        const dy   = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.globalAlpha = (1 - dist / 130) * 0.12;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = '#b49dff';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawEdges();
    nodes.forEach(n => { n.update(); n.draw(); });
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(loop);
  }

  resize();
  loop();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    loop();
  });
}