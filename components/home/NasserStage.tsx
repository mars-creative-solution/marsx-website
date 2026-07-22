"use client";

import OrbitRings from "./OrbitRings";
import ParticleField from "./ParticleField";
import HoloHud from "./HoloHud";
import Nameplate from "./Nameplate";
import NasserFigure from "./NasserFigure";

type NasserStageProps = {
  /** Sizing classes for the stage (e.g. aspect / height). */
  className?: string;
  priority?: boolean;
  /** Show the faint bilingual interface tokens. */
  hud?: boolean;
  /** Show the Mars-inspired orbit rings behind Nasser. */
  orbit?: boolean;
  /** Show the gallery-style ambassador nameplate at the base. */
  nameplate?: boolean;
  /** Max particle count (scaled down on small screens inside ParticleField). */
  particleCount?: number;
};

/**
 * "Holographic Ambassador" composition — Nasser resolving out of the dark.
 * Layered back-to-front for volumetric depth, all blending on black with no
 * box/panel/border:
 *   key light → orbit rings → particles → Nasser (holo rim) → HUD → nameplate.
 * Every ambient layer is a whisper so the whole reads as one living system
 * (enterprise-restrained, not busy). Asset-agnostic.
 */
export default function NasserStage({
  className = "",
  priority = false,
  hud = true,
  orbit = true,
  nameplate = false,
  particleCount = 34,
}: NasserStageProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Volumetric key light Nasser emerges from */}
      <div className="holo-keylight pointer-events-none absolute left-1/2 top-[38%] h-[78%] w-[62%] rounded-full bg-accent/10 blur-[120px]" />

      {/* Mars-inspired orbit rings */}
      {orbit && <OrbitRings />}

      {/* Particles converging into him */}
      <ParticleField count={particleCount} />

      {/* Nasser — a still portrait with a soft silhouette rim. No idle motion;
          all movement lives in the environment layers around him. Internal glow
          off; the stage's key light provides the depth light. */}
      <NasserFigure
        hologram
        glow={false}
        priority={priority}
        className="relative h-full w-full"
      />

      {/* Faint bilingual interface tokens ringing the perimeter */}
      {hud && <HoloHud />}

      {/* Ambassador nameplate at the base */}
      {nameplate && (
        <Nameplate className="absolute bottom-6 left-1/2 -translate-x-1/2" />
      )}
    </div>
  );
}
