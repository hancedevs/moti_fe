"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useGetCoffeeTypesQuery } from "@/store/api/apiSlice";
import PageHero from "@/components/layout/PageHero";
import AnimateInView from "@/components/ui/AnimateInView";
import {
  Leaf01Icon,
  Shield01Icon,
  ChartIncreaseIcon,
  PackageIcon,
  Coffee01Icon,
  ArrowRight02Icon,
  Location01Icon,
  MountainIcon,
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
    <div className="w-full bg-white font-sans text-gray-900 overflow-x-hidden">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateInView className="mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EDF5FF] text-[#0082B4] text-xs font-semibold tracking-wide border border-blue-100">
              About Our Coffee Division
            </span>
          </AnimateInView>

          <AnimateInView className="mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D6C] tracking-tight leading-tight">
              Elevating the Heritage of Ethiopian Coffee
            </h2>
          </AnimateInView>

          <AnimateInView className="max-w-3xl mx-auto mb-4">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At Moti Engineering PLC, we bridge the gap between Ethiopia's rich coffee heritage and the global market. While we have built a reputation for excellence in engineering, our coffee division is driven by the same precision, integrity, and commitment to quality.
            </p>
          </AnimateInView>

          <AnimateInView className="max-w-3xl mx-auto mb-10">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We specialize in <strong>high-volume Grades 3, 4, and 5</strong>, providing consistent, reliable supplies for roasters and wholesalers worldwide.
            </p>
          </AnimateInView>

          <AnimateInView className="inline-flex items-center gap-6 bg-[#0F62FE] text-white px-8 py-5 rounded-2xl font-bold shadow-lg shadow-blue-500/10 mb-16">
            {/* Ribbon Badge SVG */}
            <svg className="w-8 h-8 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a4 4 0 100-8 4 4 0 000 8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v6l-2-2-2 2v-6" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v6l2-2 2 2v-6" />
            </svg>
            
            <div className="text-left">
              <p className="text-[10px] text-white/75 font-semibold uppercase tracking-wider mb-0.5">Certified Export Grades</p>
              <p className="text-3xl font-extrabold tracking-tight">G3 - G5</p>
            </div>
            
            {/* Shield SVG */}
            <svg className="w-8 h-8 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </AnimateInView>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              {
                value: "7",
                label: "Varieties",
                icon: (
                  <svg className="w-7 h-7 text-[#0F62FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v1a2 2 0 01-2 2h-2m0-5V6a3 3 0 00-3-3H6a3 3 0 00-3 3v7a6 6 0 006 6h4a6 6 0 006-6V8zm-2 11h-8" />
                  </svg>
                ),
              },
              {
                value: "500+",
                label: "Partner Farmers",
                icon: (
                  <svg className="w-7 h-7 text-[#0F62FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                value: "20+",
                label: "Export Countries",
                icon: (
                  <svg className="w-7 h-7 text-[#0F62FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
                  </svg>
                ),
              },
              {
                value: "7",
                label: "Regions",
                icon: (
                  <svg className="w-7 h-7 text-[#0F62FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 20h18M3 20l7-14 4 8 2-4 5 10" />
                  </svg>
                ),
              },
            ].map((stat, i) => (
              <AnimateInView key={i} delay={i * 0.1} y={20}>
                <div className="bg-white border border-[#E0E6ED] p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-md hover:border-blue-100 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#EDF5FF] flex items-center justify-center mb-5 border border-blue-50/50">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-extrabold text-[#001D6C] mb-1">{stat.value}</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ethiopian Coffee Portfolio (Sticky Sidebar Section) */}
      <section id="portfolio" className="w-full bg-[#F4F7FB] py-20 border-t border-b border-[#E0E6ED]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateInView className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0F62FE]/10 text-[#0F62FE] text-xs font-semibold tracking-wide uppercase border border-blue-500/10 mb-4">
              Our Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D6C] tracking-tight">
              Ethiopian Coffee Portfolio
            </h2>
            <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              Explore our range of premium single-origin Ethiopian coffee varieties, each boasting distinct flavor profiles, unique growing elevations, and meticulous processing methods.
            </p>
          </AnimateInView>

          {/* 2-Column Core Workspace Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* LEFT COLUMN TRACK: Houses the Sticky Card Container */}
            <div className="lg:col-span-4 h-full">
              {/* THE STICKY SIDEBAR CARD */}
              <div className="sticky top-24 self-start bg-white border border-[#E0E6ED] rounded-2xl shadow-sm z-10 overflow-hidden">
                <div className="bg-[#0F62FE] px-5 py-4 text-white flex items-center gap-3">
                  <svg className="w-5 h-5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v1a2 2 0 01-2 2h-2m0-5V6a3 3 0 00-3-3H6a3 3 0 00-3 3v7a6 6 0 006 6h4a6 6 0 006-6V8zm-2 11h-8" />
                  </svg>
                  <h3 className="text-base font-bold text-white">
                    Coffee Types
                  </h3>
                </div>
                
                {/* Scrollable list container - constrained to show only the first 6 (approx 390px) */}
                <div className="p-3 flex flex-col gap-2 overflow-y-auto h-[390px] scrollbar-thin">
                  {coffeeTypes.map((item, idx) => {
                    const isActive = item.id === selectedId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`w-full text-left p-3.5 rounded-xl flex items-center gap-4.5 transition-all duration-300 ${
                          isActive 
                            ? "bg-[#0F62FE] text-white shadow-md shadow-blue-500/10" 
                            : "bg-transparent text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-extrabold ${
                          isActive ? "bg-white/20 text-white" : "bg-[#EDF5FF] text-[#0F62FE]"
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-sm font-bold truncate ${isActive ? "text-white" : "text-gray-900"}`}>
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

            {/* RIGHT COLUMN PANEL: Tall dynamic scrollable content area */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {activeCoffee && (
                <AnimateInView key={activeCoffee.id} y={20} className="w-full">
                  {/* Main Visual Display Block (Farm Photo) */}
                  <div className="rounded-2xl overflow-hidden shadow-sm relative h-[380px] w-full border border-[#E0E6ED]">
                    <img 
                      src={getImageUrl(activeCoffee.imageUrl)} 
                      alt={activeCoffee.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-[#0082B4] text-white px-4 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wider shadow-md">
                      {activeCoffee.badgeText || "Specialty"}
                    </div>
                  </div>

                  {/* Technical Data Display Segment Card */}
                  <div className="bg-white p-8 border border-[#E0E6ED] rounded-2xl shadow-sm mt-6">
                    <h2 className="text-3xl font-extrabold text-[#001D6C]">{activeCoffee.name}</h2>
                    <div className="flex flex-wrap gap-4 mt-2 mb-6 text-sm text-gray-500 border-b border-[#E0E6ED] pb-4">
                      <span className="flex items-center gap-1.5 text-[#0082B4] font-semibold">
                        <Location01Icon className="w-4 h-4" />
                        {activeCoffee.origin}
                      </span>
                      <span className="hidden sm:inline text-gray-300">|</span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <MountainIcon className="w-4 h-4" />
                        {activeCoffee.altitude}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 text-base">
                      {activeCoffee.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                      {[
                        { label: "Processing", value: formatProcessing(activeCoffee.processing) },
                        { label: "Acidity", value: activeCoffee.acidity },
                        { label: "Body", value: activeCoffee.body },
                        {
                          label: "Harvest Season",
                          value: formatHarvestSeason(activeCoffee.harvestSeason),
                        },
                        { label: "Grades Available", value: activeCoffee.grade || "G3, G4, G5" },
                      ].map((spec, sIdx) => (
                        <div key={sIdx} className="bg-[#F4F7FB] border border-[#E0E6ED] rounded-xl p-4">
                          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">{spec.label}</p>
                          <p className="text-sm font-bold text-[#001D6C] truncate">{spec.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <p className="text-sm font-bold text-[#161616] mb-3">Tasting Notes</p>
                      <div className="flex flex-wrap gap-2">
                        {(activeCoffee.tastingNotes || []).map((note, nIdx) => (
                          <span 
                            key={nIdx}
                            className="bg-[#EDF5FF] text-[#0082B4] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100/50"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href={`/contact?subject=PRODUCT_QUOTE&message=I%20would%20like%20to%20request%20a%20sample%20of%20${encodeURIComponent(activeCoffee.name)}%20coffee.`}
                      className="inline-flex items-center gap-2 bg-[#0F62FE] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#0B4FCD] hover:shadow-lg transition-all duration-300"
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
        <div className="absolute inset-0 bg-[#0F62FE]/70 backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-[#0F62FE] text-xs font-semibold tracking-wide uppercase border border-white/20 mb-4">
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
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 5v14M12 9c2-1 4-1 5 1m-5 3c-2-1-4-1-5 1" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Processing",
                desc: "Washed & natural processing",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 3h12v4H6zM6 7v10a4 4 0 004 4h4a4 4 0 004-4V7" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Quality Control",
                desc: "Rigorous grading",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                step: "4",
                title: "Export",
                desc: "Global shipping",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm11 0a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 17H3V6a2 2 0 012-2h9v13m0 0h2m-6 0h4m2 0h2v-4h3l3.5-4.5V17M14 8h6" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <AnimateInView key={i} delay={i * 0.1} y={30}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#0F62FE] flex items-center justify-center mb-4 shadow-sm shadow-blue-500/10">
                    {card.icon}
                  </div>
                  <span className="text-xs font-bold text-[#0F62FE] uppercase tracking-wider mb-1">
                    Step {card.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Partner with Moti Engineering? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EDF5FF] text-[#0082B4] text-xs font-semibold tracking-wide border border-blue-100 mb-4">
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D6C] tracking-tight">
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
                icon: (
                  <svg className="w-5 h-5 text-[#0F62FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a4 4 0 100-8 4 4 0 000 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v6l-2-2-2 2v-6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v6l2-2 2 2v-6" />
                  </svg>
                ),
              },
              {
                title: "Strategic Logistics",
                features: [
                  { label: "Storage", val: "Climate-controlled" },
                  { label: "Shipping", val: "Djibouti corridor" },
                  { label: "Compliance", val: "EUDR ready" },
                ],
                icon: (
                  <svg className="w-5 h-5 text-[#0F62FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm11 0a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 17H3V6a2 2 0 012-2h9v13m0 0h2m-6 0h4m2 0h2v-4h3l3.5-4.5V17M14 8h6" />
                  </svg>
                ),
              },
            ].map((box, i) => (
              <AnimateInView key={i} delay={i * 0.1} y={30}>
                <div className="bg-white border border-[#E0E6ED] p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#EDF5FF] flex items-center justify-center mr-3 border border-blue-100/50">
                      {box.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#001D6C]">{box.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {box.features.map((feat, fIdx) => (
                      <div key={fIdx} className="bg-[#F4F7FB] rounded-xl px-5 py-3.5 flex justify-between items-center text-sm">
                        <span className="text-gray-700 font-medium">{feat.label}</span>
                        <span className="text-[#0F62FE] font-bold text-right">{feat.val}</span>
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
        <div className="absolute inset-0 bg-[#0F62FE]/85 backdrop-blur-[2px]" />
        
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                      <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center shadow-md shrink-0">
                        <Coffee01Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white leading-tight">{item.name}</h4>
                        <p className="text-xs text-white/70 font-medium flex items-center gap-1 mt-0.5">
                          <Location01Icon className="w-3.5 h-3.5" />
                          {item.origin}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row showing badges and toggle link */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-1.5">
                        {["G3", "G4", "G5"].map((grade) => (
                          <span 
                            key={grade}
                            className="bg-green-500/15 text-green-300 text-[10px] font-bold border border-green-500/30 px-2.5 py-0.5 rounded-full"
                          >
                            {grade}
                          </span>
                        ))}
                      </div>
                      <button 
                        type="button"
                        className="text-white hover:text-[#F97316] text-xs font-semibold flex items-center gap-1 transition-colors"
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
                            className="w-full justify-center py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-xl transition-colors shadow-md flex items-center gap-1.5"
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
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F62FE] px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors"
            >
              Request Custom Order
              <ArrowRight02Icon className="w-4 h-4 text-[#0F62FE]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Quality Control Checklist */}
      <section className="bg-[#0F62FE] py-20 text-white border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide uppercase border border-white/20 mb-4">
              QC Checklist
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Quality Control Checklist
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Moisture", value: "10.5% - 12.0%" },
              { title: "Defects", value: "Under 1%" },
              { title: "Density", value: "Over 700g/L" },
              { title: "Color", value: "Uniform Green" },
            ].map((check, i) => (
              <AnimateInView key={i} delay={i * 0.08} y={20}>
                <div className="border border-white/20 bg-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30 mb-4">
                    <span className="text-green-400 font-bold">✓</span>
                  </div>
                  <p className="text-xs text-white/60 font-bold uppercase tracking-wider mb-1">{check.title}</p>
                  <p className="text-base font-extrabold text-white">{check.value}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Ready to Import Ethiopian Coffee? */}
      <section className="py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0F62FE]/10 text-[#0F62FE] text-xs font-semibold tracking-wide uppercase border border-blue-500/10 mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D6C] tracking-tight mb-4">
              Ready to Import Ethiopian Coffee?
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
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
                icon: (
                  <svg className="w-6 h-6 text-[#0F62FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 20h18M3 20l7-14 4 8 2-4 5 10" />
                  </svg>
                ),
              },
              {
                title: "Sample Requests",
                desc: "Request green coffee samples to evaluate grading, moisture, and cup profiles for your roasting needs.",
                btnText: "Order Samples",
                href: "/contact?subject=PRODUCT_QUOTE",
                icon: <PackageIcon className="w-6 h-6 text-[#0F62FE]" />,
              },
              {
                title: "Visit Our Farm",
                desc: "Schedule a visit to our sourcing partners and washing stations to experience our process firsthand.",
                btnText: "Book a Visit",
                href: "/contact?subject=OTHER",
                icon: (
                  <svg className="w-6 h-6 text-[#0F62FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <AnimateInView key={i} delay={i * 0.1} y={30}>
                <div className="bg-white border border-[#E0E6ED] rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF5FF] mb-6 border border-blue-100">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001D6C] mb-3">{card.title}</h3>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed">{card.desc}</p>
                  </div>
                  <Link
                    href={card.href}
                    className="w-full inline-flex justify-center items-center bg-[#0F62FE] px-5 py-3 rounded-xl text-sm font-bold text-white shadow-sm hover:bg-[#0B4FCD] transition-colors"
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
