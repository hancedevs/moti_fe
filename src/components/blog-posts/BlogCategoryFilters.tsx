"use client";

import { useEffect, useMemo, useState } from "react";
import type { BlogPostCategory } from "@/store/api/apiSlice";

// All + up to 3 categories + More = 5 visible buttons when overflow exists.
const MAX_VISIBLE_BUTTONS = 5;
const MAX_CATEGORIES_WITH_OVERFLOW = MAX_VISIBLE_BUTTONS - 2;

type BlogCategoryFiltersProps = {
  categories: BlogPostCategory[] | undefined;
  selectedCategoryIds: number[];
  onCategoryIdsChange: (categoryIds: number[]) => void;
  isLoading?: boolean;
};

function splitCategories(
  categories: BlogPostCategory[],
  selectedCategoryIds: number[]
) {
  const hasOverflow = categories.length > MAX_CATEGORIES_WITH_OVERFLOW;
  const limit = hasOverflow
    ? MAX_CATEGORIES_WITH_OVERFLOW
    : Math.min(categories.length, MAX_VISIBLE_BUTTONS - 1);

  if (!hasOverflow) {
    return { visible: categories, hidden: [] as BlogPostCategory[], hasOverflow: false };
  }

  const selectedSet = new Set(selectedCategoryIds);

  let visible = categories.slice(0, limit);

  const selectedNotVisible = categories.filter(
    (category) => selectedSet.has(category.id) && !visible.some((v) => v.id === category.id)
  );
  if (selectedNotVisible.length > 0) {
    const injected = selectedNotVisible.slice(0, limit);
    const injectedIds = new Set(injected.map((c) => c.id));
    visible = [
      ...injected,
      ...categories.filter((category) => !injectedIds.has(category.id)).slice(0, limit - injected.length),
    ];
  }

  const visibleIds = new Set(visible.map((category) => category.id));
  const hidden = categories.filter((category) => !visibleIds.has(category.id));

  return { visible, hidden, hasOverflow: true };
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
      className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
        isActive
          ? "bg-blue-600 text-white shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

export default function BlogCategoryFilters({
  categories,
  selectedCategoryIds,
  onCategoryIdsChange,
  isLoading = false,
}: BlogCategoryFiltersProps) {
  const [expanded, setExpanded] = useState(false);

  const { visible, hidden, hasOverflow } = useMemo(() => {
    if (!categories?.length) {
      return { visible: [], hidden: [] as BlogPostCategory[], hasOverflow: false };
    }
    return splitCategories(categories, selectedCategoryIds);
  }, [categories, selectedCategoryIds]);

  useEffect(() => {
    if (!categories?.length) return;
    const selectedSet = new Set(selectedCategoryIds);
    const anySelectedInHidden = hidden.some((category) => selectedSet.has(category.id));
    if (anySelectedInHidden && !expanded) {
      setExpanded(true);
    }
  }, [selectedCategoryIds, categories, hidden, expanded]);

  const toggleCategory = (categoryId: number) => {
    const next = new Set(selectedCategoryIds);
    if (next.has(categoryId)) next.delete(categoryId);
    else next.add(categoryId);
    onCategoryIdsChange(Array.from(next));
  };

  const clearAll = () => onCategoryIdsChange([]);

  return (
    <div className="flex flex-col gap-3 lg:items-end">
      <div className="flex flex-wrap gap-2">
        <FilterButton
          label="All"
          isActive={selectedCategoryIds.length === 0}
          onClick={clearAll}
        />

        {isLoading &&
          [1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-8 w-20 rounded-full bg-gray-200 animate-pulse shrink-0"
            />
          ))}

        {!isLoading &&
          visible.map((category) => (
            <FilterButton
              key={category.id}
              label={category.name}
              isActive={selectedCategoryIds.includes(category.id)}
              onClick={() => toggleCategory(category.id)}
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
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>

      {!isLoading && expanded && hidden.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
          {hidden.map((category) => (
            <FilterButton
              key={category.id}
              label={category.name}
              isActive={selectedCategoryIds.includes(category.id)}
              onClick={() => toggleCategory(category.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
