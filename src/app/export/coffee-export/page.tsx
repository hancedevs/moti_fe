"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useGetCoffeeTypesQuery } from "@/store/api/apiSlice";
import PageHero from "@/components/layout/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";
import {
  ArrowRight02Icon,
  Award01Icon,
  Building01Icon,
  ChartIncreaseIcon,
  Coffee02Icon,
  GlobeIcon,
  Leaf01Icon,
  Location01Icon,
  MountainIcon,
  PackageIcon,
  Shield01Icon,
  TruckIcon,
  UserGroupIcon,
} from "hugeicons-react";

interface CoffeeTypeDetailed {
  id: number;
  name: string;
  origin: string;
  grade: string;
  description: string;
  imageUrl: string | null;
  altitude: string;
  processing: string;
  acidity: string;
  body: string;
  harvestSeason: string[];
  tastingNotes: string[];
  badgeText: string;
}

// Local fallback data if API is empty or down, matching the 7 standard types in screenshots
const FALLBACK_COFFEE_TYPES: CoffeeTypeDetailed[] = [
  {
    id: 1,
    name: "Yirgacheffe",
    origin: "Gedeo Zone",
    grade: "Grade 1",
    description: "Yirgacheffe coffee is world-renowned for its distinctive floral and citrus notes, often described as the most distinctive coffee Ethiopia has to offer. Its bright acidity and light-to-medium body are accompanied by intense aromas of jasmine, lemon blossom, and bergamot, leading to a clean, tea-like finish.",
    imageUrl: "/cofee_hero.webp.webp",
    altitude: "1,700 - 2,200m",
    processing: "Washed",
    acidity: "High",
    body: "Light",
    harvestSeason: ["OCTOBER", "NOVEMBER", "DECEMBER"],
    tastingNotes: ["Jasmine", "Lemon", "Bergamot", "Honey"],
    badgeText: "The Floral Icon"
  },
  {
    id: 2,
    name: "Guji",
    origin: "Guji Zone",
    grade: "Grade 1",
    description: "Guji coffee offers a complex and wild cup profile that has gained immense popularity among specialty coffee roasters. Characterized by its heavy body, medium acidity, and remarkable fruit-forward flavors, Guji coffees typically showcase tasting notes of ripe dark berries, tropical fruits, stone fruits, and sweet chocolate.",
    imageUrl: "/From Farm to Export.png",
    altitude: "1,800 - 2,300m",
    processing: "Natural",
    acidity: "Medium",
    body: "Full",
    harvestSeason: ["OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY"],
    tastingNotes: ["Berry", "Wine", "Chocolate", "Tropical Fruit"],
    badgeText: "The Fruit Powerhouse"
  },
  {
    id: 3,
    name: "Sidama",
    origin: "Sidama Region",
    grade: "Grade 2",
    description: "Sidama coffee is celebrated for its balanced and complex cup, which features crisp citrus acidity, medium-to-full body, and rich flavor depth. Sourced from various cooperatives in the southern highlands, this variety delivers consistent sweetness, notable honey and cane sugar flavors, and subtle notes of stone fruits like peaches and apricots.",
    imageUrl: "/Coffee Export.png",
    altitude: "1,500 - 2,200m",
    processing: "Washed",
    acidity: "Medium-High",
    body: "Medium",
    harvestSeason: ["OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY"],
    tastingNotes: ["Lemon", "Orange", "Honey", "Caramel"],
    badgeText: "The Balanced Classic"
  },
  {
    id: 4,
    name: "Kaffa",
    origin: "Kaffa Zone",
    grade: "Grade 3",
    description: "Hailing from the historic birthplace of wild Arabica coffee, Kaffa beans deliver a rustic, spicy, and earthy profile. Sourced from native forest coffee trees, it has a heavy body, medium acidity, and features tasting notes of black tea, cardamom, dark chocolate, and forest honey.",
    imageUrl: "/cofee_hero.webp.webp",
    altitude: "1,450 - 1,950m",
    processing: "Natural",
    acidity: "Medium",
    body: "Medium-Full",
    harvestSeason: ["OCTOBER", "NOVEMBER", "DECEMBER"],
    tastingNotes: ["Black Tea", "Cardamom", "Dark Chocolate", "Forest Honey"],
    badgeText: "The Cradle of Arabica"
  },
  {
    id: 5,
    name: "Shako",
    origin: "Bench Shako",
    grade: "Grade 4",
    description: "Sourced from the lush wild forests of Bench Maji, Shako coffee is known for its intense honeyed sweetness, floral aromatics, and clean, balanced cup. It exhibits a smooth body, mild acidity, and distinctive tasting notes of wildflower honey, brown sugar, and toasted almonds.",
    imageUrl: "/From Farm to Export.png",
    altitude: "1,500 - 1,850m",
    processing: "Natural",
    acidity: "Low-Medium",
    body: "Smooth",
    harvestSeason: ["NOVEMBER", "DECEMBER", "JANUARY"],
    tastingNotes: ["Wildflower Honey", "Brown Sugar", "Toasted Almonds"],
    badgeText: "The Honeyed Frontier"
  },
  {
    id: 6,
    name: "Limmu",
    origin: "Jimma Zone",
    grade: "Grade 2",
    description: "Limmu coffee is highly regarded for its sweet, clean, and spice-tinged flavor profile. Sourced from the western highlands of Jimma, it is traditionally wet-processed (washed), producing a sharp but pleasant winey acidity, medium body, and bright, spicy-floral undertones.",
    imageUrl: "/Coffee Export.png",
    altitude: "1,500 - 1,900m",
    processing: "Washed",
    acidity: "Medium-High",
    body: "Medium",
    harvestSeason: ["NOVEMBER", "DECEMBER", "JANUARY"],
    tastingNotes: ["Spicy-Floral", "Winey", "Citrus", "Honey"],
    badgeText: "The Spicy & Mellow Choice"
  },
  {
    id: 7,
    name: "Jimma",
    origin: "Jimma Zone",
    grade: "Grade 5",
    description: "Jimma coffee represents one of the largest export volumes of naturally processed Ethiopian Arabica coffee. It offers a bold, earthy, and robust body with low acidity. Sourced from the western plateaus, its cup profile is rich in cocoa, molasses, and dry spice notes, making it an excellent base for espresso blends.",
    imageUrl: "/cofee_hero.webp.webp",
    altitude: "1,400 - 1,800m",
    processing: "Natural",
    acidity: "Low",
    body: "Heavy/Robust",
    harvestSeason: ["OCTOBER", "NOVEMBER", "DECEMBER"],
    tastingNotes: ["Cocoa", "Molasses", "Earthy", "Dry Spice"],
    badgeText: "The Bold Foundation"
  }
];

// Utility: Abbreviates and formats month arrays like ["OCTOBER", "NOVEMBER", "DECEMBER"] -> "Oct - Dec"
function formatHarvestSeason(season: string[] | string | undefined): string {
  if (!season) return "Oct - Jan";
  if (typeof season === "string") return season;
  if (Array.isArray(season) && season.length > 0) {
    const abbreviate = (m: string) => {
      const cleaned = m.trim().toUpperCase();
      if (cleaned.startsWith("JAN")) return "Jan";
      if (cleaned.startsWith("FEB")) return "Feb";
      if (cleaned.startsWith("MAR")) return "Mar";
      if (cleaned.startsWith("APR")) return "Apr";
      if (cleaned.startsWith("MAY")) return "May";
      if (cleaned.startsWith("JUN")) return "Jun";
      if (cleaned.startsWith("JUL")) return "Jul";
      if (cleaned.startsWith("AUG")) return "Aug";
      if (cleaned.startsWith("SEP")) return "Sep";
      if (cleaned.startsWith("OCT")) return "Oct";
      if (cleaned.startsWith("NOV")) return "Nov";
      if (cleaned.startsWith("DEC")) return "Dec";
      return m.substring(0, 3);
    };
    const first = season[0];
    const last = season[season.length - 1];
    if (season.length === 1) return abbreviate(first);
    return `${abbreviate(first)} - ${abbreviate(last)}`;
  }
  return "Oct - Jan";
}

// Utility: Replaces underscores with spaces and capitalizes processing methods (e.g. SEMI_WASHED -> Semi Washed)
function formatProcessing(processing: string | undefined): string {
  if (!processing) return "Washed";
  return processing
    .replace(/_/g, " ")
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CoffeeExportPage() {
  const { data: apiCoffeeTypes } = useGetCoffeeTypesQuery();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  // Track expanded cards in inventory section
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Normalize API data to support fallback values for missing fields
  const coffeeTypes: CoffeeTypeDetailed[] = apiCoffeeTypes && apiCoffeeTypes.length > 0 
    ? apiCoffeeTypes.map((c, index) => {
        // Find if we have local details matching this type
        const fallback = FALLBACK_COFFEE_TYPES.find(
          (f) => c.name.toLowerCase().includes(f.name.toLowerCase())
        ) || FALLBACK_COFFEE_TYPES[index % FALLBACK_COFFEE_TYPES.length];

        return {
          id: c.id,
          name: c.name,
          origin: c.origin || fallback.origin,
          grade: c.grade || fallback.grade,
          description: c.description || fallback.description,
          imageUrl: c.imageUrl || fallback.imageUrl,
          altitude: (c as any).altitude || fallback.altitude,
          processing: (c as any).processing || fallback.processing,
          acidity: (c as any).acidity || fallback.acidity,
          body: (c as any).body || fallback.body,
          harvestSeason: (c as any).harvestSeason || fallback.harvestSeason,
          tastingNotes: (c as any).tastingNotes || fallback.tastingNotes,
          badgeText: (c as any).badgeText || fallback.badgeText,
        };
      })
    : FALLBACK_COFFEE_TYPES;

  // Set initial selected item
  useEffect(() => {
    if (coffeeTypes.length > 0 && selectedId === null) {
      setSelectedId(coffeeTypes[0].id);
    }
  }, [coffeeTypes, selectedId]);

  useEffect(() => {
    document.title = "Premium Ethiopian Coffee Export | MOTI Engineering";
  }, []);

  const activeCoffee = coffeeTypes.find((c) => c.id === selectedId) || coffeeTypes[0];

  const getImageUrl = (url: string | null) => {
    if (!url) return "/cofee_hero.webp.webp";
    if (url.startsWith("http")) return url;
    if (url.startsWith("/coffee-types")) {
      return `https://moti-be.onrender.com${url}`;
    }
    return url;
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 overflow-x-hidden">
      {/* 1. Hero Section */}
      <PageHero
        backgroundImage="/cofee_hero.webp.webp"
        badgeIcon={<Leaf01Icon className="w-4 h-4 text-white" />}
        badgeLabel="Coffee Export"
        heading="Premium Ethiopian Coffee Export"
        description="We deliver the finest select organic Arabica coffee varieties direct from the birthplace of coffee to global importers, roasters, and specialty markets."
        primaryCta={{ href: "/contact?subject=COFFEE_EXPORT", label: "Request Quote" }}
        secondaryCta={{ href: "#portfolio", label: "Learn More" }}
        stats={[
          {
            value: "100%",
            label: "Organic",
            icon: <Leaf01Icon className="w-5 h-5 text-white" />,
          },
          {
            value: "Specialty",
            label: "Grade",
            icon: <Shield01Icon className="w-5 h-5 text-white" />,
          },
          {
            value: "Direct",
            label: "Sourced",
            icon: <ChartIncreaseIcon className="w-5 h-5 text-white" />,
          },
          {
            value: "Global",
            label: "Delivery",
            icon: <PackageIcon className="w-5 h-5 text-white" />,
          },
        ]}
      />

      {/* 2. Elevating the Heritage of Ethiopian Coffee */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateInView className="mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E9F0F8] dark:bg-blue-900/20 text-[#5A8CD0] dark:text-blue-400 text-xs font-semibold tracking-wide border border-blue-100 dark:border-gray-700">
              About Our Coffee Division
            </span>
          </AnimateInView>

          <AnimateInView className="mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D6C] dark:text-blue-200 tracking-tight leading-tight">
              Elevating the Heritage of Ethiopian Coffee
            </h2>
          </AnimateInView>

          <AnimateInView className="max-w-3xl mx-auto mb-4">
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              At Moti Engineering PLC, we bridge the gap between Ethiopia's rich coffee heritage and the global market. While we have built a reputation for excellence in engineering, our coffee division is driven by the same precision, integrity, and commitment to quality.
            </p>
          </AnimateInView>

          <AnimateInView className="max-w-3xl mx-auto mb-10">
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              We specialize in <strong>high-volume Grades 3, 4, and 5</strong>, providing consistent, reliable supplies for roasters and wholesalers worldwide.
            </p>
          </AnimateInView>

          <AnimateInView className="inline-flex items-center gap-6 bg-[#5A8CD0] dark:bg-blue-700 text-white px-8 py-5 rounded-2xl font-bold shadow-lg shadow-blue-500/10 mb-16">
            <Award01Icon className="w-8 h-8 text-white shrink-0" />
            
            <div className="text-left">
              <p className="text-[10px] text-white/75 font-semibold uppercase tracking-wider mb-0.5">Certified Export Grades</p>
              <p className="text-3xl font-extrabold tracking-tight">G3 - G5</p>
            </div>
            
            <Shield01Icon className="w-8 h-8 text-white shrink-0" />
          </AnimateInView>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              {
                value: "7",
                label: "Varieties",
                icon: <PackageIcon className="w-7 h-7 text-[#5A8CD0] dark:text-blue-400" />,
              },
              {
                value: "500+",
                label: "Partner Farmers",
                icon: <UserGroupIcon className="w-7 h-7 text-[#5A8CD0] dark:text-blue-400" />,
              },
              {
                value: "20+",
                label: "Export Countries",
                icon: <GlobeIcon className="w-7 h-7 text-[#5A8CD0] dark:text-blue-400" />,
              },
              {
                value: "7",
                label: "Regions",
                icon: <MountainIcon className="w-7 h-7 text-[#5A8CD0] dark:text-blue-400" />,
              },
            ].map((stat, i) => (
              <AnimateInView key={i} delay={i * 0.1} y={20}>
                <div className="bg-white dark:bg-gray-800 border border-[#E0E6ED] dark:border-gray-700 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-md hover:border-blue-100 dark:hover:border-gray-600 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#E9F0F8] dark:bg-blue-900/20 flex items-center justify-center mb-5 border border-blue-50/50 dark:border-gray-600">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-extrabold text-[#001D6C] dark:text-blue-200 mb-1">{stat.value}</p>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ethiopian Coffee Portfolio (Sticky Sidebar Section) */}
      <section id="portfolio" className="w-full bg-[#f8f9fb] dark:bg-gray-900 py-20 border-t border-b border-[#E0E6ED] dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateInView className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#5A8CD0]/10 dark:bg-blue-500/10 text-[#5A8CD0] dark:text-blue-400 text-xs font-semibold tracking-wide uppercase border border-blue-500/10 dark:border-blue-500/20 mb-4">
              Our Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D6C] dark:text-blue-200 tracking-tight">
              Ethiopian Coffee Portfolio
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              Explore our range of premium single-origin Ethiopian coffee varieties, each boasting distinct flavor profiles, unique growing elevations, and meticulous processing methods.
            </p>
          </AnimateInView>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            <div className="lg:col-span-4 h-full">
              <div className="sticky top-24 self-start bg-white dark:bg-gray-800 border border-[#E0E6ED] dark:border-gray-700 rounded-2xl shadow-sm z-10 overflow-hidden">
                <div className="bg-[#5A8CD0] dark:bg-blue-700 px-5 py-4 text-white flex items-center gap-3">
                  <Coffee02Icon className="w-5 h-5 text-white shrink-0" />
                  <h3 className="text-base font-bold text-white">Coffee Types</h3>
                </div>
                
                <div className="p-3 flex flex-col gap-2">
                  {coffeeTypes.map((item, idx) => {
                    const isActive = item.id === selectedId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`w-full text-left p-3.5 rounded-xl flex items-center gap-4.5 transition-all duration-300 ${
                          isActive 
                            ? "bg-[#5A8CD0] dark:bg-blue-700 text-white shadow-md shadow-blue-500/10" 
                            : "bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-extrabold ${
                          isActive ? "bg-white/20 text-white" : "bg-[#E9F0F8] dark:bg-blue-900/20 text-[#5A8CD0] dark:text-blue-400"
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-sm font-bold truncate ${isActive ? "text-white" : "text-gray-900 dark:text-gray-100"}`}>
                            {item.name}
                          </p>
                          <p className={`text-xs truncate ${isActive ? "text-white/80" : "text-gray-400"}`}>
                            {item.badgeText}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-6">
              {activeCoffee && (
                <AnimateInView key={activeCoffee.id} y={20} className="w-full">
                  <div className="rounded-2xl overflow-hidden shadow-sm relative h-[380px] w-full border border-[#E0E6ED] dark:border-gray-700">
                    <img 
                      src={getImageUrl(activeCoffee.imageUrl)} 
                      alt={activeCoffee.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-[#5A8CD0] dark:bg-blue-700 text-white px-4 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wider shadow-md">
                      {activeCoffee.badgeText || "Specialty"}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-8 border border-[#E0E6ED] dark:border-gray-700 rounded-2xl shadow-sm mt-6">
                    <h2 className="text-3xl font-extrabold text-[#001D6C] dark:text-blue-200">{activeCoffee.name}</h2>
                    <div className="flex flex-wrap gap-4 mt-2 mb-6 text-sm text-gray-500 dark:text-gray-400 border-b border-[#E0E6ED] dark:border-gray-700 pb-4">
                      <span className="flex items-center gap-1.5 text-[#5A8CD0] dark:text-blue-400 font-semibold">
                        <Location01Icon className="w-4 h-4" />
                        {activeCoffee.origin}
                      </span>
                      <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <MountainIcon className="w-4 h-4" />
                        {activeCoffee.altitude}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-base">
                      {activeCoffee.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                      {[
                        { label: "Processing", value: formatProcessing(activeCoffee.processing) },
                        { label: "Acidity", value: activeCoffee.acidity },
                        { label: "Body", value: activeCoffee.body },
                        { label: "Harvest Season", value: formatHarvestSeason(activeCoffee.harvestSeason) },
                        { label: "Grades Available", value: activeCoffee.grade || "G3, G4, G5" },
                      ].map((spec, sIdx) => (
                        <div key={sIdx} className="bg-[#f8f9fb] dark:bg-gray-900 border border-[#E0E6ED] dark:border-gray-700 rounded-xl p-4">
                          <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-wider mb-1">{spec.label}</p>
                          <p className="text-sm font-bold text-[#001D6C] dark:text-blue-200 truncate">{spec.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <p className="text-sm font-bold text-[#161616] dark:text-white mb-3">Tasting Notes</p>
                      <div className="flex flex-wrap gap-2">
                        {(activeCoffee.tastingNotes || []).map((note, nIdx) => (
                          <span key={nIdx} className="bg-[#E9F0F8] dark:bg-blue-900/20 text-[#5A8CD0] dark:text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100/50 dark:border-gray-600">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href={`/contact?subject=PRODUCT_QUOTE&message=I%20would%20like%20to%20request%20a%20sample%20of%20${encodeURIComponent(activeCoffee.name)}%20coffee.`}
                      className="inline-flex items-center gap-2 bg-[#5A8CD0] dark:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#4A7AB8] hover:shadow-lg transition-all duration-300"
                    >
                      Request Coffee Sample
                      <ArrowRight02Icon className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimateInView>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 4. From Farm to Export Section */}
      <section 
        className="relative py-28 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url('/From Farm to Export.png')` }}
      >
        <div className="absolute inset-0 bg-[#5A8CD0]/70 backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-[#5A8CD0] text-xs font-semibold tracking-wide uppercase border border-white/20 mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              From Farm to Export
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              A journey of precision and quality from Ethiopian highlands to global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Harvesting",
                desc: "Hand-picked ripe cherries",
                icon: <Leaf01Icon className="w-6 h-6 text-white" />,
              },
              {
                step: "2",
                title: "Processing",
                desc: "Washed & natural processing",
                icon: <PackageIcon className="w-6 h-6 text-white" />,
              },
              {
                step: "3",
                title: "Quality Control",
                desc: "Rigorous grading",
                icon: <Shield01Icon className="w-6 h-6 text-white" />,
              },
              {
                step: "4",
                title: "Export",
                desc: "Global shipping",
                icon: <TruckIcon className="w-6 h-6 text-white" />,
              },
            ].map((card, i) => (
              <AnimateInView key={i} delay={i * 0.1} y={30}>
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#5A8CD0] dark:bg-blue-700 flex items-center justify-center mb-4 shadow-sm shadow-blue-500/10">
                    {card.icon}
                  </div>
                  <span className="text-xs font-bold text-[#5A8CD0] dark:text-blue-400 uppercase tracking-wider mb-1">
                    Step {card.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{card.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Partner with Moti Engineering? */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E9F0F8] dark:bg-blue-900/20 text-[#5A8CD0] dark:text-blue-400 text-xs font-semibold tracking-wide border border-blue-100 dark:border-gray-700 mb-4">
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D6C] dark:text-blue-200 tracking-tight">
              Why Partner with Moti Engineering?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Precision Quality Control",
                features: [
                  { label: "Moisture Content", val: "Maintained 10% – 12%" },
                  { label: "Grading", val: "Grades 3, 4 & 5 standards" },
                  { label: "Traceability", val: "Farm to container" },
                ],
                icon: <Award01Icon className="w-5 h-5 text-[#5A8CD0] dark:text-blue-400" />,
              },
              {
                title: "Strategic Logistics",
                features: [
                  { label: "Storage", val: "Climate-controlled" },
                  { label: "Shipping", val: "Djibouti corridor" },
                  { label: "Compliance", val: "EUDR ready" },
                ],
                icon: <TruckIcon className="w-5 h-5 text-[#5A8CD0] dark:text-blue-400" />,
              },
            ].map((box, i) => (
              <AnimateInView key={i} delay={i * 0.1} y={30}>
                <div className="bg-white dark:bg-gray-800 border border-[#E0E6ED] dark:border-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 dark:hover:border-gray-600 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#E9F0F8] dark:bg-blue-900/20 flex items-center justify-center mr-3 border border-blue-100/50 dark:border-gray-600">
                      {box.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#001D6C] dark:text-blue-200">{box.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {box.features.map((feat, fIdx) => (
                      <div key={fIdx} className="bg-[#F4F7FB] dark:bg-gray-900 rounded-xl px-5 py-3.5 flex justify-between items-center text-sm">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feat.label}</span>
                        <span className="text-[#5A8CD0] dark:text-blue-400 font-bold text-right">{feat.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Coffee Export Inventory */}
      <section 
        className="relative py-24 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url('/Coffee Export.png')` }}
      >
        <div className="absolute inset-0 bg-[#5A8CD0]/85 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wide uppercase border border-white/25 mb-4">
              Inventory
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Coffee Export Inventory
            </h2>
            <p className="text-white/80 text-base">
              Premium Ethiopian coffee certified Grades 3, 4 & 5 ready for immediate export
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[
              { val: `${coffeeTypes.length}`, label: "Varieties" },
              { val: "G3-G5", label: "Certified" },
              { val: `${coffeeTypes.length}`, label: "Regions" },
              { val: "100%", label: "Ready Stock" },
            ].map((pill, i) => (
              <div 
                key={i} 
                className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-6 py-4 text-center min-w-[140px] flex flex-col items-center justify-center"
              >
                <p className="text-2xl font-extrabold text-white leading-tight">{pill.val}</p>
                <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider mt-1">{pill.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {coffeeTypes.map((item) => {
              const isExpanded = !!expandedIds[item.id];
              return (
                <div 
                  key={item.id}
                  onClick={() => toggleExpand(item.id)}
                  className="bg-[#1E40AF]/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:bg-[#1E40AF]/45 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Cup icon + Name & Origin */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#5A8CD0] flex items-center justify-center shadow-md shrink-0">
                        <Coffee02Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white leading-tight">{item.name}</h4>
                        <p className="text-xs text-white/70 font-medium flex items-center gap-1 mt-0.5">
                          <Location01Icon className="w-3.5 h-3.5" />
                          {item.origin}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row showing grade label and toggle link */}
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider border border-white/20 px-2.5 py-0.5 rounded-full">
                        G3 - G5
                      </span>
                      <button 
                        type="button"
                        className="text-white hover:text-[#5A8CD0] text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        {isExpanded ? "Collapse" : "Details"}
                        <span className={`transform transition-transform ${isExpanded ? "rotate-90" : ""}`}>→</span>
                      </button>
                    </div>

                    {/* Interactive Collapsible Panel with Framer Motion */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-white/10 mt-4 pt-4 text-left"
                          onClick={(e) => e.stopPropagation()} // Prevent double toggle when clicking inside
                        >
                          <p className="text-white/80 text-xs leading-relaxed mb-4">
                            {item.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {[
                              { label: "Processing", value: formatProcessing(item.processing) },
                              { label: "Altitude", value: item.altitude },
                              { label: "Acidity", value: item.acidity },
                              { label: "Body", value: item.body },
                              { label: "Harvest", value: formatHarvestSeason(item.harvestSeason) },
                            ].map((spec, idx) => (
                              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                                <p className="text-white/50 text-[9px] uppercase font-bold tracking-wider mb-0.5">{spec.label}</p>
                                <p className="text-xs font-bold text-white truncate">{spec.value}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mb-4">
                            <p className="text-[10px] uppercase font-bold text-white/50 tracking-wider mb-1.5">Tasting Notes</p>
                            <div className="flex flex-wrap gap-1.5">
                              {(item.tastingNotes || []).map((note, idx) => (
                                <span 
                                  key={idx}
                                  className="bg-white/10 text-white border border-white/15 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                                >
                                  {note}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Link
                            href={`/contact?subject=PRODUCT_QUOTE&message=I%20would%20like%20to%20request%20samples%20and%20pricing%20for%20${encodeURIComponent(item.name)}%20coffee.`}
                            className="w-full justify-center py-2.5 bg-[#5A8CD0] hover:bg-[#4A7AB8] text-white text-xs font-bold rounded-xl transition-colors shadow-md flex items-center gap-1.5"
                          >
                            Request a Sample
                            <span>→</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact?subject=PRODUCT_QUOTE&message=I%20would%20like%20to%20request%20a%20custom%20order%20for%20Ethiopian%20coffee."
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-[#5A8CD0] dark:text-blue-400 px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Request Custom Order
              <ArrowRight02Icon className="w-4 h-4 text-[#5A8CD0] dark:text-blue-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Quality Control Checklist */}
      <section className="bg-[#5A8CD0] dark:bg-blue-800 py-12 text-white border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide uppercase border border-white/20 mb-3">
              QC Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Quality Control Checklist
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Moisture", value: "10.5% - 12.0%" },
              { title: "Defects", value: "Under 1%" },
              { title: "Density", value: "Over 700g/L" },
              { title: "Color", value: "Uniform Green" },
            ].map((check, i) => (
              <AnimateInView key={i} delay={i * 0.08} y={20}>
                <div className="border border-white/20 bg-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30 mb-3">
                    <span className="text-green-400 font-bold text-xs">✓</span>
                  </div>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider mb-0.5">{check.title}</p>
                  <p className="text-sm font-extrabold text-white">{check.value}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Ready to Import Ethiopian Coffee? */}
      <section className="py-20 bg-[#F4F7FB] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#5A8CD0]/10 dark:bg-blue-500/10 text-[#5A8CD0] dark:text-blue-400 text-xs font-semibold tracking-wide uppercase border border-blue-500/10 dark:border-blue-500/20 mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D6C] dark:text-blue-200 tracking-tight mb-4">
              Ready to Import Ethiopian Coffee?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Contact our team today to discuss sourcing, pricing, or to request coffee samples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "General Inquiries",
                desc: "For general questions about our coffee division, sourcing capacities, or business operations.",
                btnText: "Contact Us",
                href: "/contact?subject=GENERAL_INQUIRY",
                icon: <ChartIncreaseIcon className="w-6 h-6 text-[#5A8CD0] dark:text-blue-400" />,
              },
              {
                title: "Sample Requests",
                desc: "Request green coffee samples to evaluate grading, moisture, and cup profiles for your roasting needs.",
                btnText: "Order Samples",
                href: "/contact?subject=PRODUCT_QUOTE",
                icon: <PackageIcon className="w-6 h-6 text-[#5A8CD0] dark:text-blue-400" />,
              },
              {
                title: "Visit Our Farm",
                desc: "Schedule a visit to our sourcing partners and washing stations to experience our process firsthand.",
                btnText: "Book a Visit",
                href: "/contact?subject=OTHER",
                icon: <Building01Icon className="w-6 h-6 text-[#5A8CD0] dark:text-blue-400" />,
              },
            ].map((card, i) => (
              <AnimateInView key={i} delay={i * 0.1} y={30}>
                <div className="bg-white dark:bg-gray-800 border border-[#E0E6ED] dark:border-gray-700 rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9F0F8] dark:bg-blue-900/20 mb-6 border border-blue-100 dark:border-gray-600">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001D6C] dark:text-blue-200 mb-3">{card.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">{card.desc}</p>
                  </div>
                  <Link
                    href={card.href}
                    className="w-full inline-flex justify-center items-center bg-[#5A8CD0] dark:bg-blue-700 px-5 py-3 rounded-xl text-sm font-bold text-white shadow-sm hover:bg-[#4A7AB8] transition-colors"
                  >
                    {card.btnText}
                  </Link>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
