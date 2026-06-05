import BlogPostsPageContent from "@/components/blog-posts/BlogPostsPageContent";
import { blogPageConfig } from "@/lib/blogPostsConfig";

export default function BlogPage() {
  return <BlogPostsPageContent config={blogPageConfig} />;
}
