"use client";

import { motion } from "framer-motion";
import { Bot, Box, Workflow, Code2, BarChart3, Puzzle } from "lucide-react";

const PROJECTS = [
  {
    icon: Bot,
    category: "AI Avatars",
    title: "Digital Concierge",
    copy: "A multilingual AI host for a hospitality group, handling guest queries around the clock.",
  },
  {
    icon: Box,
    category: "Unreal Engine",
    title: "ShowroomX",
    copy: "A real-time virtual showroom letting customers configure and explore products in 3D.",
  },
  {
    icon: Workflow,
    category: "AI Automation",
    title: "OpsFlow Engine",
    copy: "An automation layer connecting CRM, finance, and support tools into one intelligent pipeline.",
  },
  {
    icon: Code2,
    title: "Ventures Platform",
    category: "Software Development",
    copy: "A custom operations platform built to manage multi-brand business workflows at scale.",
  },
  {
    icon: BarChart3,
    category: "Analytics",
    title: "Insight Dashboard",
    copy: "A real-time analytics suite turning fragmented data into a single source of truth.",
  },
  {
    icon: Puzzle,
    category: "Business Solutions",
    title: "Intelligent Retail Suite",
    copy: "An end-to-end AI system spanning inventory, personalization, and customer engagement.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-charcoal/20 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            PORTFOLIO
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Selected work
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            A representative look at the kind of systems and experiences we
            design across our core disciplines.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl glass"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal to-black">
                <div className="absolute inset-0 grid-overlay opacity-20" />
                <div className="absolute h-28 w-28 rounded-full bg-accent/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <project.icon
                  size={40}
                  className="relative text-accent/80 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-accent">
                  {project.category.toUpperCase()}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-mist">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/55">
                  {project.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
