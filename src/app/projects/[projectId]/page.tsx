import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import ProjectsCta from "@/components/projects/ProjectsCta";

export const dynamic = "force-dynamic";

type ProjectDetailPageProps = {
  params: Promise<{ projectId: string }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { projectId } = await params;

  return (
    <>
      <ProjectDetailContent projectId={projectId} />
      <ProjectsCta />
    </>
  );
}
