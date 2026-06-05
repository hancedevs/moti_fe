import BlogPostDetailContent from "@/components/blog-posts/BlogPostDetailContent";
import { newsPageConfig } from "@/lib/blogPostsConfig";

export const dynamic = "force-dynamic";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  await params;
  return <BlogPostDetailContent config={newsPageConfig} />;
}
