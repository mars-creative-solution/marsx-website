"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EASE } from "@/lib/motion";
import OrbitLogo from "../OrbitLogo";
import NasserStage from "./NasserStage";

export default function NasserHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-28 pb-20 lg:pt-32">
      {/* Background layers — preserved from the original hero, glow softened ~50% */}
      <div className="pointer-events-none absolute inset-0 grid-overlay noise-mask opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[90px]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-accent/5 blur-[70px] animate-drift" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-charcoal/60 blur-[80px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        {/* Nasser — still portrait; fades in without moving. First on mobile
            (top), right on desktop. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
        >
          <NasserStage
            priority
            nameplate
            className="aspect-[4/5] w-full lg:aspect-auto lg:h-[74vh]"
          />
        </motion.div>

        {/* Existing hero content — left on desktop */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center justify-center gap-6 lg:justify-start"
          >
            <OrbitLogo size={44} spinDuration={28} glow={false} />
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-[0.25em] text-mist/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI DIGITAL HUMANS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="mt-7 font-display text-4xl font-bold leading-tight tracking-tight text-mist sm:text-5xl lg:text-6xl"
          >
            Human conversations.
            <br />
            <span className="text-gradient">Powered by AI.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
            className="mx-auto mt-6 max-w-xl space-y-3 text-base leading-relaxed sm:text-lg lg:mx-0"
          >
            <p className="text-mist/75">
              Meet Nasser — a lifelike AI digital human that listens,
              understands, and responds in Arabic and English.
            </p>
            <p className="text-mist/50">
              Built for governments, exhibitions, museums, and enterprise
              experiences across the UAE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-105 accent-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book a Demo
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/platform"
              className="glass rounded-full px-8 py-3.5 text-sm font-semibold text-mist transition-colors hover:bg-mist/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Explore MarsX
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-mist/55">
        <span className="text-[0.65rem] tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </div>
    </section>
  );
}
