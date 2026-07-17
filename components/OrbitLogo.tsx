"use client";

import { useReducedMotion } from "framer-motion";

/**
 * OrbitLogo — exact vector recreation of the official MarsX mark.
 *
 * The path data below was produced by tracing public/logo-icon.png
 * (boundary trace + Douglas–Peucker simplification), NOT drawn by hand:
 *   - X_PATHS: the four quadrilateral arms of the X (flat cuts + centre notch).
 *   - RING_PATHS: the two circular arcs of the orbit ring (incl. the taper).
 *   - DOT: the orbiting node.
 * Geometry is in the source asset's native pixel space. The ring + dot rotate
 * as one rigid unit about the exact fitted circle centre (CSS animation with
 * transform-box: view-box, so the pivot is exact), so a paused frame is
 * pixel-identical to the official asset; the X never moves.
 */

const VIEWBOX = "314.2 307.7 620 620";
const CENTER = { x: 624.21, y: 617.73 };
const DOT = { cx: 804.36, cy: 410.73, r: 28.92 };

const X_PATHS = [
  "M600,625L624,650L557,722L546,733L497,733Z",
  "M497,514L547,514L625,598L600,623Z",
  "M706,514L755,514L650,623L627,598Z",
  "M650,625L755,733L707,733L688,714L627,650Z",
];

const RING_PATHS = [
  "M836,436L850,453L863,473L873,491L886,521L895,550L900,575L901,589L902,590L902,601L903,602L903,637L902,638L901,656L895,686L886,714L874,742L865,759L849,784L828,810L816,822L802,834L777,852L744,870L722,879L687,889L665,892L664,893L644,894L643,895L615,895L614,894L593,893L567,888L539,880L514,870L486,855L455,833L433,813L421,800L400,773L384,746L398,769L417,793L447,822L482,847L502,858L539,873L575,882L596,884L597,885L610,885L611,886L633,886L634,885L655,884L656,883L662,883L678,880L704,873L707,871L723,866L737,860L747,854L749,854L768,843L796,822L814,805L828,789L840,773L855,749L870,718L879,693L885,669L887,651L888,650L888,643L889,642L889,629L890,628L889,595L888,594L886,572L881,550L870,517L860,495L846,470L827,444Z",
  "M615,341L654,342L655,343L662,343L663,344L681,346L706,352L740,364L766,377L775,383L769,392L767,392L741,377L712,365L681,356L660,353L659,352L641,351L640,350L601,350L600,351L576,353L556,357L527,366L507,374L475,391L451,408L437,420L412,446L392,473L380,495L395,467L420,434L445,409L462,395L481,382L497,373L521,362L549,352L585,344L592,344L601,342L614,342Z",
];

type OrbitLogoProps = {
  size?: number;
  animated?: boolean;
  glow?: boolean;
  className?: string;
  /** Seconds per full orbit revolution. */
  spinDuration?: number;
};

export default function OrbitLogo({
  size = 120,
  animated = true,
  glow = true,
  className = "",
  spinDuration = 24,
}: OrbitLogoProps) {
  const prefersReducedMotion = useReducedMotion();
  const spin = animated && !prefersReducedMotion;

  return (
    <svg
      viewBox={VIEWBOX}
      width={size}
      height={size}
      className={`${glow ? "drop-shadow-[0_0_45px_rgba(255,90,0,0.4)]" : ""} ${className}`}
      role="img"
      aria-label="MarsX orbit logo"
    >
      {/* Orbit ring + dot — rotate together about the exact fitted centre */}
      <g
        style={{
          transformBox: "view-box",
          transformOrigin: `${CENTER.x}px ${CENTER.y}px`,
          animation: spin ? `orbit-spin ${spinDuration}s linear infinite` : undefined,
        }}
      >
        {RING_PATHS.map((d, i) => (
          <path key={i} d={d} fill="#FF5A00" />
        ))}
        {spin && (
          <circle
            cx={DOT.cx}
            cy={DOT.cy}
            r={DOT.r * 1.7}
            fill="#FF5A00"
            style={{
              transformBox: "view-box",
              transformOrigin: `${DOT.cx}px ${DOT.cy}px`,
              animation: "dot-halo 3.2s ease-in-out infinite",
            }}
          />
        )}
        <circle cx={DOT.cx} cy={DOT.cy} r={DOT.r} fill="#FF5A00" />
      </g>

      {/* Static X — never moves, so the mark stays legible at all times */}
      <g>
        {X_PATHS.map((d, i) => (
          <path key={i} d={d} fill="#FF5A00" />
        ))}
      </g>
    </svg>
  );
}
