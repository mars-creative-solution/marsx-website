"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { WHY_MARSX } from "@/lib/content";
import Button from "../Button";
import Icon from "../Icon";

export default function AboutPreview() {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mist/10 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="lg:col-span-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            ABOUT
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-mist sm:text-4xl lg:text-5xl">
            AI that feels human.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist/60">
            MarsX AI Solutions develops intelligent technologies that help
            organizations transform customer engagement through innovative AI
            experiences.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-mist/60">
            We combine artificial intelligence, design, and enterprise
            innovation to create solutions that are powerful, scalable, and
            human-centered.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="glass" withArrow>
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6"
        >
          {WHY_MARSX.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              className="group rounded-2xl glass p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                <Icon name={pillar.icon} size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-mist">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/55">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
