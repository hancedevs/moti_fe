import type { BlogPostType } from "@/lib/blogPosts";
import type { PageHeroStat } from "@/components/layout/PageHero";

export type BlogPostsPageConfig = {
  type: BlogPostType;
  basePath: "/news" | "/blog";
  badgeLabel: string;
  headingBefore: string;
  headingHighlight: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  searchPlaceholder: string;
  stats: PageHeroStat[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaDescription: string;
};

export const newsPageConfig: BlogPostsPageConfig = {
  type: "NEWS",
  basePath: "/news",
  badgeLabel: "News & Updates",
  headingBefore: "Latest News &",
  headingHighlight: "Announcements",
  description:
    "Stay informed with the latest company news, press releases, industry updates, and announcements from MOTI Engineering.",
  primaryCta: { href: "#posts-grid", label: "View All News" },
  secondaryCta: { href: "/#contact", label: "Get Alerts" },
  searchPlaceholder: "Search news...",
  stats: [
    {
      value: "100+",
      label: "Press Releases",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      value: "5",
      label: "Categories",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      value: "Weekly",
      label: "Updates",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      value: "20+",
      label: "Media Partners",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ],
  ctaTitle: "Ready to",
  ctaHighlight: "Partner With Us?",
  ctaDescription:
    "Get in touch with MOTI Engineering to explore partnership opportunities and stay connected with our latest updates.",
};

export const blogPageConfig: BlogPostsPageConfig = {
  type: "BLOG",
  basePath: "/blog",
  badgeLabel: "Blog & Insights",
  headingBefore: "Latest Blog &",
  headingHighlight: "Insights",
  description:
    "Explore expert insights, industry trends, and thought leadership articles from the MOTI Engineering team.",
  primaryCta: { href: "#posts-grid", label: "View All Posts" },
  secondaryCta: { href: "/#contact", label: "Subscribe" },
  searchPlaceholder: "Search blog posts...",
  stats: [
    {
      value: "50+",
      label: "Articles",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      value: "5",
      label: "Categories",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      value: "Weekly",
      label: "Updates",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      value: "Expert",
      label: "Authors",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ],
  ctaTitle: "Ready to",
  ctaHighlight: "Work With Us?",
  ctaDescription:
    "Connect with MOTI Engineering for expert ICT solutions and stay updated with our latest insights.",
};
