"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PROJECTS_PAGE_SIZE,
  useGetPaginatedProjectsQuery,
  useGetProjectCategoriesQuery,
} from "@/store/api/apiSlice";
import ProjectCard from "./ProjectCard";
import ProjectCategoryFilters from "./ProjectCategoryFilters";
import ProjectsPagination from "./ProjectsPagination";

export default function ProjectsGrid() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [page, setPage] = useState(1);

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetProjectCategoriesQuery();

  const {
    data: paginated,
    isLoading: projectsLoading,
    isFetching: projectsFetching,
    isError: projectsError,
  } = useGetPaginatedProjectsQuery({
    page,
    limit: PROJECTS_PAGE_SIZE,
    categoryId: selectedCategoryId ?? undefined,
  });

  const projects = paginated?.items ?? [];
  const meta = paginated?.meta;
  const isLoading = categoriesLoading || projectsLoading;
  const isError = categoriesError || projectsError;

  useEffect(() => {
    setPage(1);
  }, [selectedCategoryId]);

  const handleCategoryChange = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("project-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="project-grid" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProjectCategoryFilters
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onCategoryChange={handleCategoryChange}
          isLoading={categoriesLoading}
        />

        {categoriesError && (
          <p className="text-center text-sm text-amber-600 mb-6">
            Could not load categories. Showing all projects.
          </p>
        )}

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm animate-pulse"
              >
                <div className="h-52 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {projectsError && !isLoading && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              Unable to load projects. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !projectsError && projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No projects found
              {selectedCategoryId != null ? " in this category" : ""}.
            </p>
          </div>
        )}

        {!isLoading && !projectsError && projects.length > 0 && (
          <>
            <motion.div
              key={`${selectedCategoryId ?? "all"}-${page}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: projectsFetching ? 0.6 : 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} showStatus={false} />
              ))}
            </motion.div>

            {meta && (
              <ProjectsPagination
                page={meta.page}
                totalPages={meta.totalPages}
                total={meta.total}
                onPageChange={handlePageChange}
                isLoading={projectsFetching}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
