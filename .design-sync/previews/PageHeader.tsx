import { MotionConfig } from "framer-motion";
import { PageHeader } from "marsx";

// Title/intro fade in via Framer Motion `animate` on mount — collapse the
// transition to its end state so the card shows fully revealed (see
// AmbassadorsShowcase.tsx for the full rationale).
export function Default() {
  return (
    <MotionConfig reducedMotion="always">
      <PageHeader
        eyebrow="THE MARSX AI PLATFORM"
        title="One platform. Every AI human."
        intro="Enterprise-grade architecture for creating, customizing, and deploying AI digital humans at scale."
      />
    </MotionConfig>
  );
}

export function WithoutIntro() {
  return (
    <MotionConfig reducedMotion="always">
      <PageHeader eyebrow="SOLUTIONS" title="Built around your business." />
    </MotionConfig>
  );
}
