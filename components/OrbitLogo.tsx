"use client";

import { motion, useReducedMotion } from "framer-motion";

type OrbitLogoProps = {
  size?: number;
  animated?: boolean;
  glow?: boolean;
  className?: string;
};

export default function OrbitLogo({
  size = 120,
  animated = true,
  glow = true,
  className = "",
}: OrbitLogoProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animated && !prefersReducedMotion;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`${glow ? "drop-shadow-[0_0_45px_rgba(255,90,0,0.4)]" : ""} ${className}`}
      role="img"
      aria-label="MarsX orbit logo"
    >
      <motion.g
        style={{ transformOrigin: "50px 50px" }}
        animate={shouldAnimate ? { rotate: 360 } : undefined}
        transition={
          shouldAnimate
            ? { duration: 14, repeat: Infinity, ease: "linear" }
            : undefined
        }
      >
        <path
          d="M 93.23 34.27 A 46 46 0 1 1 65.73 6.77"
          fill="none"
          stroke="#FF5A00"
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <motion.circle
          cx={65.73}
          cy={6.77}
          r={5.2}
          fill="#FF5A00"
          animate={
            shouldAnimate
              ? { scale: [1, 1.18, 1], opacity: [1, 0.85, 1] }
              : undefined
          }
          transition={
            shouldAnimate
              ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
          style={{ transformOrigin: "65.73px 6.77px" }}
        />
      </motion.g>

      <path
        d="M21.8,30.2 L30.2,21.8 L50,50 L78.2,69.8 L69.8,78.2 L50,50 Z"
        fill="#FF5A00"
      />
      <path
        d="M69.8,21.8 L78.2,30.2 L50,50 L30.2,78.2 L21.8,69.8 L50,50 Z"
        fill="#FF5A00"
      />
    </svg>
  );
}
