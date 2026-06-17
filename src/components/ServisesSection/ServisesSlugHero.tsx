import css from "./ServisesSlugHero.module.css";
import { servicesData } from "@/src/app/services/servicesData";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServisesSlugHero({ params }: PageProps) {
  const { slug } = await params;

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className={css.container}>
      {service.img && (
        <div className={css.imgWrapper}>
          <Image
            className={css.img}
            src={service.img}
            alt={service.mainTitle}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 50vw"
          />
        </div>
      )}

      <div className={css.text}>
        <h2>{service.mainTitle}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
