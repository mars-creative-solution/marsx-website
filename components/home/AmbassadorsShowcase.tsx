"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { AMBASSADORS, NASSER_STATES } from "@/lib/content";
import Icon from "../Icon";
import NasserFigure from "./NasserFigure";

/**
 * "Meet the Ambassadors" — a premium 3-up gallery of the avatar roster (blended
 * figures + gallery-style nameplates), followed by a slim "how a conversation
 * flows" band (listen → think → respond). Replaces the old single-Nasser
 * section so the flagship isn't shown twice as a repeat, and shows range.
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
            A cast of lifelike AI ambassadors.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Distinct faces and personas — each engineered to listen, think, and
            respond in real time, in Arabic and English.
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slim "how a conversation flows" band */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto mt-20 max-w-4xl"
        >
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-mist/40">
            HOW EVERY CONVERSATION FLOWS
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {NASSER_STATES.map((s, i) => (
              <div
                key={s.key}
                className="flex items-start gap-3 rounded-2xl border border-mist/10 bg-mist/[0.02] p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={s.icon} size={18} />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-mist">
                    {i + 1}. {s.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-mist/55">
                    {s.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
