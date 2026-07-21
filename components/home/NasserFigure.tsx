"use client";

import { useState } from "react";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { NASSER, type NasserMedia } from "@/lib/content";

type NasserFigureProps = {
  /** Inner breath: vertical rise + micro-scale. */
  breathe?: boolean;
  /** Outer drift: slow lateral sway + sub-degree rotation, for depth. */
  drift?: boolean;
  /** Soft accent rim glow tracing the silhouette. */
  hologram?: boolean;
  /** Internal soft radial light. Off when a parent (the stage) provides its own. */
  glow?: boolean;
  /** Pluggable media + identity. Defaults to Nasser so existing usages are unchanged. */
  media?: NasserMedia;
  name?: string;
  role?: string;
  /** Extra classes for the outer container (sizing). */
  className?: string;
  priority?: boolean;
};

// Feathers all four edges a few percent into transparency, dissolving any hard
// or light seam on the source asset (e.g. a matte fringe on a cut-out render)
// and reinforcing the "emerging from the dark" look.
const EDGE_MASK =
  "radial-gradient(128% 124% at 50% 42%, #000 84%, transparent 100%)";
const maskStyle = { maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK } as const;

/**
 * An avatar figure presented with NO card or frame — it blends directly into the
 * page via a soft radial light, an edge-feather mask, and a bottom gradient.
 *
 * Media is pluggable (see NasserMedia): a looping <video> takes priority when
 * set, otherwise a transparent <Image>, otherwise an elegant placeholder — so a
 * transparent PNG or an Unreal loop drops in with no code change. Defaults to
 * Nasser; pass `media`/`name`/`role` to reuse it for any ambassador. The asset
 * must be background-free (transparent, or solid-black with `blendBlackBackground`).
 */
export default function NasserFigure({
  breathe = false,
  drift = false,
  hologram = false,
  glow = true,
  media = NASSER.media,
  name = NASSER.name,
  role = NASSER.role,
  className = "",
  priority = false,
}: NasserFigureProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

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
              style={maskStyle}
              className={`absolute inset-0 h-full w-full ${mediaClass}`}
            >
              <source src={media.video} />
            </video>
          ) : useImage ? (
            <Image
              src={media.image}
              alt={`${name} — ${role}`}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 90vw, 45vw"
              style={maskStyle}
              className={mediaClass}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
              <UserRound size={96} strokeWidth={1} className="text-mist/15" />
              <div>
                <p className="font-display text-lg font-semibold text-mist/60">
                  {name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-mist/30">
                  {role}
                </p>
              </div>
              <p className="mt-2 max-w-[16rem] text-[0.7rem] leading-relaxed text-mist/20">
                Temporary placeholder — add a transparent render at{" "}
                <span className="text-accent/50">public{media.image}</span>.
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
