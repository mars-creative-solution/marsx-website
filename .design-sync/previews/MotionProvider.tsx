import { MotionProvider } from "marsx";

export function Default() {
  return (
    <MotionProvider>
      <div style={{ padding: 24, color: "#f2f2f2", background: "#0d0d0d" }}>
        MotionProvider wraps the app in a shared Framer Motion configuration
        (reduced-motion aware, shared easing) — it has no visual output of its
        own.
      </div>
    </MotionProvider>
  );
}
