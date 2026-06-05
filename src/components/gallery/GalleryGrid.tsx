"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  GALLERY_PAGE_SIZE,
  useGetAllGalleryCategoriesQuery,
  useGetPaginatedGalleryImagesQuery,
  type GalleryImage,
} from "@/store/api/apiSlice";
import { resolveImageUrl } from "@/lib/projects";
import AnimateInView from "@/components/ui/AnimateInView";
import Pagination from "@/components/ui/Pagination";
import GalleryImagePreview from "./GalleryImagePreview";
import GalleryCategoryFilters from "./GalleryCategoryFilters";

export default function GalleryGrid() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [previewItem, setPreviewItem] = useState<GalleryImage | null>(null);

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetAllGalleryCategoriesQuery();

  const { data: imageCatalog } = useGetPaginatedGalleryImagesQuery({
    page: 1,
    limit: 100,
  });

  const categoriesWithImages = useMemo(() => {
    if (!categories?.length) return [];

    const categoryIdsFromImages = new Set(
      imageCatalog?.items.map((image) => image.categoryId) ?? []
    );

    return categories.filter((category) => {
      const count = category._count?.images ?? 0;
      return count > 0 || categoryIdsFromImages.has(category.id);
    });
  }, [categories, imageCatalog?.items]);

  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = useGetPaginatedGalleryImagesQuery({
    page,
    limit: GALLERY_PAGE_SIZE,
    categoryId: selectedCategoryId ?? undefined,
  });

  const images = data?.items ?? [];
  const meta = data?.meta;

  useEffect(() => {
    setPage(1);
  }, [selectedCategoryId]);

  useEffect(() => {
    if (
      selectedCategoryId != null &&
      !categoriesWithImages.some((category) => category.id === selectedCategoryId)
    ) {
      setSelectedCategoryId(null);
    }
  }, [categoriesWithImages, selectedCategoryId]);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("gallery-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section id="gallery-grid" className="pt-8 pb-16 bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <AnimateInView className="text-center mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold tracking-wider text-xs uppercase border border-blue-100 mb-4">
              Our Collection
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
              Browse Our Gallery
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Select a category to filter our visual collection of projects, events, and team moments.
            </p>
          </AnimateInView>

          <AnimateInView className="mb-10" delay={0.1}>
            <GalleryCategoryFilters
              categories={categoriesError ? [] : categoriesWithImages}
              selectedCategoryId={selectedCategoryId}
              onCategoryChange={setSelectedCategoryId}
              isLoading={categoriesLoading}
            />
          </AnimateInView>

          {categoriesError && (
            <p className="text-center text-sm text-amber-600 mb-6">
              Could not load categories. Showing all images.
            </p>
          )}

          {isLoading && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {Array.from({ length: GALLERY_PAGE_SIZE }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 overflow-hidden shadow-sm animate-pulse"
                >
                  <div className="aspect-[4/3] bg-gray-200" />
                </div>
              ))}
            </div>
          )}

          {isError && !isLoading && (
            <AnimateInView className="text-center py-16">
              <p className="text-gray-500">Unable to load gallery images. Please try again later.</p>
            </AnimateInView>
          )}

          {!isLoading && !isError && images.length === 0 && (
            <AnimateInView className="text-center py-16">
              <p className="text-gray-500">
                No images found{selectedCategoryId != null ? " in this category" : ""}.
              </p>
            </AnimateInView>
          )}

          {!isLoading && !isError && images.length > 0 && (
            <motion.div
              key={`${selectedCategoryId ?? "all"}-${page}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isFetching ? 0.6 : 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
            >
              {images.map((item, index) => (
                <AnimateInView key={item.id} delay={index * 0.04} y={24}>
                  <button
                    type="button"
                    onClick={() => setPreviewItem(item)}
                    className="group w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-zoom-in text-left"
                    aria-label={`Preview ${item.title}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={resolveImageUrl(item.imageUrl)}
                      alt={item.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                </AnimateInView>
              ))}
            </motion.div>
          )}

          {meta && meta.totalPages > 1 && (
            <AnimateInView delay={0.15}>
              <Pagination
                page={meta.page}
                totalPages={meta.totalPages}
                total={meta.total}
                onPageChange={handlePageChange}
                isLoading={isFetching}
                itemLabel="images"
                ariaLabel="Gallery pagination"
              />
            </AnimateInView>
          )}
        </div>
      </section>

      <GalleryImagePreview
        item={previewItem}
        items={images}
        onClose={() => setPreviewItem(null)}
        onChange={setPreviewItem}
      />
    </>
  );
}
