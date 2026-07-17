"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { SOLUTIONS } from "@/lib/content";
import Button from "../Button";
import Icon from "../Icon";

export default function SolutionsPreview() {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            SOLUTIONS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Built around your business.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            We design AI solutions that solve real-world business challenges.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {SOLUTIONS.map((s) => (
            <motion.div
              key={s.slug}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl glass p-8 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/20" />
              <div className="relative mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                <Icon name={s.icon} size={22} />
              </div>
              {s.eyebrow && (
                <p className="relative text-[0.65rem] font-semibold tracking-[0.2em] text-accent">
                  {s.eyebrow.toUpperCase()}
                </p>
              )}
              <h3 className="relative mt-1 font-display text-xl font-semibold text-mist">
                {s.name}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-mist/55">
                {s.summary}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button href="/solutions" variant="glass" withArrow>
            Explore Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
