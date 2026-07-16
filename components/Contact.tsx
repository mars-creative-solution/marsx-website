"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send, CheckCircle2 } from "lucide-react";
import OrbitLogo from "./OrbitLogo";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Phone", value: "+971 55 943 1941", href: "tel:+971559431941" },
  { icon: Mail, label: "Email", value: "hello@marsx.ae", href: "mailto:hello@marsx.ae" },
  { icon: MapPin, label: "Location", value: "Dubai, UAE", href: undefined },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <section id="contact" className="relative bg-black py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-accent">
            CONTACT
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
            Let&apos;s build something intelligent
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Tell us about your project — we typically respond within one
            business day.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between rounded-3xl glass-strong p-8 lg:col-span-5"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-mist">
                Contact details
              </h3>
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
              <OrbitLogo size={72} animated={false} glow />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl glass-strong p-8 lg:col-span-7"
          >
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} className="text-accent" />
                <h3 className="mt-6 font-display text-xl font-semibold text-mist">
                  Message received
                </h3>
                <p className="mt-2 max-w-sm text-sm text-mist/55">
                  Thanks for reaching out. Our team will get back to you
                  shortly at the email you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mist/40">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-mist/10 bg-mist/5 px-4 py-3 text-sm text-mist placeholder:text-mist/30 outline-none transition-colors focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mist/40">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-mist/10 bg-mist/5 px-4 py-3 text-sm text-mist placeholder:text-mist/30 outline-none transition-colors focus:border-accent/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mist/40">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="w-full rounded-xl border border-mist/10 bg-mist/5 px-4 py-3 text-sm text-mist placeholder:text-mist/30 outline-none transition-colors focus:border-accent/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mist/40">
                    Project details
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us what you're looking to build..."
                    className="w-full resize-none rounded-xl border border-mist/10 bg-mist/5 px-4 py-3 text-sm text-mist placeholder:text-mist/30 outline-none transition-colors focus:border-accent/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.02] accent-glow disabled:opacity-60 sm:w-auto"
                >
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && <Send size={16} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
