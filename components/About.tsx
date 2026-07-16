"use client";

import { motion } from "framer-motion";
import { Lightbulb, BrainCircuit, Cpu, Target } from "lucide-react";

const PILLARS = [
  {
    icon: Lightbulb,
    title: "Innovation",
    copy: "Original thinking applied to real business problems, not templated solutions.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence",
    copy: "AI systems that reason, adapt, and get sharper the more they're used.",
  },
  {
    icon: Cpu,
    title: "Technology",
    copy: "Modern engineering — from real-time 3D to production-grade software.",
  },
  {
    icon: Target,
    title: "Impact",
    copy: "Every engagement is measured against one thing: real-world results.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative bg-black py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mist/10 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            ABOUT MARSX
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-mist sm:text-4xl lg:text-5xl">
            A studio built at the intersection of AI and imagination
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist/60">
            MARS X AI Solutions empowers businesses with intelligent
            technology and innovative AI-driven solutions. We deliver
            AI-powered solutions that drive real-world impact — our mission
            is to transform the future through innovation, intelligence, and
            technology.
          </p>

          <div className="mt-10 flex items-center gap-4 rounded-2xl glass p-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent/15 font-display text-lg font-bold text-accent">
              ST
            </div>
            <div>
              <p className="font-semibold text-mist">Safwan Thabet</p>
              <p className="text-sm text-mist/50">Founder &amp; CEO, MarsX AI Solutions</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6"
        >
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl glass p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                <pillar.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-mist">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/55">
                {pillar.copy}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
