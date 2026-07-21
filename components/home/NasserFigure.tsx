"use client";

import { useState } from "react";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { NASSER } from "@/lib/content";

type NasserFigureProps = {
  /** Slow idle breathing motion (neutralized under reduced motion via CSS). */
  breathe?: boolean;
  /** Extra classes for the outer frame (sizing, rounding). */
  className?: string;
  priority?: boolean;
};

/**
 * Nasser presented chest-up with the face top-anchored so the crop always
 * protects facial fidelity (the source render's body is intentionally simple).
 * The charcoal backdrop + bottom fade dissolve him into the page's black.
 * If the production render (public/nasser.png) isn't present yet, an elegant
 * placeholder keeps the layout intact — swap one file to go live.
 */
export default function NasserFigure({
  breathe = false,
  className = "",
  priority = false,
}: NasserFigureProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-mist/10 bg-charcoal ${className}`}
    >
      {/* Charcoal marble-style base + subtle grid, echoing the demo backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-black" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.12]" />
      {/* Warm accent light from the left, matching the source lighting */}
      <div className="pointer-events-none absolute -left-16 top-1/4 h-56 w-56 rounded-full bg-accent/15 blur-[80px]" />

      <div className={`relative h-full w-full ${breathe ? "nasser-breathe" : ""}`}>
        {!failed ? (
          <Image
            src={NASSER.image}
            alt={`${NASSER.name} — ${NASSER.role}`}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-top"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
            <UserRound
              size={96}
              strokeWidth={1}
              className="text-mist/20"
            />
            <div>
              <p className="font-display text-lg font-semibold text-mist/70">
                {NASSER.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-mist/35">
                {NASSER.role}
              </p>
            </div>
            <p className="mt-2 max-w-[16rem] text-[0.7rem] leading-relaxed text-mist/25">
              Add the render at <span className="text-accent/60">public/nasser.png</span> to go live.
            </p>
          </div>
        )}
      </div>

      {/* Bottom + edge fades so the figure blends into the page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-mist/5" />
    </div>
  );
}
