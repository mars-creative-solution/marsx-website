"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { fadeUp, inView } from "@/lib/motion";
import { SITE } from "@/lib/content";
import { INTEREST_OPTIONS } from "@/lib/contact";
import OrbitLogo from "../OrbitLogo";

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Location", value: SITE.location, href: undefined },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactContent() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrors([]);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      interest: String(fd.get("interest") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrors(data.errors ?? ["Something went wrong. Please try again."]);
        setStatus("error");
      }
    } catch {
      setErrors(["Network error. Please try again."]);
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-mist/10 bg-mist/5 px-4 py-3 text-sm text-mist placeholder:text-mist/30 outline-none transition-colors focus:border-accent/50";
  const labelClass =
    "mb-2 block text-xs uppercase tracking-[0.2em] text-mist/40";

  return (
    <section className="relative bg-black pb-8 pt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Contact details */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="flex flex-col justify-between rounded-3xl glass-strong p-8 lg:col-span-5"
          >
            <div>
              <h2 className="font-display text-xl font-semibold text-mist">
                Contact Information
              </h2>
              <div className="mt-8 space-y-6">
                {CONTACT_ITEMS.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                      <c.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-mist/40">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-base font-medium text-mist transition-colors hover:text-accent"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-mist">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 py-10">
              <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
              <OrbitLogo size={72} glow />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="rounded-3xl glass-strong p-8 lg:col-span-7"
          >
            {status === "success" ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} className="text-accent" />
                <h3 className="mt-6 font-display text-xl font-semibold text-mist">
                  Message received
                </h3>
                <p className="mt-2 max-w-sm text-sm text-mist/55">
                  Thanks for reaching out. Our team will get back to you shortly
                  at the email you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input id="name" name="name" type="text" placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input id="email" name="email" type="email" placeholder="you@company.com" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Organization
                    </label>
                    <input id="company" name="company" type="text" placeholder="Company / entity" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="Optional" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className={labelClass}>
                    I&apos;m interested in
                  </label>
                  <select id="interest" name="interest" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select an area
                    </option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-charcoal text-mist">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what you're looking to build..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && errors.length > 0 && (
                  <div className="flex items-start gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-mist/80">
                    <AlertCircle size={16} className="mt-0.5 shrink-0 text-accent" />
                    <ul className="space-y-0.5">
                      {errors.map((err) => (
                        <li key={err}>{err}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.02] accent-glow disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <Send size={16} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
