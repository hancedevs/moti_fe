import BlogPostsPageContent from "@/components/blog-posts/BlogPostsPageContent";
import { newsPageConfig } from "@/lib/blogPostsConfig";

export default function NewsPage() {
  return <BlogPostsPageContent config={newsPageConfig} />;
}
