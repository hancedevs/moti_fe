import HeroSection from "@/components/home/HeroSection";
import StatsBanner from "@/components/home/StatsBanner";
import AboutSection from "@/components/home/AboutSection";
import MissionValuesSection from "@/components/home/MissionValuesSection";
import ProductsSection from "@/components/home/ProductsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <AboutSection />
      <MissionValuesSection />
      <ProductsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
