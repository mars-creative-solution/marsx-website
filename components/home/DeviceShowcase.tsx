"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

// Complete, pre-rendered hero visuals (device chrome + lighting + Nasser all
// baked into each PNG) — never composited with the site's own avatar
// treatment (masks, glow filters, orbit rings). Cycles through the physical
// experiences MarsX deploys to, one at a time.
const DEVICES = [
  { id: "holotube", label: "HOLOTUBE", image: "/device-holotube.png" },
  { id: "holobox", label: "HOLOBOX", image: "/device-holobox.png" },
  { id: "screen", label: "SCREEN", image: "/device-screen.png" },
  { id: "kiosk", label: "KIOSK", image: "/device-kiosk.png" },
] as const;

const INTERVAL_MS = 2800;

type DeviceShowcaseProps = {
  className?: string;
  priority?: boolean;
};

export default function DeviceShowcase({
  className = "",
  priority = false,
}: DeviceShowcaseProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DEVICES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const current = DEVICES[index];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-full flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.94, x: 28 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: -28 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={`Nasser presented via the MarsX ${current.label.toLowerCase()}`}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mt-2 flex flex-col items-center gap-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-sm font-semibold tracking-[0.35em] text-mist [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]"
          >
            {current.label}
          </motion.span>
        </AnimatePresence>
        <span className="h-px w-10 bg-accent/70" />
      </div>
    </div>
  );
}
