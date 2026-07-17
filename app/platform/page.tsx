import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PlatformContent from "@/components/pages/PlatformContent";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "MarsX AI Platform | Enterprise AI Ecosystem",
  description:
    "The MarsX AI Platform is an enterprise AI ecosystem for intelligent customer interactions, automated communication, and digital transformation — built for scalability and enterprise security.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="MARSX AI PLATFORM"
        title="The intelligence behind every experience."
        intro="An enterprise AI ecosystem for intelligent customer interactions, automated communication, and digital transformation."
      />
      <PlatformContent />
      <ContactCTA />
    </>
  );
}
