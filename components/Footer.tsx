import OrbitLogo from "./OrbitLogo";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Showcase" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-mist/10 bg-black py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-3">
              <OrbitLogo size={32} animated={false} glow={false} />
              <span className="font-display font-semibold tracking-wide">
                MARS<span className="text-accent">X</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-mist/50">
              AI avatars, Unreal Engine experiences, and intelligent
              automation for businesses building what&apos;s next.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-mist/40">
                NAVIGATE
              </p>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-mist/60 transition-colors hover:text-mist"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-mist/40">
                CONTACT
              </p>
              <ul className="mt-4 space-y-2 text-sm text-mist/60">
                <li>
                  <a href="tel:+971559431941" className="transition-colors hover:text-mist">
                    +971 55 943 1941
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@marsx.ae" className="transition-colors hover:text-mist">
                    hello@marsx.ae
                  </a>
                </li>
                <li>Dubai, UAE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-mist/10 pt-8 text-xs text-mist/40 sm:flex-row">
          <p>&copy; {year} MarsX AI Solutions. All rights reserved.</p>
          <p>marsx.ae &middot; Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
