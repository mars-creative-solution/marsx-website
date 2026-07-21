"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { NASSER_CUSTOMIZATION } from "@/lib/content";
import Icon from "../Icon";

export default function CustomizeSection() {
  return (
    <section className="relative bg-charcoal/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            CUSTOMIZATION
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Customize every aspect of your AI human.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Nasser is a starting point. Shape every detail — from attire and
            dialect to personality and knowledge — around your brand.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {NASSER_CUSTOMIZATION.map((option) => (
            <motion.div
              key={option.title}
              variants={staggerItem}
              className="group rounded-2xl glass p-7 card-lift"
            >
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
