import css from "./ServisesSlugApproach.module.css";
import { servicesData } from "@/src/app/services/servicesData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServisesSlugApproach({ params }: PageProps) {
  const { slug } = await params;

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }
  return (
    <section className={css.approachSection}>
      <div className={css.approachTop}>
        <div className={css.approachTitle}>
          <p>Наш підхід</p>
          <h2>{service.title}</h2>
        </div>
        <div className={css.approachRight}>
          <p>{service.text}</p>
        </div>
      </div>
      <div className={css.items}>
        <div className={css.item}>
          <div className={css.iconTitle}>
            <span className={css.iconConrainer}>
              <svg className={css.icon} viewBox="0 0 32 32">
                <use xlinkHref={service.firsticon} />
              </svg>
            </span>
            <h3 className={css.title}>{service.firstCardTitle}</h3>
          </div>
          <p className={css.text}>{service.firstCardText}</p>
        </div>
        <div className={css.item}>
          <div className={css.iconTitle}>
            <span className={css.iconConrainer}>
              <svg className={css.icon} viewBox="0 0 32 32">
                <use xlinkHref={service.secondicon} />
              </svg>
            </span>
            <h3 className={css.title}>{service.secondCardTitle}</h3>
          </div>
          <p className={css.text}>{service.secondCardText}</p>
        </div>
      </div>
    </section>
  );
}
