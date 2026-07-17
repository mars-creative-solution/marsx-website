"use client";

import { motion } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";
import Button from "../Button";
import IndustriesGrid from "../IndustriesGrid";

export default function IndustriesPreview() {
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
            INDUSTRIES
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Trusted across industries.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Designed for organizations across every sector.
          </p>
        </motion.div>

        <div className="mt-14">
          <IndustriesGrid variant="compact" />
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/industries" variant="glass" withArrow>
            View Industries
          </Button>
        </div>
      </div>
    </section>
  );
}
