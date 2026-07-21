"use client";

import ParticleField from "./ParticleField";
import HoloHud from "./HoloHud";
import NasserFigure from "./NasserFigure";

type NasserStageProps = {
  /** Sizing classes for the stage (e.g. aspect / height). */
  className?: string;
  priority?: boolean;
  /** Show the faint bilingual interface tokens. */
  hud?: boolean;
  /** Max particle count (scaled down on small screens inside ParticleField). */
  particleCount?: number;
};

/**
 * "Holographic Ambassador" composition — Nasser resolving out of the dark.
 * Layered back-to-front for volumetric depth, all blending on black with no
 * box/panel/border:
 *   volumetric key light → particle field → Nasser (holo rim) → bilingual HUD.
 * Asset-agnostic: the effects layer around Nasser regardless of whether he's the
 * placeholder, a final cut-out render, or a looping video.
 */
export default function NasserStage({
  className = "",
  priority = false,
  hud = true,
  particleCount = 46,
}: NasserStageProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Volumetric key light Nasser emerges from */}
      <div className="holo-keylight pointer-events-none absolute left-1/2 top-[38%] h-[78%] w-[62%] rounded-full bg-accent/10 blur-[120px]" />

      {/* Particles converging into him */}
      <ParticleField count={particleCount} />

      {/* Nasser — natural-skinned anchor with a holographic silhouette rim.
          Internal glow off; the stage's key light provides the depth light. */}
      <NasserFigure
        breathe
        drift
        hologram
        glow={false}
        priority={priority}
        className="relative h-full w-full"
      />

      {/* Faint bilingual interface tokens ringing the perimeter */}
      {hud && <HoloHud />}
    </div>
  );
}
