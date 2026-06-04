"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProjectCategoryWithCount } from "@/store/api/apiSlice";

const MOBILE_VISIBLE_LIMIT = 3;
const DESKTOP_VISIBLE_LIMIT = 6;

type ProjectCategoryFiltersProps = {
  categories: ProjectCategoryWithCount[] | undefined;
  selectedCategoryId: number | null;
  onCategoryChange: (categoryId: number | null) => void;
  isLoading?: boolean;
};

function splitCategories(
  categories: ProjectCategoryWithCount[],
  limit: number,
  selectedCategoryId: number | null
) {
  if (categories.length <= limit) {
    return { visible: categories, hidden: [] as ProjectCategoryWithCount[] };
  }

  const selected =
    selectedCategoryId != null
      ? categories.find((c) => c.id === selectedCategoryId)
      : undefined;

  let visible = categories.slice(0, limit);

  if (selected && !visible.some((c) => c.id === selected.id)) {
    visible = [
      selected,
      ...categories.filter((c) => c.id !== selected.id).slice(0, limit - 1),
    ];
  }

  const visibleIds = new Set(visible.map((c) => c.id));
  const hidden = categories.filter((c) => !visibleIds.has(c.id));

  return { visible, hidden };
}

function CategoryFilterButton({
  label,
  isActive,
  onClick,
  count,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
        isActive
          ? "bg-blue-600 text-white shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
      {count != null && count > 0 && (
        <span
          className={`ml-1.5 text-xs ${
            isActive ? "text-blue-200" : "text-gray-400"
          }`}
        >
          ({count})
        </span>
      )}
    </button>
  );
}

export default function ProjectCategoryFilters({
  categories,
  selectedCategoryId,
  onCategoryChange,
  isLoading = false,
}: ProjectCategoryFiltersProps) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const limit = isMobile ? MOBILE_VISIBLE_LIMIT : DESKTOP_VISIBLE_LIMIT;

  const { visible, hidden } = useMemo(() => {
    if (!categories?.length) {
      return { visible: [], hidden: [] as ProjectCategoryWithCount[] };
    }
    return splitCategories(categories, limit, selectedCategoryId);
  }, [categories, limit, selectedCategoryId]);

  const hasOverflow = hidden.length > 0;

  useEffect(() => {
    if (!categories?.length) return;
    const selectedInHidden =
      selectedCategoryId != null &&
      hidden.some((c) => c.id === selectedCategoryId);
    if (selectedInHidden && !expanded) {
      setExpanded(true);
    }
  }, [selectedCategoryId, categories, hidden, expanded]);

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
        <CategoryFilterButton
          label="All"
          isActive={selectedCategoryId === null}
          onClick={() => onCategoryChange(null)}
        />

        {isLoading &&
          [1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-9 w-24 rounded-full bg-gray-200 animate-pulse shrink-0"
            />
          ))}

        {!isLoading &&
          visible.map((category) => (
            <CategoryFilterButton
              key={category.id}
              label={category.name}
              isActive={selectedCategoryId === category.id}
              onClick={() => onCategoryChange(category.id)}
              count={category._count.projects}
            />
          ))}

        {!isLoading && hasOverflow && !expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-blue-600 border border-blue-200 hover:bg-blue-50 transition-colors inline-flex items-center gap-1"
          >
            More
            <span className="text-xs text-blue-500">({hidden.length})</span>
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
            className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors inline-flex items-center gap-1"
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

      {!isLoading && expanded && hidden.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-3 pt-3 border-t border-gray-100 max-w-4xl mx-auto">
          {hidden.map((category) => (
            <CategoryFilterButton
              key={category.id}
              label={category.name}
              isActive={selectedCategoryId === category.id}
              onClick={() => onCategoryChange(category.id)}
              count={category._count.projects}
            />
          ))}
        </div>
      )}
    </div>
  );
}
