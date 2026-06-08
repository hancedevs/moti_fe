"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import {
  TruckIcon,
  Shield01Icon,
  Route01Icon,
  BankIcon,
} from "hugeicons-react";

const features = [
  {
    title: "Logistics Mastery",
    techLabel: "20+ Years Trade Corridor Expertise",
    desc: "Two decades of experience managing the Djibouti-Addis trade corridor ensures efficient, reliable shipping for every container.",
    icon: <TruckIcon className="w-6 h-6 text-[#5A8CD0]" />,
  },
  {
    title: "Quality Assurance",
    techLabel: "Zero-Defect Quality Standard",
    desc: "Rigorous grading and moisture control (10.5%-12%) applied to every lot. Our quality control team inspects each shipment at multiple stages.",
    icon: <Shield01Icon className="w-6 h-6 text-[#5A8CD0]" />,
  },
  {
    title: "Full Traceability",
    techLabel: "Farm-to-Container Traceability",
    desc: "Direct partnerships with washing stations provide complete vertical integration from farm to container. Every lot can be traced back to its specific origin.",
    icon: <Route01Icon className="w-6 h-6 text-[#5A8CD0]" />,
  },
  {
    title: "Financial Security",
    techLabel: "20-Year Corporate Legacy",
    desc: "An established, 20-year-old corporate entity offering contract fulfillment guarantees and financial stability.",
    icon: <BankIcon className="w-6 h-6 text-[#5A8CD0]" />,
  },
];

export default function WhyPartnerWithUs() {
  return (
    <section className="py-16 lg:py-20 bg-[#F4F7FB] dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E9F0F8] dark:bg-blue-900/20 text-[#5A8CD0] dark:text-blue-400 text-xs font-semibold tracking-wide border border-[#C8DCF0] dark:border-gray-700 mb-3">
            Our Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#161616] dark:text-white tracking-tight mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-[#525252] dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We combine decades of logistics expertise with deep knowledge of
            Ethiopia&apos;s coffee regions.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4 md:px-6">
          {features.map((feature, index) => (
            <AnimateInView key={feature.title} delay={index * 0.1} y={30}>
              <div className="bg-white dark:bg-gray-800 border border-[#E0E6ED] dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-start items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#E9F0F8] dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#161616] dark:text-white">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-medium text-[#5A8CD0] dark:text-blue-400 uppercase tracking-wider">
                    {feature.techLabel}
                  </span>
                </div>
                <p className="text-[#525252] dark:text-gray-300 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
