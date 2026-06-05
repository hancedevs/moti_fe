import Pagination from "@/components/ui/Pagination";

type ProjectsPaginationProps = {
  page: number;
  totalPages: number;
  total: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
};

export default function ProjectsPagination(props: ProjectsPaginationProps) {
  return (
    <Pagination
      {...props}
      itemLabel="projects"
      ariaLabel="Projects pagination"
    />
  );
}
