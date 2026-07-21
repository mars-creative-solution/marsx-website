"use client";

import { useState } from "react";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { NASSER } from "@/lib/content";

type NasserFigureProps = {
  /** Inner breath: vertical rise + micro-scale. */
  breathe?: boolean;
  /** Outer drift: slow lateral sway + sub-degree rotation, for depth. */
  drift?: boolean;
  /** Holographic rim glow on the silhouette + a faint scan drifting down. */
  hologram?: boolean;
  /** Internal soft radial light. Off when a parent (the stage) provides its own. */
  glow?: boolean;
  /** Extra classes for the outer container (sizing). */
  className?: string;
  priority?: boolean;
};

/**
 * Nasser, presented with NO card or frame — he blends directly into the page.
 * A soft radial light sits behind him for depth and a bottom gradient dissolves
 * him into the black background. Designed for a clean cut-out render (only
 * Nasser, transparent, no marble wall / no mobile UI); a temporary placeholder
 * asset simply sits inside the same composition until that render is dropped in.
 * Swapping the still for a looping <video> later is a one-element change.
 */
export default function NasserFigure({
  breathe = false,
  drift = false,
  hologram = false,
  glow = true,
  className = "",
  priority = false,
}: NasserFigureProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Soft radial light for depth — no card, dissolves into the page */}
      {glow && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px] animate-drift" />
      )}

      {/* Outer drift layer */}
      <div className={`relative h-full w-full ${drift ? "nasser-drift" : ""}`}>
        {/* Inner breath layer */}
        <div className={`relative h-full w-full ${breathe ? "nasser-breathe" : ""}`}>
          {!failed ? (
            <Image
              src={NASSER.image}
              alt={`${NASSER.name} — ${NASSER.role}`}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 90vw, 45vw"
              className={`object-contain object-bottom ${
                hologram
                  ? "[filter:drop-shadow(0_0_30px_rgba(255,90,0,0.22))_drop-shadow(0_0_70px_rgba(255,90,0,0.12))]"
                  : ""
              }`}
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
              <UserRound size={104} strokeWidth={1} className="text-mist/15" />
              <div>
                <p className="font-display text-lg font-semibold text-mist/60">
                  {NASSER.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-mist/30">
                  {NASSER.role}
                </p>
              </div>
              <p className="mt-2 max-w-[16rem] text-[0.7rem] leading-relaxed text-mist/20">
                Temporary placeholder — add the clean render at{" "}
                <span className="text-accent/50">public/nasser.png</span>.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Faint holographic scan drifting down the form */}
      {hologram && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="holo-scan absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
        </div>
      )}

      {/* Bottom dissolve into the page background — no hard edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>
  );
}
