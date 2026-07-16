import type { Metadata, Viewport } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marsx.ae"),
  title: "MarsX AI Solutions | AI Avatars, Automation & Unreal Engine Experiences",
  description:
    "MarsX AI Solutions builds AI avatars, Unreal Engine experiences, intelligent automation, and premium software for forward-thinking businesses. Based in Dubai, UAE.",
  keywords: [
    "MarsX",
    "AI avatars",
    "Unreal Engine",
    "AI automation",
    "software development",
    "Dubai AI agency",
    "intelligent business solutions",
  ],
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "MarsX AI Solutions",
    description:
      "AI avatars, Unreal Engine experiences, automation and intelligent business solutions — engineered in Dubai.",
    url: "https://marsx.ae",
    siteName: "MarsX AI Solutions",
    images: ["/logo-full.png"],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${exo2.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-mist overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
