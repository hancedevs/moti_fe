import type { ProjectImage as ProjectImageType } from "@/store/api/apiSlice";
import ProjectImage from "./ProjectImage";

type ProjectDetailGalleryProps = {
  images: ProjectImageType[];
  title: string;
};

export default function ProjectDetailGallery({
  images,
  title,
}: ProjectDetailGalleryProps) {
  const count = images.length;

  if (count <= 1) {
    return null;
  }

  const galleryImages = images.slice(1);

  if (count === 2) {
    return (
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Project Gallery</h3>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64 sm:h-80 lg:h-96">
          <ProjectImage
            imageUrl={galleryImages[0].imageUrl}
            alt={`${title} — gallery`}
            placeholderLabel={title}
            placeholderSize="lg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Project Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:row-span-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[240px] sm:min-h-[320px]">
            <ProjectImage
              imageUrl={galleryImages[0].imageUrl}
              alt={`${title} — gallery 1`}
              placeholderLabel={title}
              placeholderSize="lg"
              className="w-full h-full min-h-[240px] sm:min-h-[320px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48 sm:h-auto sm:min-h-[152px]">
            <ProjectImage
              imageUrl={galleryImages[1].imageUrl}
              alt={`${title} — gallery 2`}
              placeholderLabel={title}
              placeholderSize="md"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Project Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={img.id}
            className={`rounded-2xl overflow-hidden border border-gray-100 shadow-sm ${
              index === 0 && galleryImages.length >= 3
                ? "sm:col-span-2 lg:col-span-2 h-56 sm:h-64"
                : "h-48 sm:h-52"
            }`}
          >
            <ProjectImage
              imageUrl={img.imageUrl}
              alt={`${title} — gallery ${index + 2}`}
              placeholderLabel={title}
              placeholderSize="md"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
