import { Folder02Icon } from "hugeicons-react";

type ProjectImagePlaceholderProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const iconSizes = {
  sm: 32,
  md: 40,
  lg: 48,
};

/** Matches Featured Projects on the landing page */
export default function ProjectImagePlaceholder({
  label,
  size = "md",
  className = "",
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-blue-50 ${className}`}
      aria-hidden
    >
      <Folder02Icon size={iconSizes[size]} className="text-blue-300" />
      {label && (
        <span className="text-xs text-blue-400 font-medium text-center px-4 max-w-[90%] line-clamp-2">
          {label}
        </span>
      )}
    </div>
  );
}
