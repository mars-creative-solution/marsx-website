/**
 * Premium monochrome line-art for each Deploy Anywhere tile — sits softly
 * behind the card text so a visitor recognizes the device/surface before
 * reading the label. Redesigned to be literal, iconic pictograms (a browser,
 * a phone, a laptop, a projector beam...) rather than illustrated scenes —
 * clarity over abstraction. Pure stroke-based (no fill, no photos), inheriting
 * a single `currentColor` so each card can tint/size it via className. viewBox
 * is a consistent 0 0 200 200 so illustrations scale cleanly at any tile size.
 */

import type { ReactElement } from "react";

type ArtProps = { className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Holograms({ className }: ArtProps) {
  // Classic hologram glyph: a base platform, an upward light cone, and
  // horizontal scan rings crossing it.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <ellipse cx={100} cy={166} rx={56} ry={12} {...S} />
      <path d="M64 166 L92 54" {...S} />
      <path d="M136 166 L108 54" {...S} />
      <ellipse cx={100} cy={54} rx={16} ry={5} {...S} />
      <ellipse cx={100} cy={100} rx={34} ry={8} strokeOpacity={0.6} {...S} />
      <ellipse cx={100} cy={132} rx={45} ry={10} strokeOpacity={0.6} {...S} />
    </svg>
  );
}

function Websites({ className }: ArtProps) {
  // A browser window: chrome bar with traffic-light dots + address bar.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={26} y={48} width={148} height={104} rx={8} {...S} />
      <line x1={26} y1={76} x2={174} y2={76} {...S} />
      <circle cx={44} cy={62} r={4} fill="currentColor" stroke="none" />
      <circle cx={58} cy={62} r={4} fill="currentColor" stroke="none" />
      <circle cx={72} cy={62} r={4} fill="currentColor" stroke="none" />
      <line x1={46} y1={102} x2={154} y2={102} strokeOpacity={0.6} {...S} />
      <line x1={46} y1={122} x2={126} y2={122} strokeOpacity={0.6} {...S} />
    </svg>
  );
}

function MobileApps({ className }: ArtProps) {
  // A phone: tall rounded rectangle, top speaker notch, bottom home indicator.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={68} y={22} width={64} height={156} rx={16} {...S} />
      <line x1={90} y1={38} x2={110} y2={38} {...S} />
      <line x1={88} y1={164} x2={112} y2={164} {...S} />
    </svg>
  );
}

function Tablets({ className }: ArtProps) {
  // A tablet: wider rounded rectangle, top camera dot, bottom circular home
  // button — distinct silhouette from the phone.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={48} y={30} width={104} height={140} rx={12} {...S} />
      <circle cx={100} cy={44} r={2.5} fill="currentColor" stroke="none" />
      <circle cx={100} cy={156} r={9} {...S} />
    </svg>
  );
}

function Laptops({ className }: ArtProps) {
  // An open laptop: screen rectangle hinged to a wider flat keyboard deck.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={62} y={40} width={76} height={92} rx={4} {...S} />
      <path d="M36 158 L164 158 L150 132 L50 132 Z" {...S} />
    </svg>
  );
}

function Kiosks({ className }: ArtProps) {
  // A freestanding kiosk: a screen mounted on a slim pole with a flat base.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={58} y={26} width={84} height={92} rx={6} {...S} />
      <line x1={78} y1={46} x2={122} y2={46} strokeOpacity={0.6} {...S} />
      <line x1={100} y1={118} x2={100} y2={156} {...S} />
      <line x1={70} y1={172} x2={130} y2={172} {...S} />
    </svg>
  );
}

function TouchScreens({ className }: ArtProps) {
  // A screen frame with a fingertip mid-tap and a ripple ring.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={30} y={30} width={140} height={100} rx={8} {...S} />
      <circle cx={110} cy={80} r={22} strokeOpacity={0.5} {...S} />
      <path d="M110 154 L110 178" {...S} />
      <path d="M110 178 L96 166" {...S} />
      <path d="M110 178 L124 166" {...S} />
    </svg>
  );
}

function LedWalls({ className }: ArtProps) {
  // A modular video wall: a grid of panels with a small figure for scale.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={20} y={26} width={160} height={96} rx={4} {...S} />
      <line x1={60} y1={26} x2={60} y2={122} {...S} />
      <line x1={100} y1={26} x2={100} y2={122} {...S} />
      <line x1={140} y1={26} x2={140} y2={122} {...S} />
      <line x1={20} y1={74} x2={180} y2={74} {...S} />
      <circle cx={100} cy={148} r={10} {...S} />
      <path d="M84 176 Q100 154 116 176" {...S} />
    </svg>
  );
}

function Projectors({ className }: ArtProps) {
  // A projector body with a lens and an expanding beam of light.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={30} y={80} width={70} height={40} rx={8} {...S} />
      <circle cx={100} cy={100} r={16} {...S} />
      <path d="M116 84 L172 56" strokeOpacity={0.7} {...S} />
      <path d="M116 116 L172 144" strokeOpacity={0.7} {...S} />
      <line x1={172} y1={56} x2={172} y2={144} strokeOpacity={0.4} {...S} />
    </svg>
  );
}

const ART: Record<string, (props: ArtProps) => ReactElement> = {
  holograms: Holograms,
  websites: Websites,
  "mobile-apps": MobileApps,
  tablets: Tablets,
  laptops: Laptops,
  kiosks: Kiosks,
  "touch-screens": TouchScreens,
  "led-walls": LedWalls,
  projectors: Projectors,
};

export default function DeploymentArt({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const Art = ART[id];
  if (!Art) return null;
  return <Art className={className} />;
}
