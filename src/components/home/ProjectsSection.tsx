"use client";

import Link from "next/link";
import { useGetProjectsQuery } from "@/store/api/apiSlice";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimateInView from "@/components/ui/AnimateInView";

export default function ProjectsSection() {
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-16">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-4">
            Our Work
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover some of our most impactful implementations across various
            sectors in Ethiopia.
          </p>
        </AnimateInView>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="h-3 bg-gray-200 rounded w-20 mb-3" />
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="space-y-1.5 mb-6 flex-grow">
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
          <div className="text-center py-12">
            <p className="text-gray-500">
              Unable to load projects. Please try again later.
            </p>
          </div>
        )}

        {projects && projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects available yet.</p>
          </div>
        )}

        {projects && projects.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <AnimateInView key={project.id} delay={index * 0.05} y={30}>
                  <ProjectCard project={project} compact showStatus={false} />
                </AnimateInView>
              ))}
            </div>

            <AnimateInView className="mt-12 text-center" delay={0.3}>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                See All Projects
              </Link>
            </AnimateInView>
          </>
        )}
      </div>
    </section>
  );
}
