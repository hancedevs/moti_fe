"use client";

import Link from "next/link";
import { featuredPartners } from "@/lib/partners";
import AnimateInView from "@/components/ui/AnimateInView";
import PartnerCard from "./PartnerCard";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-14">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold tracking-wider text-[10px] uppercase border border-blue-100 shadow-sm mb-4">
            Technology Partners
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
            Our Technology Partners
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Collaborating with world-class technology providers to deliver
            cutting-edge solutions to our clients
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {featuredPartners.map((partner, index) => (
            <AnimateInView key={partner.name} delay={index * 0.05} y={30}>
              <PartnerCard partner={partner} />
            </AnimateInView>
          ))}
        </div>

        <AnimateInView className="text-center mt-12" delay={0.3}>
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
          >
            View All Partners
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </AnimateInView>
      </div>
    </section>
  );
}
