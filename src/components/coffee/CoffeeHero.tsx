"use client";

import PageHero from "@/components/layout/PageHero";
import { GlobeIcon } from "hugeicons-react";
import { COFFEE_HERO_BADGE_ICONS } from "@/lib/coffee";

const stats = [
  {
    value: "100% Ethiopian",
    label: "Authentic Origin",
    icon: COFFEE_HERO_BADGE_ICONS[0],
  },
  {
    value: "ECTA Licensed",
    label: "Certified Exporter",
    icon: COFFEE_HERO_BADGE_ICONS[1],
  },
  {
    value: "Scalable Volume",
    label: "Large Orders",
    icon: COFFEE_HERO_BADGE_ICONS[2],
  },
  {
    value: "19.2 MT",
    label: "Per Container",
    icon: COFFEE_HERO_BADGE_ICONS[3],
  },
];

const badgeIcon = (
  <GlobeIcon className="w-3.5 h-3.5 text-white/90" />
);

export default function CoffeeHero() {
  return (
    <PageHero
      backgroundImage="/cofee_hero.webp"
      badgeIcon={badgeIcon}
      badgeLabel="Export Division"
      heading="Premium Ethiopian Green Coffee Beans"
      description="Moti Engineering leverages two decades of leadership in Ethiopia's business sector to deliver premium coffee with banking-grade precision and reliability."
      primaryCta={{ href: "#portfolio", label: "Explore Our Coffee" }}
      secondaryCta={{ href: "/contact", label: "Get Quote" }}
      stats={stats}
      overlayClassName="from-[#005B94]/90 via-[#0073B2]/85 to-transparent"
      primaryButtonClassName="bg-white text-[#0F62FE] hover:bg-white/95 font-semibold"
      secondaryButtonClassName="bg-transparent text-white border-white/40 hover:bg-white/10 hover:border-white/60 font-medium"
      statIconContainerClassName="bg-white/10 border border-white/20"
      statLabelClassName="text-white/70"
    />
  );
}
