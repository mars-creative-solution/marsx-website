"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  life: number;
  maxLife: number;
  twinkle: boolean;
};

/**
 * A fading scatter of stars trails the real cursor as it moves — purely
 * decorative, layered behind the page (pointer-events-none, native cursor
 * untouched throughout) so it can never affect clicking. Canvas + rAF (see
 * ParticleField for the same pattern).
 *
 * Guardrails: only on fine-pointer devices with a real mouse (never touch);
 * off entirely under prefers-reduced-motion.
 */
export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reduceMotion) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let lastX = -1;
    let lastY = -1;
    let stars: Star[] = [];
    let raf = 0;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const onMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const d = lastX < 0 ? 999 : Math.hypot(x - lastX, y - lastY);
      // Spawn every few pixels of real travel, not every event.
      if (d > 8) {
        lastX = x;
        lastY = y;
        stars.push({
          x: x + rand(-3, 3),
          y: y + rand(-3, 3),
          r: rand(1, 2.4),
          life: 0,
          maxLife: rand(24, 40),
          twinkle: Math.random() < 0.25,
        });
        if (stars.length > 80) stars.splice(0, stars.length - 80);
      }
    };
    window.addEventListener("pointermove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      stars = stars.filter((s) => s.life < s.maxLife);
      for (const s of stars) {
        s.life += 1;
        const t = s.life / s.maxLife;
        const alpha = (1 - t) * 0.75;
        const r = s.r * (1 - t * 0.5);
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 3);
        grd.addColorStop(0, `rgba(255,220,180,${alpha})`);
        grd.addColorStop(1, "rgba(255,90,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * 3, 0, Math.PI * 2);
        ctx.fill();
        if (s.twinkle) {
          ctx.strokeStyle = `rgba(255,240,220,${alpha * 0.8})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(s.x - r * 2.2, s.y);
          ctx.lineTo(s.x + r * 2.2, s.y);
          ctx.moveTo(s.x, s.y - r * 2.2);
          ctx.lineTo(s.x, s.y + r * 2.2);
          ctx.stroke();
        }
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}
