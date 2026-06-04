import Link from "next/link";
import { Building03Icon, Calendar03Icon } from "hugeicons-react";
import type { Project } from "@/store/api/apiSlice";
import { getProjectYear } from "@/lib/projects";
import ProjectImage from "./ProjectImage";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import CategoryBadge from "./CategoryBadge";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
  showStatus?: boolean;
};

export default function ProjectCard({
  project,
  compact = false,
  showStatus = true,
}: ProjectCardProps) {
  const hasImage = project.images.length > 0 && project.images[0]?.imageUrl;

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className={`relative overflow-hidden ${compact ? "h-40" : "h-52"}`}>
        {hasImage ? (
          <ProjectImage
            imageUrl={project.images[0].imageUrl}
            alt={project.title}
            placeholderLabel={project.category.name}
            placeholderSize="md"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ProjectImagePlaceholder
            label={project.category.name}
            size="md"
          />
        )}
        <div
          className={`absolute top-4 left-4 pointer-events-none ${
            showStatus ? "right-4 flex items-start justify-between gap-2" : ""
          }`}
        >
          <CategoryBadge name={project.category.name} />
          {showStatus && (
            <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
              Completed
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-5 flex-grow line-clamp-2">
          {project.description ||
            `${project.category.name} project for ${project.client.name}`}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
          <span className="inline-flex items-center gap-1.5">
            <Building03Icon size={14} className="text-blue-500 shrink-0" />
            <span className="truncate max-w-[140px]">{project.client.name}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar03Icon size={14} className="text-blue-500 shrink-0" />
            {getProjectYear(project)}
          </span>
        </div>
      </div>
    </Link>
  );
}
