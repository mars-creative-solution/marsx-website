import { MotionConfig } from "framer-motion";
import { Nameplate } from "marsx";

// See AmbassadorsShowcase.tsx — collapses the entrance transition to its
// end state so the static card shows fully revealed.
export function Default() {
  return (
    <MotionConfig reducedMotion="always">
      <div style={{ padding: 48, background: "#000" }}>
        <Nameplate />
      </div>
    </MotionConfig>
  );
}
