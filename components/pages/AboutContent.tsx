"use client";

import { motion } from "framer-motion";
import { Eye, Compass } from "lucide-react";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { WHY_MARSX } from "@/lib/content";
import Icon from "../Icon";

export default function AboutContent() {
  return (
    <>
      {/* Intro */}
      <section className="relative bg-black pb-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-3xl px-6 text-center lg:px-10"
        >
          <p className="text-lg leading-relaxed text-mist/70">
            Artificial intelligence is changing the way organizations connect
            with people. MarsX AI Solutions develops enterprise AI technologies
            that combine intelligence, creativity, and human interaction into
            meaningful digital experiences.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-mist/60">
            We believe technology should simplify communication, enhance
            engagement, and create measurable value.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="relative bg-black py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:px-10">
          {[
            {
              icon: Eye,
              label: "Vision",
              text: "Transforming how organizations connect with people.",
            },
            {
              icon: Compass,
              label: "Mission",
              text: "Building intelligent AI experiences that connect organizations with people.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl glass-strong p-10"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                <item.icon size={22} />
              </div>
              <p className="text-xs font-semibold tracking-[0.3em] text-accent">
                {item.label.toUpperCase()}
              </p>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug text-mist">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="relative bg-charcoal/20 py-24 lg:py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-3xl px-6 text-center lg:px-10"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            WHAT WE DO
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Enterprise AI, built for modern organizations
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist/60">
            We design enterprise AI solutions that help organizations
            communicate smarter, engage better, and innovate faster. From AI
            Digital Humans to custom AI platforms, we build intelligent
            experiences for modern organizations.
          </p>
        </motion.div>
      </section>

      {/* Why MarsX */}
      <section className="relative bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-accent">
              WHY MARSX
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
              A partner engineered for enterprise
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {WHY_MARSX.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                className="group rounded-2xl glass p-6 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                  <Icon name={pillar.icon} size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-mist">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/55">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
