"use client";

import { useEffect, useMemo, useState } from "react";
import type { GalleryCategory } from "@/store/api/apiSlice";

// All + up to 3 categories + More = 5 visible buttons when overflow exists.
const MAX_VISIBLE_BUTTONS = 5;
const MAX_CATEGORIES_WITH_OVERFLOW = MAX_VISIBLE_BUTTONS - 2;

type GalleryCategoryFiltersProps = {
  categories: GalleryCategory[] | undefined;
  selectedCategoryId: number | null;
  onCategoryChange: (categoryId: number | null) => void;
  isLoading?: boolean;
};

function splitCategories(
  categories: GalleryCategory[],
  selectedCategoryId: number | null
) {
  const hasOverflow = categories.length > MAX_CATEGORIES_WITH_OVERFLOW;
  const limit = hasOverflow
    ? MAX_CATEGORIES_WITH_OVERFLOW
    : Math.min(categories.length, MAX_VISIBLE_BUTTONS - 1);

  if (!hasOverflow) {
    return { visible: categories, hasOverflow: false };
  }

  const selected =
    selectedCategoryId != null
      ? categories.find((category) => category.id === selectedCategoryId)
      : undefined;

  let visible = categories.slice(0, limit);

  if (selected && !visible.some((category) => category.id === selected.id)) {
    visible = [
      selected,
      ...categories
        .filter((category) => category.id !== selected.id)
        .slice(0, limit - 1),
    ];
  }

  return { visible, hasOverflow: true };
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
        isActive
          ? "bg-blue-600 text-white shadow-md"
          : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}

export default function GalleryCategoryFilters({
  categories,
  selectedCategoryId,
  onCategoryChange,
  isLoading = false,
}: GalleryCategoryFiltersProps) {
  const [expanded, setExpanded] = useState(false);

  const { visible, hasOverflow, hiddenCount } = useMemo(() => {
    if (!categories?.length) {
      return { visible: [], hasOverflow: false, hiddenCount: 0 };
    }

    const { visible, hasOverflow } = splitCategories(categories, selectedCategoryId);
    return {
      visible,
      hasOverflow,
      hiddenCount: hasOverflow ? categories.length - visible.length : 0,
    };
  }, [categories, selectedCategoryId]);

  useEffect(() => {
    if (!categories?.length || selectedCategoryId == null) return;

    const selectedInCollapsed =
      hasOverflow &&
      !expanded &&
      !visible.some((category) => category.id === selectedCategoryId);

    if (selectedInCollapsed) {
      setExpanded(true);
    }
  }, [selectedCategoryId, categories, visible, hasOverflow, expanded]);

  const categoriesToRender = expanded ? categories ?? [] : visible;

  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        <FilterButton
          label="All"
          isActive={selectedCategoryId === null}
          onClick={() => onCategoryChange(null)}
        />

        {isLoading &&
          [1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-9 w-24 rounded-full bg-gray-200 animate-pulse shrink-0"
            />
          ))}

        {!isLoading &&
          categoriesToRender.map((category) => (
            <FilterButton
              key={category.id}
              label={category.name}
              isActive={selectedCategoryId === category.id}
              onClick={() => onCategoryChange(category.id)}
            />
          ))}

        {!isLoading && hasOverflow && !expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 transition-colors inline-flex items-center gap-1"
          >
            More
            <span className="text-xs text-blue-500">({hiddenCount})</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}

        {!isLoading && expanded && hasOverflow && (
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors inline-flex items-center gap-1"
          >
            Show less
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
