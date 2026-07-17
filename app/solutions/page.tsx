import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SolutionsContent from "@/components/pages/SolutionsContent";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Solutions | MarsX AI Solutions",
  description:
    "Enterprise AI solutions from MarsX: SABR (Enterprise AI Knowledge Foundation), immersive AI Experiences, and Custom AI Solutions tailored to your business.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="SOLUTIONS"
        title="Enterprise AI Solutions"
        intro="Solutions designed to solve complex business challenges while creating exceptional customer experiences."
      />
      <SolutionsContent />
      <ContactCTA />
    </>
  );
}
