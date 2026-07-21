"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { NASSER_HUD } from "@/lib/content";

// Perimeter slots — deliberately at the left/right edges and lower area so
// tokens flank Nasser without ever crossing the face safe-zone (upper-center).
const SLOTS = [
  "left-[3%] top-[24%]",
  "right-[5%] top-[16%]",
  "left-[6%] top-[60%]",
  "right-[4%] top-[52%]",
  "left-[12%] top-[85%]",
  "right-[10%] top-[80%]",
];

/**
 * Faint Arabic + English interface fragments that slowly fade in and out around
 * Nasser. Decorative only (aria-hidden). Opacity fades survive reduced motion
 * (they're gentle and non-vestibular); positional drift is disabled by the
 * global MotionConfig reducedMotion="user".
 */
export default function HoloHud() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {NASSER_HUD.map((token, i) => (
        <motion.span
          key={token.text}
          dir={token.lang === "ar" ? "rtl" : "ltr"}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.32, 0.32, 0], y: [8, 0, 0, -8] }}
          transition={{
            duration: 7,
            times: [0, 0.2, 0.8, 1],
            delay: i * 1.15,
            repeat: Infinity,
            repeatDelay: 3.5,
            ease: EASE,
          }}
          className={`absolute ${SLOTS[i % SLOTS.length]} font-display text-[0.6rem] font-medium tracking-[0.28em] ${
            token.lang === "ar" ? "text-mist/35" : "text-accent/45"
          }`}
        >
          {token.text}
        </motion.span>
      ))}
    </div>
  );
}
