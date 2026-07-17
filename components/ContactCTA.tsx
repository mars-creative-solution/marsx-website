"use client";

import { motion } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";
import Button from "./Button";
import OrbitLogo from "./OrbitLogo";

type ContactCTAProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export default function ContactCTA({
  eyebrow = "CONTACT",
  title = "Ready to get started?",
  intro = "Whether you're exploring AI, transforming customer experience, or planning your next innovation project, we're here to help.",
}: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 grid-overlay noise-mask opacity-20" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <div className="mb-8 flex justify-center">
          <OrbitLogo size={84} />
        </div>
        <span className="text-xs font-semibold tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist/60">
          {intro}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" withArrow>
            Book a Demo
          </Button>
          <Button href="/contact" variant="glass">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
