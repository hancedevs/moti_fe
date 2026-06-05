"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetBlogPostBySlugQuery } from "@/store/api/apiSlice";
import { resolveImageUrl } from "@/lib/projects";
import type { BlogPostsPageConfig } from "@/lib/blogPostsConfig";

type BlogPostDetailContentProps = {
  config: BlogPostsPageConfig;
};

export default function BlogPostDetailContent({ config }: BlogPostDetailContentProps) {
  const params = useParams();
  const slug = params.slug as string;
  const { data: post, isLoading, isError } = useGetBlogPostBySlugQuery({
    slug,
    type: config.type,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-20 mb-6" />
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
          <div className="h-64 bg-gray-200 rounded mb-8" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-500 mb-6">The post you are looking for does not exist.</p>
          <Link href={config.basePath} className="text-blue-600 hover:text-blue-500 font-medium">
            &larr; Back to {config.type === "NEWS" ? "News" : "Blog"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href={config.basePath}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-6"
        >
          &larr; Back to {config.type === "NEWS" ? "News" : "Blog"}
        </Link>

        <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 mb-4">
          {post.type}
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500 mb-8">
          {post.author ? (
            <span className="font-medium text-gray-700">{post.author}</span>
          ) : null}
          {post.categories?.map(({ id, category }) => (
            <span
              key={`category-${category.id ?? id}`}
              className="inline-flex px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
            >
              {category.name}
            </span>
          ))}
          <span>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {post.imageUrl && (
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img
              src={resolveImageUrl(post.imageUrl) ?? ""}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="prose prose-gray dark:prose-invert max-w-none">
          {post.content.split(/\n+/).filter(Boolean).map((paragraph, index) => (
            <p
              key={`paragraph-${index}-${paragraph.slice(0, 24)}`}
              className="mb-4 text-gray-700 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags?.map((tagItem, index) => (
              <span
                key={`tag-${tagItem.tag?.id ?? tagItem.id ?? index}`}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
              >
                {tagItem.tag.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
