import Feedback from "@/src/components/Feedback/Feedback";
import Workflow from "@/src/components/Workflow/Workflow";
import ServisesSlugHero from "@/src/components/ServisesSection/ServisesSlugHero";
import { servicesData } from "../servicesData";
import ServisesSlugApproach from "@/src/components/ServisesSection/ServisesSlugApproach";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  return (
    <main>
      <ServisesSlugHero params={params} />
      <ServisesSlugApproach params={params}></ServisesSlugApproach>
      <Workflow></Workflow>
      <Feedback></Feedback>
    </main>
  );
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
