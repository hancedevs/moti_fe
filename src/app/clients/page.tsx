import ClientsHero from "@/components/clients/ClientsHero";
import ClientCategories from "@/components/clients/ClientCategories";
import WhyClientsTrustUs from "@/components/clients/WhyClientsTrustUs";
import CtaSection from "@/components/home/CtaSection";

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientCategories />
      <WhyClientsTrustUs />
      <CtaSection />
    </>
  );
}
