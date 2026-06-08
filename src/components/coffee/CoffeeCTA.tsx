"use client";

import Link from "next/link";
import AnimateInView from "@/components/ui/AnimateInView";
import { Chat01Icon, DeliveryBox01Icon, Invoice01Icon } from "hugeicons-react";

const cards = [
  {
    title: "Contact Us",
    desc: "Have questions about our coffee export? Our team is ready to help you.",
    buttonText: "Fill Out Form",
    link: "/contact",
    icon: <Chat01Icon className="w-6 h-6 text-[#5A8CD0]" />,
  },
  {
    title: "Sample Request",
    desc: "Request green coffee samples to evaluate quality and flavor profiles.",
    buttonText: "Request Samples",
    link: "/contact",
    icon: <DeliveryBox01Icon className="w-6 h-6 text-[#5A8CD0]" />,
  },
  {
    title: "Get a Quote",
    desc: "Receive a competitive quote for your preferred coffee volumes and grades.",
    buttonText: "Request a Quote",
    link: "/contact",
    icon: <Invoice01Icon className="w-6 h-6 text-[#5A8CD0]" />,
  },
];

export default function CoffeeCTA() {
  return (
    <section className="py-16 lg:py-20 bg-[#F4F7FB] dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#5A8CD0]/10 dark:bg-blue-500/10 text-[#5A8CD0] dark:text-blue-400 font-semibold tracking-wider text-xs uppercase border border-[#5A8CD0]/20 dark:border-blue-500/20 mb-4">
            Get Started
          </span>
          <h2 className="text-3xl font-extrabold text-[#001D6C] dark:text-blue-200 sm:text-4xl">
            Ready to import Ethiopian coffee?
          </h2>
          <p className="mt-3 text-sm text-[#525252] dark:text-gray-300 max-w-2xl mx-auto">
            Take the next step toward sourcing exceptional Ethiopian green coffee
            beans for your business.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <AnimateInView key={card.title} delay={index * 0.1} y={30}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-[#E0E6ED] dark:border-gray-700 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E9F0F8] dark:bg-blue-900/20 mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001D6C] dark:text-blue-200 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#525252] dark:text-gray-300 mb-8 flex-grow leading-relaxed">
                  {card.desc}
                </p>
                <Link
                  href={card.link}
                  className="w-full inline-flex justify-center items-center rounded-lg bg-[#5A8CD0] px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#4A7AB8] transition-colors"
                >
                  {card.buttonText}
                </Link>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
