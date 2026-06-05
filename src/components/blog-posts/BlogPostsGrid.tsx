"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BLOG_POSTS_PAGE_SIZE,
  useGetBlogCategoriesQuery,
  useGetPaginatedBlogPostsQuery,
} from "@/store/api/apiSlice";
import type { BlogPostsPageConfig } from "@/lib/blogPostsConfig";
import { resolveImageUrl } from "@/lib/projects";
import AnimateInView from "@/components/ui/AnimateInView";
import Pagination from "@/components/ui/Pagination";
import BlogCategoryFilters from "./BlogCategoryFilters";

type BlogPostsGridProps = {
  config: BlogPostsPageConfig;
};

export default function BlogPostsGrid({ config }: BlogPostsGridProps) {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const selectedCategoryIdsKey = selectedCategoryIds.slice().sort((a, b) => a - b).join(",");

  useEffect(() => {
    const timeout = setTimeout(() => setSearch(searchInput.trim()), 300);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  useEffect(() => {
    setSelectedCategoryIds([]);
    setPage(1);
  }, [config.type]);

  useEffect(() => {
    setPage(1);
  }, [search, selectedCategoryIdsKey]);

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetBlogCategoriesQuery();

  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = useGetPaginatedBlogPostsQuery({
    type: config.type,
    page,
    limit: BLOG_POSTS_PAGE_SIZE,
    search: search || undefined,
    categoryIds: selectedCategoryIds.length > 0 ? selectedCategoryIds : undefined,
  });

  const posts = data?.items ?? [];
  const meta = data?.meta;
  const itemLabel = config.type === "NEWS" ? "articles" : "posts";

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("posts-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="posts-grid" className="pt-8 pb-16 bg-gray-50">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <AnimateInView className="flex flex-col lg:flex-row lg:items-start gap-4 mb-10">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder={config.searchPlaceholder}
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <BlogCategoryFilters
            categories={categoriesError ? [] : categories}
            selectedCategoryIds={selectedCategoryIds}
            onCategoryIdsChange={setSelectedCategoryIds}
            isLoading={categoriesLoading}
          />
        </AnimateInView>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="h-3 bg-gray-200 rounded w-16 mb-3" />
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="space-y-1.5 mb-4">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && (
          <AnimateInView className="text-center py-12">
            <p className="text-gray-500">Unable to load posts. Please try again later.</p>
          </AnimateInView>
        )}

        {!isLoading && !isError && posts.length === 0 && (
          <AnimateInView className="text-center py-12">
            <p className="text-gray-500">
              No {config.type === "NEWS" ? "news articles" : "blog posts"} found
              {search ? ` for "${search}"` : ""}
              {selectedCategoryIds.length > 0 ? " in the selected categories" : ""}.
            </p>
          </AnimateInView>
        )}

        {!isLoading && !isError && posts.length > 0 && (
          <>
            <motion.div
              key={`${selectedCategoryIdsKey || "all"}-${search}-${page}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isFetching ? 0.6 : 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {posts.map((post, index) => (
                <AnimateInView key={post.id} delay={index * 0.05} y={30}>
                  <Link
                    href={`${config.basePath}/${post.slug}`}
                    className="group block h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      {post.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={resolveImageUrl(post.imageUrl) ?? ""}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                        {post.type === "NEWS" ? "News" : "Blog"}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                      )}
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        {post.categories?.[0] && <span>{post.categories[0].category.name}</span>}
                        {post.categories?.[0] && <span>·</span>}
                        <span>
                          {new Date(post.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateInView>
              ))}
            </motion.div>

            {meta && (
              <AnimateInView delay={0.2}>
                <Pagination
                  page={meta.page}
                  totalPages={meta.totalPages}
                  total={meta.total}
                  onPageChange={handlePageChange}
                  isLoading={isFetching}
                  itemLabel={itemLabel}
                  ariaLabel={`${config.type === "NEWS" ? "News" : "Blog"} pagination`}
                />
              </AnimateInView>
            )}
          </>
        )}
      </div>
    </section>
  );
}
