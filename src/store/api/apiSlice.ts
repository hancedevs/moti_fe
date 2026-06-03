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
  tagTypes: ["Testimonials", "Projects"],
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
  }),
});

export const { useGetTestimonialsQuery, useGetProjectsQuery } = apiSlice;
