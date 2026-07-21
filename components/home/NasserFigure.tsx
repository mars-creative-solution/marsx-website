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
  /** Soft accent rim glow tracing the silhouette. */
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
 * him into the black background.
 *
 * Media is pluggable (see NASSER.media): a looping <video> takes priority when
 * set, otherwise a transparent <Image>, otherwise an elegant placeholder — so a
 * transparent PNG or an Unreal loop drops in with no code change. The asset must
 * be background-free (transparent, or solid-black with `blendBlackBackground`);
 * CSS cannot remove a baked-in environment.
 */
export default function NasserFigure({
  breathe = false,
  drift = false,
  hologram = false,
  glow = true,
  className = "",
  priority = false,
}: NasserFigureProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const { media } = NASSER;
  // Only mount real media once the asset is marked available — avoids 404s and
  // console noise while designing on the placeholder.
  const useVideo = media.available && Boolean(media.video) && !videoFailed;
  const useImage = media.available && !media.video && !imageFailed;

  // Shared visual treatment so video and still look identical.
  const blendClass = media.blendBlackBackground ? "mix-blend-screen" : "";
  const holoFilter = hologram
    ? "[filter:drop-shadow(0_0_30px_rgba(255,90,0,0.22))_drop-shadow(0_0_70px_rgba(255,90,0,0.12))]"
    : "";
  const mediaClass = `object-contain object-bottom ${blendClass} ${holoFilter}`;

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
          {useVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
              className={`absolute inset-0 h-full w-full ${mediaClass}`}
            >
              <source src={media.video} />
            </video>
          ) : useImage ? (
            <Image
              src={media.image}
              alt={`${NASSER.name} — ${NASSER.role}`}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 90vw, 45vw"
              className={mediaClass}
              onError={() => setImageFailed(true)}
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
                Temporary placeholder — add a transparent render at{" "}
                <span className="text-accent/50">public/nasser.png</span> or set{" "}
                <span className="text-accent/50">NASSER.media.video</span>.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom dissolve into the page background — no hard edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>
  );
}
