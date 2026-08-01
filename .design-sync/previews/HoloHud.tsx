import { MotionConfig } from "framer-motion";
import { HoloHud } from "marsx";

// See AmbassadorsShowcase.tsx — collapses the fade transition to its end
// state so the static card shows the tokens visible.
export function Default() {
  return (
    <MotionConfig reducedMotion="always">
      <div style={{ height: 420, position: "relative", background: "#000" }}>
        <HoloHud />
      </div>
    </MotionConfig>
  );
}
