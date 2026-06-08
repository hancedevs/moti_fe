"use client";

import Link from "next/link";
import AnimateInView from "@/components/ui/AnimateInView";

export default function TestimonialsCta() {
  const cards = [
    {
      title: "Contact Us",
      desc: "Get in touch with our team to discuss your technology needs.",
      buttonText: "Contact Us",
      link: "/contact",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Our Clients",
      desc: "Explore the leading organizations that trust MOTI Engineering.",
      buttonText: "View Clients",
      link: "/clients",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Our Partners",
      desc: "Discover our global technology partnerships and alliances.",
      buttonText: "View Partners",
      link: "/partners",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold tracking-wider text-[10px] uppercase border border-blue-100 shadow-sm mb-4">
            Get Started
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Join the growing list of satisfied clients and partners who trust
            MOTI Engineering for their technology needs.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <AnimateInView key={card.title} delay={index * 0.1} y={30}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow h-full">
                <div className="flex h-16 w-16 items-center justify-center text-blue-600 mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow text-sm">{card.desc}</p>
                <Link
                  href={card.link}
                  className="w-full inline-flex justify-center items-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
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
