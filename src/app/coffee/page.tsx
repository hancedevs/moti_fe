import CoffeeHero from "@/components/coffee/CoffeeHero";
import WhyPartnerWithUs from "@/components/coffee/WhyPartnerWithUs";
import CoffeePortfolio from "@/components/coffee/CoffeePortfolio";
import CoffeeGradingTable from "@/components/coffee/CoffeeGradingTable";
import CoffeeRegions from "@/components/coffee/CoffeeRegions";
import CtaSection from "@/components/home/CtaSection";

export default function CoffeePage() {
  return (
    <>
      <CoffeeHero />
      <WhyPartnerWithUs />
      <CoffeePortfolio />
      <CoffeeGradingTable />
      <CoffeeRegions />
      <CtaSection />
    </>
  );
}
