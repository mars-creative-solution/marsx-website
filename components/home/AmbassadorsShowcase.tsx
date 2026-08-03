"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UserPlus } from "lucide-react";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { AMBASSADORS } from "@/lib/content";
import NasserFigure from "./NasserFigure";

/**
 * "Meet the Ambassadors" — a premium, scalable gallery proving MarsX is a
 * platform for creating many AI humans, not a single fixed avatar. All
 * messaging lives in the section header; each card shows only a still portrait
 * + name, so the section reads as a range on display rather than a set of
 * separate profile cards — and scales cleanly as more avatars are added.
 */
export default function AmbassadorsShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            THE AMBASSADORS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            One platform. Many AI humans.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Every ambassador is built on the same platform, shaped into a
            distinct persona for a different industry and audience.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-mist/45">
            Designed for governments, exhibitions, museums, hospitality, and
            every experience in between.
          </p>
        </motion.div>

        {/* Avatar gallery — portrait + name only; no per-card subtitle */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-5 lg:gap-6"
        >
          {AMBASSADORS.map((a) => (
            <motion.div
              key={a.id}
              variants={staggerItem}
              className="group flex flex-col items-center rounded-3xl border border-mist/10 bg-mist/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-mist/[0.05] hover:shadow-[0_0_50px_-12px_rgba(255,90,0,0.35)] sm:p-6"
            >
              <NasserFigure
                hologram
                media={a.media}
                name={a.name}
                role=""
                className="aspect-[3/4] w-full"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
              />
              <span className="mt-5 font-display text-sm font-semibold tracking-[0.3em] text-mist/85">
                {a.name.toUpperCase()}
              </span>
            </motion.div>
          ))}

          {/* "Your Custom Character" — the platform is fully customizable, so
              the gallery ends with an open slot rather than a fixed lineup. */}
          <motion.div variants={staggerItem}>
            <Link
              href="/contact"
              className="group flex flex-col items-center rounded-3xl border border-dashed border-accent/30 bg-accent/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-accent/[0.08] hover:shadow-[0_0_50px_-12px_rgba(255,90,0,0.45)] sm:p-6"
            >
              <div className="relative flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-b from-accent/25 via-accent/10 to-transparent">
                <UserPlus size={40} strokeWidth={1.5} className="text-accent/80" />
                <span className="text-xs font-semibold tracking-[0.3em] text-accent/70">
                  YOU
                </span>
              </div>
              <span className="mt-5 text-center font-display text-sm font-semibold tracking-[0.3em] text-mist/85">
                YOUR CUSTOM CHARACTER
              </span>
              <span className="mt-2 text-center text-xs leading-relaxed text-mist/45">
                Built for your organization.
              </span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                Book a Demo
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
