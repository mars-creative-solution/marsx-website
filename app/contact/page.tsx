import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact | MarsX AI Solutions",
  description:
    "Let's build something extraordinary. Book a demo or contact the MarsX AI Solutions team in Dubai to deploy AI Digital Humans and enterprise AI solutions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Let's build something extraordinary."
        intro="Whether you're looking to deploy AI Digital Humans, develop enterprise AI solutions, or explore the possibilities of artificial intelligence, our team is ready to help."
      />
      <ContactContent />
      <div className="h-16 bg-black lg:h-24" />
    </>
  );
}
