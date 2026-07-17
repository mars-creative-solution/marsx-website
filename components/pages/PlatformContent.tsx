"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger, staggerItem } from "@/lib/motion";
import { PLATFORM_HIGHLIGHTS } from "@/lib/content";
import Button from "../Button";
import Icon from "../Icon";
import OrbitLogo from "../OrbitLogo";
import ImmersiveShowcase from "../ImmersiveShowcase";

export default function PlatformContent() {
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
            The MarsX AI Platform is an enterprise AI ecosystem designed to
            power intelligent customer interactions, automate communication, and
            support digital transformation.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-mist/60">
            Built with flexibility, scalability, and enterprise security at its
            core, the platform enables organizations to deploy AI experiences
            with confidence.
          </p>
        </motion.div>
      </section>

      {/* Platform Highlights */}
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
              PLATFORM HIGHLIGHTS
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
              Everything an enterprise needs to deploy AI
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PLATFORM_HIGHLIGHTS.map((h) => (
              <motion.div
                key={h.title}
                variants={staggerItem}
                className="group rounded-2xl glass p-6 card-lift"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                  <Icon name={h.icon} size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-mist">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/55">
                  {h.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flagship: AI Digital Human */}
      <section className="relative overflow-hidden bg-charcoal/20 py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 opacity-10">
          <OrbitLogo size={380} animated={false} glow={false} />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-accent">
              FLAGSHIP EXPERIENCE
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
              AI Digital Human
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist/60">
              Our flagship AI experience. Deliver natural conversations through
              realistic digital humans capable of answering questions,
              presenting information, and engaging visitors across exhibitions,
              customer service, and public spaces.
            </p>
            <div className="mt-8">
              <Button href="/contact" withArrow>
                Book a Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="relative flex h-80 items-center justify-center rounded-3xl glass-strong"
          >
            <div className="pointer-events-none absolute inset-0 grid-overlay noise-mask rounded-3xl opacity-20" />
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-48 w-48 rounded-full bg-accent/20 blur-3xl"
            />
            <OrbitLogo size={150} />
          </motion.div>
        </div>
      </section>

      {/* Immersive showcase (AI avatars + Unreal Engine) */}
      <ImmersiveShowcase
        eyebrow="IMMERSIVE AI"
        heading="Experiences that stop people in their tracks"
        intro="The AI Digital Humans and real-time Unreal Engine environments the platform powers — engineered for exhibitions, museums, and flagship spaces."
      />

      {/* Built for Growth */}
      <section className="relative bg-black py-24 lg:py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-3xl px-6 text-center lg:px-10"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            BUILT FOR GROWTH
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            A platform that evolves with you
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist/60">
            The MarsX AI Platform is designed to evolve with your organization,
            supporting future AI capabilities and expanding as your business
            grows.
          </p>
        </motion.div>
      </section>
    </>
  );
}
