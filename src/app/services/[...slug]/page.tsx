import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import ServiceLayout from "@/components/services/ServiceLayout";

export function generateStaticParams() {
  const paths: { slug: string[] }[] = [];
  servicesData.forEach((category) => {
    // The main category route, e.g. /services/banking-equipment
    paths.push({ slug: [category.id] });
    // The sub-routes, e.g. /services/banking-equipment/atm-solution
    category.items.forEach(item => {
       const parts = item.href.split('/').filter(Boolean);
       if (parts.length >= 2) {
          // parts[0] is 'services', the rest is the slug
          paths.push({ slug: parts.slice(1) });
       }
    });
  });
  return paths;
}

export default async function ServiceCategoryPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.slug[0];
  const categoryData = servicesData.find((c) => c.id === categoryId);

  if (!categoryData) {
    notFound();
  }

  return (
    <main>
      <ServiceLayout category={categoryData} />
    </main>
  );
}
