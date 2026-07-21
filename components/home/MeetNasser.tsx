"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, fadeUp, inView } from "@/lib/motion";
import { NASSER, NASSER_STATES } from "@/lib/content";
import Icon from "../Icon";
import NasserFigure from "./NasserFigure";

export default function MeetNasser() {
  const [active, setActive] = useState(0);

  // Calmly auto-advance through Listening → Thinking → Responding so visitors
  // see the full conversational loop; clicking a state jumps to it.
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % NASSER_STATES.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  const current = NASSER_STATES[active];

  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            {NASSER.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            The face of your organization.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            {NASSER.intro}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Avatar with live-state indicator */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <NasserFigure breathe className="aspect-[4/5] w-full" />

            {/* Orange state chip — the demo's purple "Listening…" re-skinned */}
            <div className="absolute inset-x-0 bottom-5 flex justify-center">
              <div className="flex items-center gap-3 rounded-full border border-mist/10 bg-black/60 px-4 py-2.5 backdrop-blur">
                <span className="state-halo grid h-9 w-9 place-items-center rounded-full bg-accent text-black">
                  <Icon name={current.icon} size={16} />
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.key}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="text-sm font-medium text-mist"
                  >
                    {current.label}…
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* State list */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="flex flex-col gap-4"
          >
            {NASSER_STATES.map((state, i) => {
              const isActive = i === active;
              return (
                <li key={state.key}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-accent/40 bg-accent/5"
                        : "border-mist/10 bg-mist/[0.02] hover:border-mist/20"
                    }`}
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-accent text-black"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <Icon name={state.icon} size={20} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-mist">
                        {state.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-mist/55">
                        {state.caption}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
