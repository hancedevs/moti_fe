"use client";

import { useEffect } from "react";
import type { GalleryImage } from "@/store/api/apiSlice";
import { resolveImageUrl } from "@/lib/projects";

type GalleryImagePreviewProps = {
  item: GalleryImage | null;
  items: GalleryImage[];
  onClose: () => void;
  onChange: (item: GalleryImage) => void;
};

export default function GalleryImagePreview({
  item,
  items,
  onClose,
  onChange,
}: GalleryImagePreviewProps) {
  const currentIndex = item ? items.findIndex((entry) => entry.id === item.id) : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < items.length - 1;

  useEffect(() => {
    if (!item) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && hasPrevious) {
        onChange(items[currentIndex - 1]);
      } else if (event.key === "ArrowRight" && hasNext) {
        onChange(items[currentIndex + 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, items, currentIndex, hasPrevious, hasNext, onClose, onChange]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${item.title}`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close preview"
      />

      <div className="relative z-10 w-full max-w-5xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-2 right-0 sm:-top-4 sm:right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close preview"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {hasPrevious && (
          <button
            type="button"
            onClick={() => onChange(items[currentIndex - 1])}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-14 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {hasNext && (
          <button
            type="button"
            onClick={() => onChange(items[currentIndex + 1])}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-14 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolveImageUrl(item.imageUrl)}
            alt={item.title}
            className="max-h-[75vh] w-full object-contain"
          />
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          {item.category?.name && (
            <p className="text-sm text-gray-300 mt-1">{item.category.name}</p>
          )}
          {item.description && (
            <p className="text-sm text-gray-400 mt-2 max-w-2xl mx-auto">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
