import { useEffect, useRef } from 'react';


export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // // At the top of the useEffect, add:
    // const isMobile = window.innerWidth < 768;
    // if (isMobile) return; // skip canvas on mobile

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let nodes = [];
    let rings = [];
    let mouse = { x: -9999, y: -9999 };
    let rafId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      // Nodes
      const N = 80;
      nodes = Array.from({ length: N }, () => {
        const rand = Math.random();
        const color = rand > 0.82 ? '#ff6b35' : rand > 0.6 ? '#7c3aed' : '#0025cc';
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: 1.8 + Math.random() * 3,
          color,
          pulse: Math.random() * Math.PI * 2,
          ps: 0.018 + Math.random() * 0.022,
          glowMul: 5 + Math.random() * 6,
        };
      });

      // Floating rings — decorative expanding circles
      rings = Array.from({ length: 6 }, (_, i) => ({
        x: (0.15 + i * 0.16) * canvas.width,
        y: (0.2 + Math.random() * 0.6) * canvas.height,
        r: 40 + Math.random() * 80,
        maxR: 120 + Math.random() * 160,
        speed: 0.3 + Math.random() * 0.4,
        alpha: 0,
        color: i % 2 === 0 ? '#0025cc' : '#ff6b35',
      }));
    };

    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // ── Grid lines (subtle) ──────────────────────────────────
      ctx.save();
      const gridSize = 80;
      ctx.strokeStyle = 'rgba(0,37,204,0.025)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      ctx.restore();

      // ── Floating rings ───────────────────────────────────────
      for (const ring of rings) {
        ring.r += ring.speed;
        ring.alpha = ring.r < ring.maxR * 0.5
          ? ring.r / (ring.maxR * 0.5) * 0.18
          : (1 - (ring.r - ring.maxR * 0.5) / (ring.maxR * 0.5)) * 0.18;
        if (ring.r > ring.maxR) {
          ring.r = 40 + Math.random() * 40;
          ring.x = Math.random() * W;
          ring.y = Math.random() * H;
        }
        const rgb = hexToRgb(ring.color);
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb},${ring.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // inner ring
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb},${ring.alpha * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // ── Connections ──────────────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 170) {
            const alpha = (1 - d / 170) * 0.25;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(${hexToRgb(a.color)},${alpha})`);
            grad.addColorStop(1, `rgba(${hexToRgb(b.color)},${alpha})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.7 + alpha;
            ctx.stroke();
          }
        }
      }

      // ── Nodes ────────────────────────────────────────────────
      for (const n of nodes) {
        n.pulse += n.ps;
        const pf = 1 + Math.sin(n.pulse) * 0.35;
        const r = n.r * pf;
        const rgb = hexToRgb(n.color);

        // outer glow
        const og = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * n.glowMul);
        og.addColorStop(0, `rgba(${rgb},0.12)`);
        og.addColorStop(0.4, `rgba(${rgb},0.07)`);
        og.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath(); ctx.arc(n.x, n.y, r * n.glowMul, 0, Math.PI * 2);
        ctx.fillStyle = og; ctx.fill();

        // mid glow
        const mg = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 2.5);
        mg.addColorStop(0, `rgba(${rgb},0.65)`);
        mg.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath(); ctx.arc(n.x, n.y, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = mg; ctx.fill();

        // core
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},0.95)`; ctx.fill();

        // specular
        ctx.beginPath(); ctx.arc(n.x - r * 0.3, n.y - r * 0.3, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.fill();

        // mouse repulsion
        const mdx = n.x - mouse.x, mdy = n.y - mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 130 && md > 0) {
          const force = (130 - md) / 130 * 1.1;
          n.vx += (mdx / md) * force;
          n.vy += (mdy / md) * force;
        }

        n.vx *= 0.986; n.vy *= 0.986;
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (speed > 2.2) { n.vx = (n.vx / speed) * 2.2; n.vy = (n.vy / speed) * 2.2; }

        n.x += n.vx; n.y += n.vy;
        if (n.x < 20) { n.x = 20; n.vx = Math.abs(n.vx); }
        if (n.x > W - 20) { n.x = W - 20; n.vx = -Math.abs(n.vx); }
        if (n.y < 20) { n.y = 20; n.vy = Math.abs(n.vy); }
        if (n.y > H - 20) { n.y = H - 20; n.vy = -Math.abs(n.vy); }
      }

      rafId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    resize(); init(); draw();

    const handleResize = () => { resize(); init(); };
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (

    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        zIndex: 0, width: '100%', height: '100%',
        opacity: 0.35,  // ← was 1, bring it down
      }}
    />
  );
}

