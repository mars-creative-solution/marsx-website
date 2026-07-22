"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { AMBASSADORS } from "@/lib/content";
import NasserFigure from "./NasserFigure";

/**
 * "Meet the Ambassadors" — a premium, scalable gallery proving MarsX is a
 * platform for creating many AI humans, not a single fixed avatar. All
 * messaging lives in the section header; each card shows only a still portrait
 * + name, so the section reads as a range on display rather than a set of
 * separate profile cards — and scales cleanly as more avatars are added.
 */
export default function AmbassadorsShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            THE AMBASSADORS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            One platform. Many AI humans.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Every ambassador is built on the same platform, shaped into a
            distinct persona for a different industry and audience.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-mist/45">
            Designed for governments, exhibitions, museums, hospitality, and
            every experience in between.
          </p>
        </motion.div>

        {/* Avatar gallery — portrait + name only; no per-card subtitle */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
        >
          {AMBASSADORS.map((a) => (
            <motion.div
              key={a.id}
              variants={staggerItem}
              className="flex flex-col items-center"
            >
              <NasserFigure
                hologram
                media={a.media}
                name={a.name}
                role=""
                className="aspect-[3/4] w-full max-w-xs"
              />
              <span className="mt-5 font-display text-sm font-semibold tracking-[0.3em] text-mist/85">
                {a.name.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
