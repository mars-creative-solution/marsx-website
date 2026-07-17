"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "glass-strong border-mist/10"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 transition-all duration-300 lg:px-10 ${
          scrolled ? "py-3.5" : "py-5 lg:py-6"
        }`}
      >
        <Link href="/" className="flex items-center" aria-label="MarsX AI Solutions home">
          <Image
            src="/logo-full-transparent.png"
            alt="MarsX AI Solutions"
            width={1028}
            height={303}
            priority
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
            }`}
          />
        </Link>

        <div className="hidden items-center justify-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[0.9rem] font-medium tracking-tight transition-colors ${
                isActive(link.href) ? "text-mist" : "text-mist/55 hover:text-mist"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105 hover:bg-accent/90 lg:inline-block"
          >
            Book a Demo
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-mist/15 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-mist/5 ${
                    isActive(link.href) ? "text-accent" : "text-mist/80 hover:text-mist"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-black"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
