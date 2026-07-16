"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe2, Waves, Layers, Gamepad2, Boxes } from "lucide-react";

const AVATAR_TAGS = [
  { icon: Waves, label: "Real-time voice" },
  { icon: Globe2, label: "Multilingual" },
  { icon: Sparkles, label: "Emotion-aware" },
];

const UNREAL_TAGS = [
  { icon: Boxes, label: "Digital twins" },
  { icon: Layers, label: "Real-time rendering" },
  { icon: Gamepad2, label: "Interactive experiences" },
];

const panelVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-black py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            SHOWCASE
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Where AI meets cinematic reality
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            A glimpse into the digital humans and real-time worlds we build
            for brands that refuse to look ordinary.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* AI Avatars panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl glass-strong p-6 sm:p-8"
          >
            <div className="relative h-72 overflow-hidden rounded-2xl bg-black/40 sm:h-80">
              <div className="absolute inset-0 grid-overlay opacity-20" />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60"
              />
              <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_60px_18px_rgba(255,90,0,0.5)]" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-mist/80 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                LIVE AVATAR
              </div>

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-end gap-1">
                {[6, 14, 9, 18, 7, 15, 5].map((h, idx) => (
                  <span
                    key={idx}
                    style={{
                      height: h,
                      transformOrigin: "bottom",
                      animationDelay: `${idx * 0.12}s`,
                    }}
                    className="w-1.5 animate-bar-pulse rounded-full bg-accent/70"
                  />
                ))}
              </div>
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold text-mist">
              AI Avatars &amp; Digital Humans
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mist/55">
              Expressive, responsive avatars that greet, guide, and convert —
              trained on your brand voice and knowledge.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {AVATAR_TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className="flex items-center gap-1.5 rounded-full bg-mist/5 px-3 py-1.5 text-xs text-mist/60"
                >
                  <tag.icon size={13} className="text-accent" />
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Unreal Engine panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl glass-strong p-6 sm:p-8"
          >
            <div
              className="relative h-72 overflow-hidden rounded-2xl bg-black/40 sm:h-80"
              style={{ perspective: "600px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
              <div className="absolute bottom-0 h-1/2 w-full [background-image:linear-gradient(rgba(242,242,242,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(242,242,242,0.08)_1px,transparent_1px)] [background-size:36px_36px] [transform:rotateX(60deg)] [transform-origin:bottom]" />

              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute left-1/2 top-[38%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-accent/70 shadow-[0_0_40px_rgba(255,90,0,0.35)]"
              />

              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-mist/80 backdrop-blur">
                <Boxes size={13} className="text-accent" />
                REAL-TIME SCENE
              </div>
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold text-mist">
              Unreal Engine Experiences
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mist/55">
              Photoreal environments, virtual showrooms, and product
              configurators rendered live at cinematic fidelity.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {UNREAL_TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className="flex items-center gap-1.5 rounded-full bg-mist/5 px-3 py-1.5 text-xs text-mist/60"
                >
                  <tag.icon size={13} className="text-accent" />
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
