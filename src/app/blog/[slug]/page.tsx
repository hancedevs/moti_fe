import BlogPostDetailContent from "@/components/blog-posts/BlogPostDetailContent";
import { blogPageConfig } from "@/lib/blogPostsConfig";

export const dynamic = "force-dynamic";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  await params;
  return <BlogPostDetailContent config={blogPageConfig} />;
}
