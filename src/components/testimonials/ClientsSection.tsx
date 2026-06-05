"use client";

import Link from "next/link";
import { featuredClients } from "@/lib/clients";
import ClientCard from "@/components/clients/ClientCard";
import AnimateInView from "@/components/ui/AnimateInView";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-xs mb-4 border border-blue-100">
            Our Valued Clients
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            We are proud to serve some of Ethiopia&apos;s most prestigious organizations
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuredClients.map((client, index) => (
            <AnimateInView key={client.name} delay={index * 0.05} y={30}>
              <ClientCard client={client} variant="featured" />
            </AnimateInView>
          ))}
        </div>

        <AnimateInView className="text-center mt-12" delay={0.3}>
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            View All Clients
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </AnimateInView>
      </div>
    </section>
  );
}
