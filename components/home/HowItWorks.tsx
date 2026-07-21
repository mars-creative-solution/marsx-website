"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { HOW_IT_WORKS } from "@/lib/content";
import Icon from "../Icon";

export default function HowItWorks() {
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
            HOW IT WORKS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            From concept to conversation.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Four steps to a production-ready AI digital human, grounded in your
            organization&apos;s knowledge.
          </p>
        </motion.div>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HOW_IT_WORKS.map((step, i) => (
            <motion.li
              key={step.title}
              variants={staggerItem}
              className="relative rounded-2xl glass p-7 card-lift"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={step.icon} size={22} />
                </span>
                <span className="font-display text-4xl font-bold text-mist/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-mist">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/55">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
