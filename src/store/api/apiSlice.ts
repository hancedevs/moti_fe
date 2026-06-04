import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  message: string;
  rating: number;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
}

export interface ProjectImage {
  id: number;
  imageUrl: string;
  projectId: number;
  createdAt: string;
}

export interface ProjectCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectCategoryWithCount extends ProjectCategory {
  _count: { projects: number };
}

export interface ProjectsQueryParams {
  page?: number;
  limit?: number;
  categoryId?: number;
  id?: number;
}

function unwrapProject(response: unknown): Project {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid project response");
  }

  const record = response as Record<string, unknown>;

  if (record.data && typeof record.data === "object" && record.data !== null) {
    return record.data as Project;
  }

  if (typeof record.id === "number" && typeof record.title === "string") {
    return record as unknown as Project;
  }

  throw new Error("Invalid project response");
}

export interface PaginatedProjectsMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedProjectsResult {
  items: Project[];
  meta: PaginatedProjectsMeta;
}

type ProjectsApiResponse = {
  data: Project[];
  meta?: Partial<PaginatedProjectsMeta> & {
    lastPage?: number;
  };
  pagination?: Partial<PaginatedProjectsMeta> & {
    lastPage?: number;
  };
};

function normalizePaginatedProjects(
  response: ProjectsApiResponse,
  params: ProjectsQueryParams
): PaginatedProjectsResult {
  const items = response.data;
  const raw = response.meta ?? response.pagination ?? {};
  const limit = raw.limit ?? params.limit ?? (items.length || 1);
  const page = raw.page ?? params.page ?? 1;
  const total = raw.total ?? items.length;
  const totalPages =
    raw.totalPages ??
    raw.lastPage ??
    (limit > 0 ? Math.max(1, Math.ceil(total / limit)) : 1);

  return {
    items,
    meta: { total, page, limit, totalPages },
  };
}

export interface ProjectClient {
  id: number;
  name: string;
  slug: string;
  type: string;
  website: string | null;
  logo: string | null;
  status: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  status: "ACTIVE" | "INACTIVE";
  categoryId: number;
  clientId: number;
  category: ProjectCategory;
  client: ProjectClient;
  images: ProjectImage[];
  createdAt: string;
  updatedAt: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Testimonials", "Projects", "Categories"],
  endpoints: (builder) => ({
    getTestimonials: builder.query<Testimonial[], void>({
      query: () => "/testimonials",
      providesTags: ["Testimonials"],
      transformResponse: (response: { data: Testimonial[] }) => response.data,
    }),
    getProjects: builder.query<Project[], void>({
      query: () => "/projects?limit=4",
      providesTags: ["Projects"],
      transformResponse: (response: { data: Project[] }) => response.data,
    }),
    getProjectCategories: builder.query<ProjectCategoryWithCount[], void>({
      query: () => "/project-categories",
      providesTags: ["Categories"],
      transformResponse: (response: { data: ProjectCategoryWithCount[] }) =>
        response.data,
    }),
    getPaginatedProjects: builder.query<
      PaginatedProjectsResult,
      ProjectsQueryParams
    >({
      query: ({ page = 1, limit = 9, categoryId, id }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (categoryId != null) {
          params.set("categoryId", String(categoryId));
        }
        if (id != null) {
          params.set("id", String(id));
        }
        return `/projects?${params.toString()}`;
      },
      providesTags: ["Projects"],
      transformResponse: (response: ProjectsApiResponse, _meta, arg) =>
        normalizePaginatedProjects(response, arg),
    }),
    getProjectById: builder.query<Project, number>({
      query: (id) => `/projects/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Projects", id: String(id) }],
      transformResponse: (response: unknown) => unwrapProject(response),
    }),
  }),
});

export const {
  useGetTestimonialsQuery,
  useGetProjectsQuery,
  useGetProjectCategoriesQuery,
  useGetPaginatedProjectsQuery,
  useGetProjectByIdQuery,
} = apiSlice;

export const PROJECTS_PAGE_SIZE = 9;
