"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { DEPLOYMENT_OPTIONS } from "@/lib/content";
import DeploymentArt from "./DeploymentArt";

const INTERVAL_MS = 2600;

/**
 * A single frame cycling through every deployment surface one at a time —
 * replaces a grid of per-card icons with one animated showcase, so the
 * "one AI human, every screen" idea reads as a sequence rather than a
 * static wall of illustrations. Auto-advances; pauses under
 * prefers-reduced-motion (shows the first frame only, no cycling).
 */
export default function DeploymentShowcase() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DEPLOYMENT_OPTIONS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const current = DEPLOYMENT_OPTIONS[index];

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center">
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-mist/10 bg-mist/[0.02]">
        <div className="pointer-events-none absolute inset-0 grid-overlay noise-mask opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[70px]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative z-10 flex flex-col items-center gap-5 px-8 text-center"
          >
            <DeploymentArt
              id={current.id}
              className="h-28 w-28 text-accent/80 sm:h-32 sm:w-32"
            />
            <span className="font-display text-lg font-semibold text-mist">
              {current.title}
            </span>
            <p className="max-w-[16rem] text-sm leading-relaxed text-mist/50">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots — also directly clickable so the sequence isn't only
          a passive loop. */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {DEPLOYMENT_OPTIONS.map((opt, i) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${opt.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-accent" : "w-1.5 bg-mist/20 hover:bg-mist/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
