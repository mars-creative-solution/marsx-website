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
              <p className="text-xs font-semibold tracking-[0.2em] text-mist/55">
                NAVIGATE
              </p>
              <ul className="mt-4 space-y-1 lg:space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="-mx-2 flex items-center rounded-lg px-2 py-2 text-sm text-mist/60 transition-colors hover:bg-mist/5 hover:text-mist lg:mx-0 lg:px-0 lg:py-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-mist/55">
                CONTACT
              </p>
              <ul className="mt-4 space-y-1 text-sm text-mist/60 lg:space-y-3">
                <li className="-mx-2 flex items-center gap-2.5 rounded-lg px-2 py-2 lg:mx-0 lg:px-0 lg:py-0">
                  <MapPin size={15} className="shrink-0 text-accent" />
                  {SITE.location}
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="-mx-2 flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-mist/5 hover:text-mist lg:mx-0 lg:px-0 lg:py-0"
                  >
                    <Mail size={15} className="shrink-0 text-accent" />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="-mx-2 flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-mist/5 hover:text-mist lg:mx-0 lg:px-0 lg:py-0"
                  >
                    <Phone size={15} className="shrink-0 text-accent" />
                    {SITE.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-mist/10 pt-8 text-xs text-mist/55 sm:flex-row">
          <p>&copy; {year} MarsX AI Solutions. All Rights Reserved.</p>
          <p>{SITE.website}</p>
        </div>
      </div>
    </footer>
  );
}
