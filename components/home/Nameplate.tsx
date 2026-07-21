"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { NASSER } from "@/lib/content";

/**
 * A restrained gallery-placard nameplate — establishes Nasser as a titled AI
 * ambassador (museum / exhibition register) rather than a live-chat widget.
 * Fades in once; deliberately no looping motion, so the avatar reads premium
 * and institutional, not like a customer-support agent.
 */
export default function Nameplate({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
      className={`flex flex-col items-center gap-2 text-center ${className}`}
    >
      <span className="font-display text-sm font-semibold tracking-[0.35em] text-mist/85">
        {NASSER.name.toUpperCase()}
      </span>
      <span className="h-px w-10 bg-accent/50" />
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-mist/45">
        {NASSER.role}
      </span>
    </motion.div>
  );
}
