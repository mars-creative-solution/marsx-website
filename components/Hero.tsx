"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import OrbitLogo from "./OrbitLogo";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-28 pb-20">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-overlay noise-mask opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[90px]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-accent/10 blur-[70px] animate-drift" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-charcoal/60 blur-[80px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-[0.25em] text-mist/70"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          AI DIGITAL HUMANS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <OrbitLogo size={130} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-mist sm:text-5xl lg:text-7xl"
        >
          Human conversations.
          <br />
          <span className="text-gradient">Powered by AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-mist/60 sm:text-lg"
        >
          Create intelligent, natural, and immersive conversations through
          AI-powered digital humans designed for exhibitions, customer
          experience, and public engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-105 accent-glow"
          >
            Book a Demo
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/platform"
            className="glass rounded-full px-8 py-3.5 text-sm font-semibold text-mist transition-colors hover:bg-mist/10"
          >
            Explore MarsX
          </Link>
        </motion.div>
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
