import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-mist/10 bg-black py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" aria-label="MarsX AI Solutions home">
              <Image
                src="/logo-full-transparent.png"
                alt="MarsX AI Solutions"
                width={1028}
                height={303}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-mist/50">
              {SITE.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-mist/40">
                NAVIGATE
              </p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist/60 transition-colors hover:text-mist"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-mist/40">
                CONTACT
              </p>
              <ul className="mt-4 space-y-3 text-sm text-mist/60">
                <li className="flex items-center gap-2.5">
                  <MapPin size={15} className="text-accent" />
                  {SITE.location}
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={15} className="text-accent" />
                  <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-mist">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={15} className="text-accent" />
                  <a href={SITE.phoneHref} className="transition-colors hover:text-mist">
                    {SITE.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-mist/10 pt-8 text-xs text-mist/40 sm:flex-row">
          <p>&copy; {year} MarsX AI Solutions. All Rights Reserved.</p>
          <p>{SITE.website}</p>
        </div>
      </div>
    </footer>
  );
}
