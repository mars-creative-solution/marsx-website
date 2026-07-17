import type { Variants } from "framer-motion";

// Shared Framer Motion tokens so every section animates with one consistent,
// restrained language. Sections use `whileInView` with the `inView` viewport
// config below. Reduced motion is handled globally by <MotionConfig
// reducedMotion="user"> in the layout, so variants stay simple here.

// Single premium easing curve (an ease-out expo feel) used everywhere.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Default viewport for scroll reveals: fire once, slightly before the element
// is fully in frame so content is already settling as it enters.
export const inView = { once: true, margin: "0px 0px -12% 0px" } as const;
