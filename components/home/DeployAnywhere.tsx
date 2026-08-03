"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { DEPLOYMENT_OPTIONS } from "@/lib/content";
import DeploymentShowcase from "./DeploymentShowcase";

// Featured surfaces (the two largest-format physical installations) get a
// slightly larger heading in the text-only list below the showcase frame.

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

        {/* One frame, cycling through every surface in sequence — replaces
            the previous wall of per-card icons. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16"
        >
          <DeploymentShowcase />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DEPLOYMENT_OPTIONS.map((opt) => (
            <motion.div
              key={opt.id}
              variants={staggerItem}
              className="rounded-2xl border border-mist/10 bg-mist/[0.02] p-6 transition-all duration-300 hover:border-accent/25 hover:bg-mist/[0.04]"
            >
              <h3
                className={`font-display font-semibold text-mist ${
                  opt.featured ? "text-xl" : "text-base"
                }`}
              >
                {opt.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/50">
                {opt.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
