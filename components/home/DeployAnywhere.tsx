"use client";

import { motion } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";
import DeploymentShowcase from "./DeploymentShowcase";

export default function DeployAnywhere() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[640px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            DEPLOY ANYWHERE
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            One AI human. Every screen.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Deploy the same AI human across websites, mobile devices,
            immersive displays, and physical installations.
          </p>
        </motion.div>

        {/* One frame, cycling through every surface in sequence — the whole
            "one AI human, every screen" story lives here, no separate card
            grid duplicating it. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16"
        >
          <DeploymentShowcase />
        </motion.div>
      </div>
    </section>
  );
}
