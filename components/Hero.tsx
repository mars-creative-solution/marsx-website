"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import OrbitLogo from "./OrbitLogo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-28 pb-20"
    >
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
          AI STUDIO &middot; DUBAI, UAE
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
          className="font-display text-4xl font-bold leading-tight tracking-tight text-mist sm:text-5xl lg:text-6xl"
        >
          Engineering the <span className="text-gradient">Intelligent</span>
          <br className="hidden sm:block" /> Future of Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-mist/60 sm:text-lg"
        >
          MarsX AI Solutions designs AI avatars, immersive Unreal Engine
          experiences, and intelligent automation systems that give ambitious
          companies an unfair advantage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-105 accent-glow"
          >
            Start a Project
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="glass rounded-full px-8 py-3.5 text-sm font-semibold text-mist transition-colors hover:bg-mist/10"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-mist/40"
        aria-label="Scroll to About section"
      >
        <span className="text-[0.65rem] tracking-[0.3em]">SCROLL</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
