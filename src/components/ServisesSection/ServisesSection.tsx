import css from "./ServisesSection.module.css";
import ServisesCard from "./ServisesCard";

export default function ServicesSection() {
  return (
    <section className={css.servicesSection}>
      <p>Наші послуги</p>
      <h2>Створюємо цифрові рішення, які працюють на ваш бізнес</h2>
      <div className={css.servicesCards}>
        <ServisesCard
          title="Мобільні додатки"
          variant="first"
          link="/services/mobile-app"
        />
        <ServisesCard
          title="Веб-додатки"
          variant="second"
          link="/services/web-app"
        />
        <ServisesCard
          title="Веб-сайти"
          variant="third"
          link="/services/web-site"
        />
      </div>
    </section>
  );
}
