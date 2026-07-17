import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import IndustriesGrid from "@/components/IndustriesGrid";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Industries | MarsX AI Solutions",
  description:
    "MarsX AI Solutions serves government, healthcare, education, finance, hospitality, retail, events, museums, real estate, and enterprise organizations.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="INDUSTRIES"
        title="Trusted across industries."
        intro="Designed for organizations across every sector."
      />
      <section className="relative bg-black pb-8 pt-4 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <IndustriesGrid variant="full" />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
