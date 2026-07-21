"use client";

// Varied bar heights + staggered delays read as an organic voice waveform.
const BARS = [10, 16, 22, 13, 20, 11, 17];

type SpeakingIndicatorProps = {
  className?: string;
};

/**
 * A restrained "live / speaking" status pill — a pulsing dot + a subtle
 * equalizer (reusing the bar-pulse keyframe) + a LIVE label. This is a
 * purposeful status indicator (not decoration), so the ambient motion is
 * justified; it's neutralized under reduced motion by the global rule.
 */
export default function SpeakingIndicator({ className = "" }: SpeakingIndicatorProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-full border border-mist/10 bg-black/55 px-4 py-2 backdrop-blur ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>

      <span className="flex items-end gap-[3px]" aria-hidden>
        {BARS.map((h, i) => (
          <span
            key={i}
            style={{
              height: h,
              transformOrigin: "bottom",
              animationDelay: `${i * 0.11}s`,
            }}
            className="w-[3px] animate-bar-pulse rounded-full bg-accent/70"
          />
        ))}
      </span>

      <span className="text-[0.6rem] font-medium tracking-[0.25em] text-mist/70">
        LIVE
      </span>
    </div>
  );
}
