"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import { Location01Icon } from "hugeicons-react";
import { REGIONS_DATA } from "@/lib/coffee";

export default function CoffeeRegions() {
  return (
    <section className="w-full bg-[#1152CA] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wide uppercase border border-white/20 mb-4">
            Origins
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Coffee Sourcing Regions
          </h2>
          <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto">
            Ethiopia is the birthplace of coffee. Our beans are sourced from the
            country&apos;s most renowned growing regions.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {REGIONS_DATA.map((region, index) => (
            <AnimateInView key={region} delay={index * 0.08} y={20}>
              <div className="rounded-xl border border-white/25 bg-white/5 p-5 flex items-center gap-3 hover:bg-white/10 transition-colors">
                <Location01Icon className="w-5 h-5 text-white shrink-0" />
                <span className="font-bold text-white">{region}</span>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
