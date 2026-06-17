import css from "./Teem.module.css";
import Carousel from "./Carousel";

export default function Teem() {
  return (
    <section className={css.approachSection}>
      <div className={css.approachTop}>
        <div className={css.approachTitle}>
          <p>Наш підхід</p>
          <h2>Принципи розробки в DeveloperService</h2>
        </div>
        <div className={css.approachRight}>
          <p>
            Ми створюємо цифрові продукти на основі прозорості та технічної
            експертизи. Наш пріоритет — занурення у ваш бізнес, чистий код та
            рішення, які приносять реальний прибуток і масштабуються в
            майбутньому.
          </p>
        </div>
      </div>
      <Carousel></Carousel>
    </section>
  );
}
