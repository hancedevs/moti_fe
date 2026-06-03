"use client";

import { useGetProjectsQuery } from "@/store/api/apiSlice";
import { Folder02Icon, ArrowRight02Icon } from "hugeicons-react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

function resolveImageUrl(url: string): string {
  if (url.startsWith("https://") || url.startsWith("http://")) return url;
  if (url.startsWith("/uploads")) return `${BASE_URL}${url}`;
  return `${BASE_URL}/${url}`;
}

export default function ProjectsSection() {
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        </div>

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
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-blue-50">
                    {project.images.length > 0 ? (
                      <img
                        src={resolveImageUrl(project.images[0].imageUrl)}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                        <Folder02Icon size={40} className="text-blue-300" />
                        <span className="text-xs text-blue-400 font-medium">
                          {project.category.name}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600">
                      {project.category.name}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {project.description ||
                        `${project.category.name} project for ${project.client.name}`}
                    </p>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700"
                      >
                        View Details
                        <ArrowRight02Icon
                          size={16}
                          className="ml-1.5 group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                See All Projects
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
