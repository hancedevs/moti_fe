"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type PageHeroStat = {
  value: string;
  label: string;
  icon: ReactNode;
};

export type PageHeroProps = {
  backgroundImage: string;
  badgeIcon: ReactNode;
  badgeLabel: string;
  headingBefore?: string;
  headingHighlight?: string;
  heading?: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  stats: PageHeroStat[];
  headingHighlightClassName?: string;
  primaryButtonClassName?: string;
  secondaryButtonClassName?: string;
  statIconContainerClassName?: string;
  statLabelClassName?: string;
  overlayClassName?: string;
};

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function PageHero({
  backgroundImage,
  badgeIcon,
  badgeLabel,
  headingBefore,
  headingHighlight,
  heading,
  description,
  primaryCta,
  secondaryCta,
  stats,
  headingHighlightClassName = "text-blue-500",
  primaryButtonClassName = "bg-blue-600 text-white shadow-lg hover:bg-blue-500",
  secondaryButtonClassName = "border-white/35 text-white hover:bg-white/10",
  statIconContainerClassName = "",
  statLabelClassName = "text-blue-400",
  overlayClassName = "from-black/60 via-black/45 to-black/20",
}: PageHeroProps) {
  return (
    <section className="relative w-full bg-gray-900 py-12 sm:py-14 lg:py-16 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayClassName}`} />

      <div className="relative z-20 w-full max-w-7xl mx-auto pl-4 pr-4 sm:pl-6 sm:pr-8 lg:pl-8 lg:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mr-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide border border-blue-500/30 mb-3">
            <span className="w-3.5 h-3.5 text-white/90 shrink-0">{badgeIcon}</span>
            {badgeLabel}
          </span>

          {heading ? (
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] leading-tight mb-3">
              {heading}
            </h1>
          ) : (
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] leading-tight mb-3">
              {headingBefore}{" "}
              <span className={headingHighlightClassName}>{headingHighlight}</span>
            </h1>
          )}

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mb-5">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href={primaryCta.href}
              className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold transition-colors ${primaryButtonClassName}`}
            >
              {primaryCta.label}
              <ArrowIcon />
            </Link>
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center justify-center rounded-md border bg-transparent px-5 py-2.5 text-sm font-bold transition-colors ${secondaryButtonClassName}`}
            >
              {secondaryCta.label}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center ${statIconContainerClassName}`}
                >
                  {stat.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white leading-tight">{stat.value}</p>
                  <p className={`text-[11px] sm:text-xs font-medium uppercase tracking-wider leading-tight ${statLabelClassName}`}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
