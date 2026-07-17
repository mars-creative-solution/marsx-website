import type { Metadata, Viewport } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  title: {
    default: "MarsX AI Solutions | AI Digital Humans & Enterprise AI",
    template: "%s",
  },
  description:
    "MarsX AI Solutions creates AI Digital Humans and enterprise AI experiences — powered by the MarsX AI Platform and SABR knowledge foundation. Built for governments, exhibitions, museums, and large organizations. Dubai, UAE.",
  keywords: [
    "MarsX",
    "AI Digital Humans",
    "enterprise AI",
    "MarsX AI Platform",
    "SABR",
    "AI experiences",
    "Unreal Engine",
    "Dubai AI company",
  ],
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "MarsX AI Solutions | AI Digital Humans & Enterprise AI",
    description:
      "AI Digital Humans and enterprise AI experiences, powered by the MarsX AI Platform. Engineered in Dubai for organizations that lead.",
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
