"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Box,
  Workflow,
  Code2,
  BarChart3,
  Puzzle,
} from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Avatars & Virtual Assistants",
    copy: "Lifelike digital humans and conversational agents that represent your brand, support customers, and work around the clock.",
  },
  {
    icon: Box,
    title: "Unreal Engine Solutions",
    copy: "Real-time 3D environments, digital twins, and interactive experiences built on cinematic-grade Unreal Engine technology.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    copy: "Intelligent workflows that eliminate repetitive work, connect your tools, and let your team focus on what matters.",
  },
  {
    icon: Code2,
    title: "Software Development",
    copy: "Custom web, mobile, and platform engineering — built to scale, designed to last, and shipped with precision.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Dashboards",
    copy: "Clear, real-time visibility into your business through dashboards that turn raw data into decisions.",
  },
  {
    icon: Puzzle,
    title: "Intelligent Business Solutions",
    copy: "End-to-end strategy and systems that bring AI into the core of how your business operates and grows.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal/20 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            WHAT WE DO
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Services engineered for the next decade
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            From digital humans to enterprise-grade platforms, we cover the
            full spectrum of applied AI and software.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl glass p-8 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/20" />
              <div className="relative mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                <service.icon size={22} />
              </div>
              <h3 className="relative font-display text-xl font-semibold text-mist">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-mist/55">
                {service.copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
