import PageHero from "@/components/layout/PageHero";
import type { BlogPostsPageConfig } from "@/lib/blogPostsConfig";

const badgeIcon = (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    />
  </svg>
);

type BlogPostsHeroProps = {
  config: BlogPostsPageConfig;
};

export default function BlogPostsHero({ config }: BlogPostsHeroProps) {
  return (
    <PageHero
      backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      badgeIcon={badgeIcon}
      badgeLabel={config.badgeLabel}
      headingBefore={config.headingBefore}
      headingHighlight={config.headingHighlight}
      description={config.description}
      primaryCta={config.primaryCta}
      secondaryCta={config.secondaryCta}
      stats={config.stats}
    />
  );
}
