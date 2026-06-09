"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import { Location01Icon, MountainIcon } from "hugeicons-react";

const regions = [
  {
    name: "Yirgacheffe",
    zone: "Gedeo Zone, Southern Ethiopia",
    altitude: "1,700 – 2,200m",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sidama",
    zone: "Sidama Region, Southern Ethiopia",
    altitude: "1,500 – 2,200m",
    image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kaffa",
    zone: "Kaffa Zone, South West Ethiopia",
    altitude: "1,400 – 2,100m",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Djimmah",
    zone: "Jimma Zone, Oromia",
    altitude: "1,400 – 2,000m",
    image: "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Harar",
    zone: "Harari Region, Eastern Ethiopia",
    altitude: "1,500 – 2,100m",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Limu",
    zone: "Limmu, Oromia",
    altitude: "1,400 – 1,900m",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80",
  },
];

export default function CoffeeRegions() {
  return (
    <section className="w-full py-24 bg-[#5A8CD0]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold tracking-wider uppercase border border-white/20 mb-4">
            Origins
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Coffee Sourcing Regions
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Ethiopia is the birthplace of coffee. Our beans are sourced from the
            country&apos;s most renowned growing regions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {regions.map((region, index) => (
            <AnimateInView key={region.name} delay={index * 0.05} y={20}>
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] shadow-sm border border-gray-200/50">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1">
                    {region.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-blue-200 text-[11px] sm:text-xs mb-1">
                    <Location01Icon className="w-3 h-3 shrink-0" />
                    <span>{region.zone}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-blue-200/80 text-[11px] sm:text-xs">
                    <MountainIcon className="w-3 h-3 shrink-0" />
                    <span>{region.altitude}</span>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
