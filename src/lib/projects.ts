import type { Project } from "@/store/api/apiSlice";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export function resolveImageUrl(url: string): string {
  if (url.startsWith("https://") || url.startsWith("http://")) return url;
  if (url.startsWith("/")) return `${BASE_URL}${url}`;
  return `${BASE_URL}/${url}`;
}

export function getProjectYear(project: Project): string {
  return new Date(project.createdAt).getFullYear().toString();
}
