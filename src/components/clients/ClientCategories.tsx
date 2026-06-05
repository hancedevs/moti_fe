"use client";

import { categoryIconMap, clientCategories } from "@/lib/clients";
import AnimateInView from "@/components/ui/AnimateInView";
import ClientCard from "./ClientCard";
import CategoryIcon from "./CategoryIcon";

export default function ClientCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {clientCategories.map((category, categoryIndex) => {
          const iconKey = categoryIconMap[category.id];

          return (
            <div key={category.id} id={category.id}>
              <AnimateInView delay={categoryIndex * 0.05}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <CategoryIcon type={iconKey} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    {category.title}
                  </h2>
                </div>
              </AnimateInView>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.clients.map((client, index) => (
                  <AnimateInView key={client.name} delay={index * 0.05} y={30}>
                    <ClientCard client={client} />
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
