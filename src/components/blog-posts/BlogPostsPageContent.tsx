import BlogPostsHero from "@/components/blog-posts/BlogPostsHero";
import BlogPostsGrid from "@/components/blog-posts/BlogPostsGrid";
import CtaSection from "@/components/home/CtaSection";
import type { BlogPostsPageConfig } from "@/lib/blogPostsConfig";

type BlogPostsPageContentProps = {
  config: BlogPostsPageConfig;
};

export default function BlogPostsPageContent({ config }: BlogPostsPageContentProps) {
  return (
    <>
      <BlogPostsHero config={config} />
      <BlogPostsGrid config={config} />
      <CtaSection />
    </>
  );
}
