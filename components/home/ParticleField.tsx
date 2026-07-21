"use client";

import { useEffect, useRef } from "react";

type ParticleFieldProps = {
  /** Max simultaneous particles (scaled down on small screens). */
  count?: number;
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  trail: number;
};

/**
 * Soft orange motes drifting slowly upward/inward, as if Nasser is materializing
 * from light. Canvas + rAF for smoothness where dozens of animated DOM nodes
 * would jank. Restrained by design: additive blending, low opacity, and a face
 * safe-zone where particles fade out so his features stay clear.
 *
 * Guardrails: disabled entirely under prefers-reduced-motion; paused when
 * offscreen (IntersectionObserver) or when the tab is hidden; DPR-aware; cleaned
 * up on unmount. Purely decorative (aria-hidden) and asset-agnostic — it layers
 * behind Nasser regardless of whether he's an image or a future looping video.
 */
export default function ParticleField({ count = 46, className = "" }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // no ambient motion for reduced-motion users

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const density = window.innerWidth < 640 ? Math.round(count * 0.45) : count;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let particles: Particle[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const spawn = (initial = false): Particle => ({
      x: rand(width * 0.12, width * 0.88),
      y: initial ? rand(0, height) : rand(height * 0.6, height * 1.05),
      r: rand(0.5, 1.7),
      vx: rand(-0.05, 0.05),
      vy: rand(-0.16, -0.04),
      life: 0,
      maxLife: rand(8, 16) * 60,
      // No light-streaks — quiet ambient dust reads premium, not sci-fi/gaming.
      trail: 0,
    });

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;

        const t = Math.min(p.life / p.maxLife, 1);
        const fade = Math.sin(t * Math.PI); // ease in then out over the lifespan

        // Fade out inside the face safe-zone (upper-center) so features stay clear
        const nx = p.x / width;
        const ny = p.y / height;
        const inFace = ny > 0.1 && ny < 0.48 && nx > 0.28 && nx < 0.72;
        const alpha = 0.32 * fade * (inFace ? 0.22 : 1);

        if (p.trail > 0) {
          const grd = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.trail);
          grd.addColorStop(0, `rgba(255,140,60,${alpha})`);
          grd.addColorStop(1, "rgba(255,90,0,0)");
          ctx.strokeStyle = grd;
          ctx.lineWidth = p.r;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.trail);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,110,20,${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -20) Object.assign(p, spawn());
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    particles = Array.from({ length: density }, () => spawn(true));

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
