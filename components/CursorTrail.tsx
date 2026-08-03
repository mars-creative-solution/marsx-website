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
 * A small glowing Mars orb replaces the cursor site-wide, trailing a fading
 * scatter of stars behind it as it moves — a lightweight brand touch, not a
 * gimmick. Canvas + rAF (see ParticleField for the same pattern).
 *
 * Guardrails: only on fine-pointer devices with a real mouse (never touch);
 * off entirely under prefers-reduced-motion; the native cursor is restored
 * automatically on unmount so this can never get "stuck" hidden.
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

    document.documentElement.classList.add("cursor-trail-active");

    // Target = real mouse position; head = the drawn orb, eased toward the
    // target so it feels like a small trailing body, not a 1:1 cursor swap.
    let targetX = width / 2;
    let targetY = height / 2;
    let headX = targetX;
    let headY = targetY;
    let visible = false;
    let lastSpawnX = targetX;
    let lastSpawnY = targetY;
    let stars: Star[] = [];
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      visible = true;
    };
    const onLeave = () => (visible = false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const draw = () => {
      headX += (targetX - headX) * 0.22;
      headY += (targetY - headY) * 0.22;

      // Spawn a star every few pixels of travel, not every frame.
      const d = Math.hypot(headX - lastSpawnX, headY - lastSpawnY);
      if (visible && d > 10) {
        lastSpawnX = headX;
        lastSpawnY = headY;
        stars.push({
          x: headX + rand(-4, 4),
          y: headY + rand(-4, 4),
          r: rand(1, 2.4),
          life: 0,
          maxLife: rand(24, 40),
          twinkle: Math.random() < 0.25,
        });
        if (stars.length > 60) stars.splice(0, stars.length - 60);
      }

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

      if (visible) {
        // Soft outer glow, then the Mars orb itself (warm rim, darker core).
        const glow = ctx.createRadialGradient(
          headX,
          headY,
          0,
          headX,
          headY,
          16,
        );
        glow.addColorStop(0, "rgba(255,90,0,0.35)");
        glow.addColorStop(1, "rgba(255,90,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(headX, headY, 16, 0, Math.PI * 2);
        ctx.fill();

        const orb = ctx.createRadialGradient(
          headX - 2,
          headY - 2,
          0.5,
          headX,
          headY,
          6.5,
        );
        orb.addColorStop(0, "#ffb37a");
        orb.addColorStop(0.45, "#ff5a00");
        orb.addColorStop(1, "#8a2a00");
        ctx.fillStyle = orb;
        ctx.beginPath();
        ctx.arc(headX, headY, 6.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("cursor-trail-active");
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}
