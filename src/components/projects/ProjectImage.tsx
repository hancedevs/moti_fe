"use client";

import { useState } from "react";
import { resolveImageUrl } from "@/lib/projects";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";

type ProjectImageProps = {
  imageUrl: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
  placeholderSize?: "sm" | "md" | "lg";
};

export default function ProjectImage({
  imageUrl,
  alt,
  className = "w-full h-full object-cover",
  placeholderLabel,
  placeholderSize = "md",
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const src = resolveImageUrl(imageUrl);

  if (!imageUrl?.trim() || hasError) {
    return (
      <ProjectImagePlaceholder label={placeholderLabel} size={placeholderSize} />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
