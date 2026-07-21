"use client";

/**
 * Mars-inspired orbit system behind Nasser — concentric rings with slow
 * counter-rotating nodes, echoing the MarsX orbit mark. Whisper-low opacity so
 * it reads as ambient depth, never decoration. SVG scales cleanly and the two
 * rotating groups are transform-only (cheap); the global reduced-motion rule
 * freezes them. Decorative, so aria-hidden.
 */
export default function OrbitRings() {
  const center = 200;
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[42%] h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2"
    >
      <g fill="none" stroke="#ff5a00" strokeWidth={1}>
        <circle cx={center} cy={center} r={108} strokeOpacity={0.1} />
        <circle
          cx={center}
          cy={center}
          r={150}
          strokeOpacity={0.07}
          strokeDasharray="2 7"
        />
        <circle cx={center} cy={center} r={190} strokeOpacity={0.045} />
      </g>

      {/* Orbiting node on the dashed ring */}
      <g
        style={{
          transformBox: "view-box",
          transformOrigin: `${center}px ${center}px`,
          animation: "orbit-spin 44s linear infinite",
        }}
      >
        <circle cx={center + 150} cy={center} r={3} fill="#ff5a00" opacity={0.6} />
      </g>

      {/* Smaller counter-orbiting node on the outer ring */}
      <g
        style={{
          transformBox: "view-box",
          transformOrigin: `${center}px ${center}px`,
          animation: "orbit-spin 64s linear infinite reverse",
        }}
      >
        <circle cx={center} cy={center - 190} r={2} fill="#ff5a00" opacity={0.4} />
      </g>
    </svg>
  );
}
