"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft02Icon,
  Building03Icon,
  Calendar03Icon,
} from "hugeicons-react";
import {
  useGetPaginatedProjectsQuery,
  useGetProjectByIdQuery,
} from "@/store/api/apiSlice";
import { parseProjectId } from "@/lib/parseProjectId";
import { getProjectYear } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import CategoryBadge from "./CategoryBadge";
import ProjectImage from "./ProjectImage";
import ProjectDetailGallery from "./ProjectDetailGallery";

const TECH_BY_CATEGORY: Record<string, string[]> = {
  banking: ["NCR ATMs", "Core Banking Integration", "E-Payment Systems", "Branch Automation"],
  infrastructure: ["Data Center Design", "Server Infrastructure", "Network Architecture", "UPS & Power"],
  security: ["Fortinet Firewalls", "Cisco Security", "Access Control", "Surveillance Systems"],
  software: ["Custom Applications", "ERP Integration", "Cloud Services", "API Development"],
  bpo: ["Process Automation", "CRM Systems", "Call Center Solutions", "Workflow Management"],
};

const DEFAULT_TECH = [
  "Enterprise Integration",
  "System Deployment",
  "Technical Support",
  "Quality Assurance",
];

type ProjectDetailContentProps = {
  projectId?: string;
};

export default function ProjectDetailContent({
  projectId: projectIdProp,
}: ProjectDetailContentProps) {
  const params = useParams();

  const idParam =
    projectIdProp ??
    (typeof params.projectId === "string" ? params.projectId : "") ??
    (typeof params.id === "string" ? params.id : "");

  const projectId = parseProjectId(idParam);
  const isValidId = projectId != null;

  const {
    data: projectById,
    isLoading: isLoadingById,
    isError: isErrorById,
    isFetching: isFetchingById,
  } = useGetProjectByIdQuery(projectId!, { skip: !isValidId });

  const useQueryFallback =
    isValidId && !isLoadingById && !isFetchingById && !projectById;

  const { data: projectByQuery, isLoading: isLoadingByQuery } =
    useGetPaginatedProjectsQuery(
      { id: projectId!, page: 1, limit: 1 },
      { skip: !useQueryFallback }
    );

  const project = projectById ?? projectByQuery?.items[0];
  const isLoading =
    !isValidId || isLoadingById || isFetchingById || isLoadingByQuery;
  const isError = isValidId && !isLoading && !project;

  const { data: relatedPaginated } = useGetPaginatedProjectsQuery(
    {
      categoryId: project?.categoryId,
      page: 1,
      limit: 4,
    },
    { skip: !project?.categoryId }
  );

  const relatedProjects =
    relatedPaginated?.items
      .filter((p) => p.id !== projectId)
      .slice(0, 3) ?? [];

  if (!isValidId) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Project Link</h1>
        <p className="text-gray-500 mb-8">
          Please open a project from the projects list.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
        >
          <ArrowLeft02Icon size={18} />
          Back to Projects
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading project...</div>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">
          {isErrorById
            ? "Could not load this project from the API. Check that GET /projects/{id} is available."
            : "The project you are looking for does not exist."}
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
        >
          <ArrowLeft02Icon size={18} />
          Back to Projects
        </Link>
      </div>
    );
  }

  const technologies =
    TECH_BY_CATEGORY[project.category.slug.toLowerCase()] ?? DEFAULT_TECH;
  const imageCount = project.images.length;
  const heroImage = imageCount > 0 ? project.images[0] : null;

  return (
    <>
      <section
        className={`relative w-full overflow-hidden ${
          imageCount === 0 ? "py-24 lg:py-32 bg-gray-900" : "py-24 lg:py-32 min-h-[320px] sm:min-h-[400px]"
        }`}
      >
        {heroImage ? (
          <>
            <div className="absolute inset-0">
              <ProjectImage
                imageUrl={heroImage.imageUrl}
                alt={project.title}
                placeholderLabel={project.category.name}
                placeholderSize="lg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900" />
        )}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft02Icon size={16} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryBadge name={project.category.name} />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="inline-flex items-center gap-2">
                <Building03Icon size={18} className="text-blue-400" />
                {project.client.name}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar03Icon size={18} className="text-blue-400" />
                {getProjectYear(project)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.description ||
                  `MOTI Engineering successfully delivered this ${project.category.name.toLowerCase()} solution for ${project.client.name}, demonstrating our commitment to excellence and innovation across Ethiopia's ICT landscape.`}
              </p>

              {imageCount > 1 && (
                <ProjectDetailGallery
                  images={project.images}
                  title={project.title}
                />
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Project Details
                </h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-500 font-medium">Client</dt>
                    <dd className="text-gray-900 font-semibold mt-1">
                      {project.client.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 font-medium">Category</dt>
                    <dd className="text-gray-900 font-semibold mt-1">
                      {project.category.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 font-medium">Year</dt>
                    <dd className="text-gray-900 font-semibold mt-1">
                      {getProjectYear(project)}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Technologies & Solutions
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Related Projects
              </h2>
              <Link
                href="/projects"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} compact showStatus={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
