"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { AMBASSADORS } from "@/lib/content";
import NasserFigure from "./NasserFigure";

/**
 * "Meet the Ambassadors" — a premium 3-up gallery proving MarsX is a platform
 * for creating many AI humans, not a single fixed avatar. Deliberately generic
 * roles/descriptions (see AMBASSADOR_ROLE/AMBASSADOR_DESCRIPTION in
 * lib/content.ts) — the point is that any of them can be personalized to any
 * industry, not that each is locked to one. Each figure is a still portrait (no
 * idle motion); gallery-style nameplate below. No Listening/Thinking/Responding
 * concept here — that framing belongs to a single demo, not a platform showcase.
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
            One platform, capable of creating countless AI humans — every
            detail personalized to fit any industry.
          </p>
        </motion.div>

        {/* Avatar gallery */}
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
                role={a.role}
                className="aspect-[3/4] w-full max-w-xs"
              />
              <div className="mt-5 flex flex-col items-center gap-2 text-center">
                <span className="font-display text-sm font-semibold tracking-[0.3em] text-mist/85">
                  {a.name.toUpperCase()}
                </span>
                <span className="h-px w-8 bg-accent/50" />
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-mist/45">
                  {a.role}
                </span>
                <p className="mt-2 max-w-[15rem] text-xs leading-relaxed text-mist/50">
                  {a.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
