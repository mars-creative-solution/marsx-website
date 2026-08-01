import { MotionConfig } from "framer-motion";
import { AmbassadorsShowcase } from "marsx";

// This section's headline/cards fade in via Framer Motion's `whileInView` —
// a real scroll trigger, which a static preview card can't reproduce.
// `reducedMotion="always"` collapses every transition to its end state
// instantly so the card shows the section fully revealed, matching how it
// looks mid-scroll on the live site.
export function Default() {
  return (
    <MotionConfig reducedMotion="always">
      <AmbassadorsShowcase />
    </MotionConfig>
  );
}
