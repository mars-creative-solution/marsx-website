import NasserHero from "@/components/home/NasserHero";
import AmbassadorsShowcase from "@/components/home/AmbassadorsShowcase";
import CustomizeSection from "@/components/home/CustomizeSection";
import DeployAnywhere from "@/components/home/DeployAnywhere";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <NasserHero />
      <AmbassadorsShowcase />
      <CustomizeSection />
      <DeployAnywhere />
      <SolutionsPreview />
      <IndustriesPreview />
      <HowItWorks />
      <ContactCTA />
    </>
  );
}
