type CategoryBadgeProps = {
  name: string;
  className?: string;
};

/** Shared category badge style across projects list, featured projects, and detail page */
export const categoryBadgeClassName =
  "inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm";

export default function CategoryBadge({ name, className = "" }: CategoryBadgeProps) {
  return (
    <span className={`${categoryBadgeClassName} ${className}`.trim()}>
      {name}
    </span>
  );
}
