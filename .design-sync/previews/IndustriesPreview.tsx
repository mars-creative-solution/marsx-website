import { MotionConfig } from "framer-motion";
import { IndustriesPreview } from "marsx";

// See AmbassadorsShowcase.tsx — collapses the scroll-reveal transition to
// its end state so the static card shows fully revealed.
export function Default() {
  return (
    <MotionConfig reducedMotion="always">
      <IndustriesPreview />
    </MotionConfig>
  );
}
