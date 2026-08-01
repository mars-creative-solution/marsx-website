import { MotionConfig } from "framer-motion";
import { IndustriesGrid } from "marsx";

// See AmbassadorsShowcase.tsx — collapses the scroll-reveal transition to
// its end state so the static card shows fully revealed.
export function Full() {
  return (
    <MotionConfig reducedMotion="always">
      <IndustriesGrid variant="full" />
    </MotionConfig>
  );
}

export function Compact() {
  return (
    <MotionConfig reducedMotion="always">
      <IndustriesGrid variant="compact" />
    </MotionConfig>
  );
}
