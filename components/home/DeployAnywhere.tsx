"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { DEPLOYMENT_OPTIONS } from "@/lib/content";
import DeploymentArt from "./DeploymentArt";

// Bento sizing: Holograms is the anchor tile (wide + tall); Museums and
// Exhibitions are wide; everything else is a standard tile. Kept separate from
// customization — this section is only about where an AI human can live.
function tileSpan(id: string) {
  if (id === "holograms") return "sm:col-span-2 lg:col-span-2 lg:row-span-2";
  if (id === "museums" || id === "exhibitions") return "sm:col-span-2 lg:col-span-2";
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
            Living in physical spaces, not just on screens.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            A single AI human, deployed wherever your audience meets you —
            from a holographic pavilion to a phone in their hand.
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
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-mist/10 bg-mist/[0.02] p-6 transition-all duration-300 hover:border-accent/25 hover:bg-mist/[0.04] ${tileSpan(
                opt.id,
              )} ${opt.featured ? "lg:p-8" : ""}`}
            >
              {/* Background line-art illustration — secondary to the text,
                  but bumped up from the original pass so each scenario reads
                  at a glance instead of needing a close look. Orange stays
                  deliberately more restrained than the mist tint. */}
              <DeploymentArt
                id={opt.id}
                className={`pointer-events-none absolute bottom-0 right-0 transition-opacity duration-300 ${
                  opt.featured
                    ? "h-40 w-40 text-accent/[0.16] group-hover:opacity-[0.24] lg:h-52 lg:w-52"
                    : "h-28 w-28 text-mist/[0.2] group-hover:opacity-[0.3]"
                }`}
              />

              <div className="relative z-10">
                <h3
                  className={`font-display font-semibold text-mist ${
                    opt.featured ? "text-2xl" : "text-base"
                  }`}
                >
                  {opt.title}
                </h3>
                <p
                  className={`mt-2 max-w-[16rem] leading-relaxed text-mist/50 ${
                    opt.featured ? "text-sm" : "text-xs"
                  }`}
                >
                  {opt.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
