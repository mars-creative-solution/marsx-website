"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { PLATFORM_HIGHLIGHTS } from "@/lib/content";
import Button from "../Button";
import Icon from "../Icon";

// A curated subset of highlights for the home preview; the full set lives on /platform.
const PREVIEW = PLATFORM_HIGHLIGHTS.slice(0, 6);

export default function PlatformPreview() {
  return (
    <section className="relative overflow-hidden bg-charcoal/20 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            MARSX AI PLATFORM
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            One platform. Endless innovation.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            The MarsX AI Platform provides the foundation for building
            intelligent AI experiences across organizations — designed for
            enterprise deployment, built for scalability, and ready for the
            future.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {PREVIEW.map((h) => (
            <motion.div
              key={h.title}
              variants={staggerItem}
              className="flex items-center gap-3 rounded-xl glass px-4 py-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon name={h.icon} size={17} />
              </span>
              <span className="text-sm font-medium text-mist/80">{h.title}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button href="/platform" withArrow>
            Explore Platform
          </Button>
        </div>
      </div>
    </section>
  );
}
