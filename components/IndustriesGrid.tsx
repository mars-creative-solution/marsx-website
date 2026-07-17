"use client";

import { motion } from "framer-motion";
import { inView, stagger, staggerItem } from "@/lib/motion";
import { INDUSTRIES } from "@/lib/content";
import Icon from "./Icon";

type IndustriesGridProps = {
  // Compact = icon + name only (home preview); full = icon + name + description.
  variant?: "compact" | "full";
};

export default function IndustriesGrid({ variant = "full" }: IndustriesGridProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className={
        variant === "compact"
          ? "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {INDUSTRIES.map((industry) => (
        <motion.div
          key={industry.name}
          variants={staggerItem}
          className={`group rounded-2xl glass card-lift ${
            variant === "compact"
              ? "flex flex-col items-center gap-3 p-5 text-center"
              : "p-7"
          }`}
        >
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
            <Icon name={industry.icon} size={20} />
          </div>
          <h3
            className={`font-display font-semibold text-mist ${
              variant === "compact" ? "text-sm" : "mt-4 text-lg"
            }`}
          >
            {industry.name}
          </h3>
          {variant === "full" && (
            <p className="mt-2 text-sm leading-relaxed text-mist/55">
              {industry.description}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
