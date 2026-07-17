"use client";

import { motion } from "framer-motion";
import OrbitLogo from "./OrbitLogo";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-black pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-overlay noise-mask opacity-30" />
      <div className="pointer-events-none absolute -right-24 -top-16 opacity-[0.07]">
        <OrbitLogo size={420} animated={false} glow={false} />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.3em] text-accent"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-mist sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist/60"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
