import NasserHero from "@/components/home/NasserHero";
import AboutPreview from "@/components/home/AboutPreview";
import MeetNasser from "@/components/home/MeetNasser";
import PlatformPreview from "@/components/home/PlatformPreview";
import CustomizeSection from "@/components/home/CustomizeSection";
import HowItWorks from "@/components/home/HowItWorks";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <NasserHero />
      <AboutPreview />
      <MeetNasser />
      <PlatformPreview />
      <CustomizeSection />
      <HowItWorks />
      <SolutionsPreview />
      <IndustriesPreview />
      <ContactCTA />
    </>
  );
}
