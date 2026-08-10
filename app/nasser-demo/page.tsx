import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nasser Demo | MarsX AI Solutions",
  description: "Watch Nasser, MarsX's AI digital human, in action.",
};

/**
 * Standalone demo landing page — reached via a "Watch the Demo" link in a
 * PDF presentation, not site navigation (see Nav.tsx / Footer.tsx, both opt
 * out on this route). Deliberately minimal: logo, eyebrow, video. Nothing
 * else competes with the video for attention.
 */
export default function NasserDemoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 py-16 sm:py-20">
      <Link href="/" aria-label="MarsX AI Solutions home">
        <Image
          src="/logo-full-transparent.png"
          alt="MarsX AI Solutions"
          width={1028}
          height={303}
          priority
          className="h-10 w-auto sm:h-12"
        />
      </Link>

      <span className="mt-10 text-xs font-semibold tracking-[0.3em] text-accent sm:mt-12">
        AI DIGITAL HUMAN
      </span>

      <div className="mt-8 w-full max-w-sm sm:mt-10 sm:max-w-md">
        <div style={{ padding: "138.87% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1217081790?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Nasser Demo 02"
          />
        </div>
      </div>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </main>
  );
}
