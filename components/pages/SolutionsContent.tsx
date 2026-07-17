"use client";

import { motion } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";
import { SOLUTIONS } from "@/lib/content";
import Button from "../Button";
import Icon from "../Icon";
import ImmersiveShowcase from "../ImmersiveShowcase";

export default function SolutionsContent() {
  return (
    <>
      {/* Intro */}
      <section className="relative bg-black pb-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-3xl px-6 text-center lg:px-10"
        >
          <p className="text-lg leading-relaxed text-mist/70">
            Every organization is unique. Our solutions are designed to solve
            complex business challenges while creating exceptional customer
            experiences.
          </p>
        </motion.div>
      </section>

      {/* Detailed solution rows */}
      <section className="relative bg-black py-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:px-10">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.slug}
              id={s.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid items-center gap-8 rounded-3xl glass-strong p-8 lg:grid-cols-12 lg:p-10"
            >
              <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon name={s.icon} size={22} />
                </div>
                {s.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent">
                    {s.eyebrow.toUpperCase()}
                  </p>
                )}
                <h2 className="mt-2 font-display text-2xl font-bold text-mist sm:text-3xl">
                  {s.name}
                </h2>
                <p className="mt-3 text-base font-medium text-mist/80">
                  {s.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mist/55">
                  {s.description}
                </p>
              </div>
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-black lg:col-span-4 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="absolute inset-0 grid-overlay opacity-20" />
                <div className="absolute h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
                <Icon name={s.icon} size={48} className="relative text-accent/80" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Immersive showcase tied to AI Experiences */}
      <ImmersiveShowcase />

      <section className="relative bg-black pb-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="flex justify-center px-6"
        >
          <Button href="/contact" withArrow>
            Explore Solutions with Us
          </Button>
        </motion.div>
      </section>
    </>
  );
}
