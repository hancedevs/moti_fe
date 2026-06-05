import ClientsHero from "@/components/clients/ClientsHero";
import ClientCategories from "@/components/clients/ClientCategories";
import WhyClientsTrustUs from "@/components/clients/WhyClientsTrustUs";
import ClientsCta from "@/components/clients/ClientsCta";

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientCategories />
      <WhyClientsTrustUs />
      <ClientsCta />
    </>
  );
}
