"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { NASSER_CUSTOMIZATION } from "@/lib/content";
import Icon from "../Icon";

/**
 * "Customize Every Aspect of Your AI Human" — one of the homepage's flagship
 * sections: the platform's core promise that every dimension of an AI human is
 * configurable, not fixed to a single character. Numbered cards signal a
 * complete, deliberate system rather than a generic feature grid.
 */
export default function CustomizeSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal/20 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mist/10 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            THE PLATFORM
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Customize every aspect of your AI human.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            No two organizations need the same ambassador. Every dimension —
            appearance, voice, personality, and knowledge — is built around
            your brand from the ground up.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {NASSER_CUSTOMIZATION.map((option, i) => (
            <motion.div
              key={option.title}
              variants={staggerItem}
              className="group relative rounded-2xl glass p-7 card-lift"
            >
              <span className="absolute right-6 top-6 font-display text-3xl font-bold text-mist/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                <Icon name={option.icon} size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-mist">
                {option.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/55">
                {option.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
