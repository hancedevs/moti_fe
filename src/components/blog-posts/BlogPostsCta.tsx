"use client";

import Link from "next/link";
import type { BlogPostsPageConfig } from "@/lib/blogPostsConfig";
import AnimateInView from "@/components/ui/AnimateInView";

type BlogPostsCtaProps = {
  config: BlogPostsPageConfig;
};

export default function BlogPostsCta({ config }: BlogPostsCtaProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimateInView>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            {config.ctaTitle}{" "}
            <span className="text-blue-600">{config.ctaHighlight}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            {config.ctaDescription}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href={config.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
            >
              {config.secondaryCta.label}
            </Link>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
