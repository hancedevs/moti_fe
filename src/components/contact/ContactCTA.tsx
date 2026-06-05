import React from "react";
import Link from "next/link";
import AnimateInView from "@/components/ui/AnimateInView";

export default function ContactCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateInView y={30} className="text-center">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold tracking-wider text-[10px] uppercase border border-blue-400/20 shadow-sm mb-4">
            Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Ready to Partner{" "}
            <span className="text-blue-400">With Us?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Join forces with Ethiopia&apos;s premier engineering and technology
            partner. Let&apos;s build something great together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:info@motiengineering.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-lg transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send an Email
            </Link>
            <Link
              href="tel:+251115545059"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-lg border-2 border-white/20 hover:border-white/40 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </Link>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
