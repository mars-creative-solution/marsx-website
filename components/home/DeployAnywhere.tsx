"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { DEPLOYMENT_OPTIONS } from "@/lib/content";
import DeploymentArt from "./DeploymentArt";

// Bento sizing: Holograms and LED Walls are the two anchor tiles (the
// largest-format physical installations); everything else is a standard
// tile. Kept separate from customization — this section is only about the
// screens/devices/installations an AI human can live on.
function tileSpan(id: string) {
  if (id === "holograms") return "sm:col-span-2 lg:col-span-2 lg:row-span-2";
  if (id === "led-walls") return "sm:col-span-2 lg:col-span-2";
  return "col-span-1";
}

export default function DeployAnywhere() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[640px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            DEPLOY ANYWHERE
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            One AI human. Every screen.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Deploy the same AI human across websites, mobile devices,
            immersive displays, and physical installations.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[10rem] lg:grid-flow-dense"
        >
          {DEPLOYMENT_OPTIONS.map((opt) => (
            <motion.div
              key={opt.id}
              variants={staggerItem}
              className={`group relative flex items-stretch gap-4 overflow-hidden rounded-2xl border border-mist/10 bg-mist/[0.02] p-6 transition-all duration-300 hover:border-accent/25 hover:bg-mist/[0.04] ${tileSpan(
                opt.id,
              )} ${opt.featured ? "lg:p-8" : ""}`}
            >
              {/* Text zone — a clean, fixed ~50% of the card so it never
                  competes with the illustration for space. */}
              <div
                className={`flex flex-col justify-center ${
                  opt.featured ? "w-[45%]" : "w-1/2"
                }`}
              >
                <h3
                  className={`font-display font-semibold text-mist ${
                    opt.featured ? "text-2xl" : "text-base"
                  }`}
                >
                  {opt.title}
                </h3>
                <p
                  className={`mt-2 leading-relaxed text-mist/50 ${
                    opt.featured ? "text-sm" : "text-xs"
                  }`}
                >
                  {opt.description}
                </p>
              </div>

              {/* Illustration zone — a separate panel (divider + faint tint)
                  rather than a background wash, so it reads as part of the
                  layout instead of floating behind the text. Larger tiles get
                  slightly more width, per the brief. */}
              <div
                className={`flex min-h-[5.5rem] items-center justify-center rounded-xl border-l border-mist/10 bg-mist/[0.015] pl-4 ${
                  opt.featured ? "w-[55%]" : "w-1/2"
                }`}
              >
                <DeploymentArt
                  id={opt.id}
                  className={`h-full max-h-28 w-full transition-opacity duration-300 group-hover:opacity-[0.55] ${
                    opt.featured
                      ? "max-h-32 text-accent/30 lg:max-h-40"
                      : "text-mist/35"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
