"use client";

import { MotionConfig } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Global motion configuration.
 * - `reducedMotion="user"` makes every Framer Motion animation respect the
 *   operating system's "reduce motion" setting automatically.
 * - A shared default transition keeps ad-hoc animations on the same easing.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE, duration: 0.6 }}>
      {children}
    </MotionConfig>
  );
}
