"use client";

import { partnerCategories, partnerCategoryIconMap } from "@/lib/partners";
import AnimateInView from "@/components/ui/AnimateInView";
import PartnerCategoryIcon from "./PartnerCategoryIcon";
import PartnerListCard from "./PartnerListCard";

export default function PartnerCategories() {
  return (
    <section id="partner-categories" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {partnerCategories.map((category, categoryIndex) => {
          const iconKey = partnerCategoryIconMap[category.id];

          return (
            <div key={category.id} id={category.id}>
              <AnimateInView delay={categoryIndex * 0.05}>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                      <PartnerCategoryIcon type={iconKey} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-500 ml-[52px]">{category.description}</p>
                </div>
              </AnimateInView>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {category.partners.map((partner, index) => (
                  <AnimateInView
                    key={`${category.id}-${partner.initials}`}
                    delay={index * 0.05}
                    y={30}
                  >
                    <PartnerListCard partner={partner} />
                  </AnimateInView>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
