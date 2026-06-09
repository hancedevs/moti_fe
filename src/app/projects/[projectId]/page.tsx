import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import CtaSection from "@/components/home/CtaSection";

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
      <CtaSection />
    </>
  );
}
