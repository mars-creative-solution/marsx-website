import Hero from "@/components/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import PlatformPreview from "@/components/home/PlatformPreview";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PlatformPreview />
      <SolutionsPreview />
      <IndustriesPreview />
      <ContactCTA />
    </>
  );
}
