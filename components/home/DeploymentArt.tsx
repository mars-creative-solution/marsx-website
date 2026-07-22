/**
 * Premium monochrome line-art for each Deploy Anywhere tile — sits softly
 * behind the card text so a visitor recognizes the scenario before reading the
 * label. Pure stroke-based illustrations (no fill, no photos), inheriting a
 * single `currentColor` so each card can tint it via a low-opacity text color
 * class (kept low-contrast/secondary per the brief). viewBox is a consistent
 * 0 0 200 200 so illustrations scale cleanly at any tile size.
 */

import type { ReactElement } from "react";

type ArtProps = { className?: string };

const commonStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Holograms({ className }: ArtProps) {
  // A holographic podium: a light cone rising from a platform, faint
  // projection rings, and a hint of a standing figure at the center.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <ellipse cx={100} cy={168} rx={54} ry={10} {...commonStroke} />
      <path d="M62 168 L86 66" {...commonStroke} />
      <path d="M138 168 L114 66" {...commonStroke} />
      <ellipse cx={100} cy={66} rx={24} ry={7} {...commonStroke} />
      <ellipse cx={100} cy={112} rx={38} ry={9} strokeOpacity={0.5} {...commonStroke} />
      <path d="M90 150 Q100 96 110 150" {...commonStroke} strokeOpacity={0.7} />
      <circle cx={100} cy={80} r={7} {...commonStroke} />
    </svg>
  );
}

function Museums({ className }: ArtProps) {
  // A framed artwork on the wall beside a plinth with a digital guide screen.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <line x1={20} y1={172} x2={180} y2={172} {...commonStroke} />
      <rect x={34} y={44} width={62} height={80} rx={2} {...commonStroke} />
      <path d="M46 104 L66 78 L82 96 L96 74" strokeOpacity={0.6} {...commonStroke} />
      <circle cx={80} cy={60} r={6} strokeOpacity={0.6} {...commonStroke} />
      <rect x={128} y={110} width={38} height={62} rx={2} {...commonStroke} />
      <rect x={136} y={122} width={22} height={30} rx={2} strokeOpacity={0.6} {...commonStroke} />
    </svg>
  );
}

function Exhibitions({ className }: ArtProps) {
  // An exhibition booth: an angled canopy over a backdrop panel and counter.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path d="M36 76 L100 40 L164 76" {...commonStroke} />
      <line x1={100} y1={40} x2={100} y2={22} {...commonStroke} />
      <rect x={54} y={76} width={92} height={62} rx={2} strokeOpacity={0.6} {...commonStroke} />
      <rect x={40} y={138} width={120} height={30} rx={2} {...commonStroke} />
      <line x1={70} y1={138} x2={70} y2={168} strokeOpacity={0.5} {...commonStroke} />
      <line x1={130} y1={138} x2={130} y2={168} strokeOpacity={0.5} {...commonStroke} />
    </svg>
  );
}

function Websites({ className }: ArtProps) {
  // A browser window with traffic-light dots, an address bar, and content lines.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={28} y={46} width={144} height={108} rx={8} {...commonStroke} />
      <line x1={28} y1={72} x2={172} y2={72} {...commonStroke} />
      <circle cx={44} cy={59} r={3.5} {...commonStroke} />
      <circle cx={56} cy={59} r={3.5} {...commonStroke} />
      <circle cx={68} cy={59} r={3.5} {...commonStroke} />
      <rect x={86} y={54} width={70} height={10} rx={5} strokeOpacity={0.5} {...commonStroke} />
      <line x1={46} y1={92} x2={154} y2={92} strokeOpacity={0.6} {...commonStroke} />
      <line x1={46} y1={110} x2={130} y2={110} strokeOpacity={0.6} {...commonStroke} />
      <line x1={46} y1={128} x2={140} y2={128} strokeOpacity={0.6} {...commonStroke} />
    </svg>
  );
}

function MobileApps({ className }: ArtProps) {
  // A smartphone frame with a speaker notch, screen content lines, and a home bar.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={64} y={26} width={72} height={148} rx={14} {...commonStroke} />
      <line x1={88} y1={40} x2={112} y2={40} strokeOpacity={0.6} {...commonStroke} />
      <rect x={78} y={62} width={44} height={44} rx={6} strokeOpacity={0.6} {...commonStroke} />
      <line x1={78} y1={122} x2={122} y2={122} strokeOpacity={0.5} {...commonStroke} />
      <line x1={78} y1={134} x2={110} y2={134} strokeOpacity={0.5} {...commonStroke} />
      <line x1={88} y1={160} x2={112} y2={160} {...commonStroke} />
    </svg>
  );
}

function Kiosks({ className }: ArtProps) {
  // A freestanding kiosk: a screen at eye level on a slim stand with a base.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={62} y={38} width={76} height={86} rx={6} {...commonStroke} />
      <line x1={78} y1={58} x2={122} y2={58} strokeOpacity={0.5} {...commonStroke} />
      <line x1={78} y1={72} x2={110} y2={72} strokeOpacity={0.5} {...commonStroke} />
      <line x1={100} y1={124} x2={100} y2={160} {...commonStroke} />
      <ellipse cx={100} cy={168} rx={36} ry={8} {...commonStroke} />
    </svg>
  );
}

function TouchScreens({ className }: ArtProps) {
  // A screen with a fingertip mid-tap and ripple rings.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={34} y={40} width={132} height={98} rx={8} {...commonStroke} />
      <circle cx={112} cy={92} r={14} strokeOpacity={0.45} {...commonStroke} />
      <circle cx={112} cy={92} r={24} strokeOpacity={0.25} {...commonStroke} />
      <path d="M112 150 L112 176 M112 176 L100 164 M112 176 L124 164" {...commonStroke} />
    </svg>
  );
}

function LedWalls({ className }: ArtProps) {
  // A tiled panel wall (grid of LED modules) with a small figure for scale.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <rect x={24} y={30} width={152} height={92} rx={4} {...commonStroke} />
      <line x1={62} y1={30} x2={62} y2={122} strokeOpacity={0.4} {...commonStroke} />
      <line x1={100} y1={30} x2={100} y2={122} strokeOpacity={0.4} {...commonStroke} />
      <line x1={138} y1={30} x2={138} y2={122} strokeOpacity={0.4} {...commonStroke} />
      <line x1={24} y1={76} x2={176} y2={76} strokeOpacity={0.4} {...commonStroke} />
      <circle cx={100} cy={146} r={9} strokeOpacity={0.6} {...commonStroke} />
      <path d="M84 174 Q100 152 116 174" strokeOpacity={0.6} {...commonStroke} />
    </svg>
  );
}

const ART: Record<string, (props: ArtProps) => ReactElement> = {
  holograms: Holograms,
  museums: Museums,
  exhibitions: Exhibitions,
  websites: Websites,
  "mobile-apps": MobileApps,
  kiosks: Kiosks,
  "touch-screens": TouchScreens,
  "led-walls": LedWalls,
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
