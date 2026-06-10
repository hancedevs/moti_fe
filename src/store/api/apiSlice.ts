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
  params: ProjectsQueryParams,
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

export interface Career {
  id: number;
  title: string;
  slug: string;
  type: "FULL_TIME" | "PART_TIME" | "REMOTE" | "CONTRACT";
  departmentId: number;
  description: string;
  requirements: string;
  location: string;
  salary: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
  department?: Department;
  _count?: {
    applications: number;
  };
}

export interface Department {
  id: number;
  name: string;
  slug: string;
  description: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
  careers?: Career[];
  teamMembers?: any[];
}

interface CareersApiResponse {
  data: Career[];
  total: number;
  page: number;
  lastPage: number;
}

interface DepartmentsApiResponse {
  data: Department[];
  total: number;
  page: number;
  lastPage: number;
}

export interface CoffeeType {
  id: number;
  name: string;
  slug: string;
  origin: string;
  description: string | null;
  imageUrl: string | null;
  grade: string;
  altitude: string | null;
  processing: string | null;
  acidity: string | null;
  body: string | null;
  harvestSeason: string[];
  tastingNotes: string[];
  badgeText: string | null;
  status: string;
  grades: {
    coffeeGradeId: number;
    coffeeGrade: {
      id: number;
      grade: string;
      qualityLevel: string;
      defects: string;
      status: string;
    };
  }[];
  createdAt: string;
  updatedAt: string;
}

export type ContactSubject =
  | "GENERAL_INQUIRY"
  | "PRODUCT_QUOTE"
  | "PARTNERSHIP"
  | "TECHNICAL_SUPPORT"
  | "CAREER_OPPORTUNITY"
  | "COFFEE_EXPORT"
  | "OTHER";

export interface ContactMessagePayload {
  fullName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  subject: ContactSubject;
  message: string;
}

export type BlogPostType = "NEWS" | "BLOG";

export interface BlogPostTag {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPostCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  author: string | null;
  type: BlogPostType;
  status: "ACTIVE" | "INACTIVE";
  categories: { id: number; category: BlogPostCategory }[];
  tags: { id: number; tag: BlogPostTag }[];
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostsListParams {
  type: BlogPostType;
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: number;
  categoryIds?: number[];
}

export interface BlogPostBySlugParams {
  slug: string;
  type: BlogPostType;
}

export interface PaginatedBlogPostsResult {
  items: BlogPost[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

type BlogPostsApiResponse = {
  data: BlogPost[];
  total: number;
  page: number;
  lastPage: number;
};

interface BlogCategoriesApiResponse {
  data: BlogPostCategory[];
  total: number;
  page: number;
  lastPage: number;
}

function normalizePaginatedBlogPosts(
  response: BlogPostsApiResponse,
  params: BlogPostsListParams,
): PaginatedBlogPostsResult {
  const limit = params.limit ?? (response.data.length || 1);
  const page = response.page ?? params.page ?? 1;
  const total = response.total ?? response.data.length;
  const totalPages =
    response.lastPage ??
    (limit > 0 ? Math.max(1, Math.ceil(total / limit)) : 1);

  return {
    items: response.data,
    meta: { total, page, limit, totalPages },
  };
}

export interface GalleryImageCategory {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
}

export interface GalleryCategory extends GalleryImageCategory {
  _count?: { images: number };
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  description: string | null;
  status: "ACTIVE" | "INACTIVE";
  categoryId: number;
  category: GalleryImageCategory;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImagesListParams {
  page?: number;
  limit?: number;
  categoryId?: number;
}

export interface PaginatedGalleryImagesResult {
  items: GalleryImage[];
  meta: PaginatedProjectsMeta;
}

type GalleryImagesApiResponse = {
  data: GalleryImage[];
  meta?: Partial<PaginatedProjectsMeta> & { lastPage?: number };
};

type GalleryCategoriesApiResponse = {
  data: GalleryCategory[];
  meta?: Partial<PaginatedProjectsMeta> & { lastPage?: number };
};

function normalizePaginatedGalleryImages(
  response: GalleryImagesApiResponse,
  params: GalleryImagesListParams,
): PaginatedGalleryImagesResult {
  const items = response.data;
  const raw = response.meta ?? {};
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

function unwrapBlogPost(response: unknown): BlogPost {
  if (!response || typeof response !== "object") {
    throw new Error("Invalid blog post response");
  }

  const record = response as Record<string, unknown>;

  if (record.data && typeof record.data === "object" && record.data !== null) {
    return record.data as BlogPost;
  }

  if (typeof record.id === "number" && typeof record.title === "string") {
    return record as unknown as BlogPost;
  }

  throw new Error("Invalid blog post response");
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://moti-be.onrender.com",
  }),
  tagTypes: [
    "Testimonials",
    "Projects",
    "Categories",
    "Careers",
    "Departments",
    "BlogPosts",
    "BlogCategories",
    "GalleryImages",
    "GalleryCategories",
    "CoffeeTypes",
  ],
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
      providesTags: (_result, _error, id) => [
        { type: "Projects", id: String(id) },
      ],
      transformResponse: (response: unknown) => unwrapProject(response),
    }),
    getCareers: builder.query<Career[], void>({
      query: () => "/careers",
      providesTags: ["Careers"],
      transformResponse: (response: CareersApiResponse) => response.data,
    }),
    getDepartments: builder.query<Department[], void>({
      query: () => "/departments",
      providesTags: ["Departments"],
      transformResponse: (response: DepartmentsApiResponse) => response.data,
    }),
    sendContactMessage: builder.mutation<void, ContactMessagePayload>({
      query: (body) => ({
        url: "/contact-messages",
        method: "POST",
        body,
      }),
    }),
    getBlogCategories: builder.query<BlogPostCategory[], void>({
      query: () => "/blog-categories",
      providesTags: ["BlogCategories"],
      transformResponse: (response: BlogCategoriesApiResponse) => response.data,
    }),
    getPaginatedBlogPosts: builder.query<
      PaginatedBlogPostsResult,
      BlogPostsListParams
    >({
      query: ({
        type,
        page = 1,
        limit = 9,
        search,
        categoryId,
        categoryIds,
      }) => {
        const params = new URLSearchParams();
        params.set("type", type);
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (search) params.set("search", search);
        // Backwards-compatible: if a single categoryId is provided, keep using it.
        if (categoryId != null) params.set("categoryId", String(categoryId));
        // Multi-select categories supported by the backend: categoryIds=1,2,3
        if (categoryIds && categoryIds.length > 0) {
          params.set("categoryIds", categoryIds.join(","));
        }
        return `/blog-posts?${params.toString()}`;
      },
      providesTags: (_result, _error, { type }) => [
        { type: "BlogPosts", id: type },
      ],
      transformResponse: (response: BlogPostsApiResponse, _meta, arg) =>
        normalizePaginatedBlogPosts(response, arg),
    }),
    getAllGalleryCategories: builder.query<GalleryCategory[], void>({
      query: () => "/gallery-categories/all",
      providesTags: ["GalleryCategories"],
      transformResponse: (
        response: GalleryCategoriesApiResponse | GalleryCategory[]
      ) => {
        if (Array.isArray(response)) return response;
        return response.data ?? [];
      },
    }),
    getPaginatedGalleryImages: builder.query<
      PaginatedGalleryImagesResult,
      GalleryImagesListParams
    >({
      query: ({ page = 1, limit = 12, categoryId }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (categoryId != null) {
          params.set("categoryId", String(categoryId));
        }
        return `/gallery-images?${params.toString()}`;
      },
      providesTags: ["GalleryImages"],
      transformResponse: (response: GalleryImagesApiResponse, _meta, arg) =>
        normalizePaginatedGalleryImages(response, arg),
    }),
    getCoffeeTypes: builder.query<CoffeeType[], void>({
      query: () => "/coffee-types",
      providesTags: ["CoffeeTypes"],
      transformResponse: (response: { data: CoffeeType[] }) => response.data,
    }),
    getTastingNotes: builder.query<string[], void>({
      query: () => "/coffee-types/tasting-notes",
    }),
    getBlogPostBySlug: builder.query<BlogPost, BlogPostBySlugParams>({
      query: ({ slug, type }) => {
        const params = new URLSearchParams();
        params.set("type", type);
        params.set("slug", slug);
        return `/blog-posts?${params.toString()}`;
      },
      providesTags: (_result, _error, { slug }) => [
        { type: "BlogPosts", id: slug },
      ],
      transformResponse: (response: BlogPostsApiResponse | BlogPost) => {
        if ("data" in response && Array.isArray(response.data)) {
          const post = response.data[0];
          if (!post) throw new Error("Blog post not found");
          return post;
        }
        return unwrapBlogPost(response);
      },
    }),
  }),
});

export const {
  useGetTestimonialsQuery,
  useGetProjectsQuery,
  useGetProjectCategoriesQuery,
  useGetPaginatedProjectsQuery,
  useGetProjectByIdQuery,
  useGetCareersQuery,
  useGetDepartmentsQuery,
  useSendContactMessageMutation,
  useGetBlogCategoriesQuery,
  useGetPaginatedBlogPostsQuery,
  useGetBlogPostBySlugQuery,
  useGetAllGalleryCategoriesQuery,
  useGetPaginatedGalleryImagesQuery,
  useGetCoffeeTypesQuery,
  useGetTastingNotesQuery,
} = apiSlice;

export const PROJECTS_PAGE_SIZE = 9;
export const BLOG_POSTS_PAGE_SIZE = 9;
export const GALLERY_PAGE_SIZE = 12;
