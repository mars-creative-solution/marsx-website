import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutContent from "@/components/pages/AboutContent";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About | MarsX AI Solutions",
  description:
    "MarsX AI Solutions develops enterprise AI technologies that combine intelligence, creativity, and human interaction into meaningful digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        title="About MarsX"
        intro="Enterprise AI technologies that combine intelligence, creativity, and human interaction into meaningful digital experiences."
      />
      <AboutContent />
      <ContactCTA />
    </>
  );
}
