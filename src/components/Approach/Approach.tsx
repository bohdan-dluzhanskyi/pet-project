import css from "./Approach.module.css";

export default function Approach() {
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
      <ul className={css.approachCards}>
        <li className={css.approachCard}>
          <div className={css.cardTitle}>
            <span className={css.cardIcon}>
              <svg className={css.icon}>
                <use href="./symbol-defs.svg#icon-quality"></use>
              </svg>
            </span>
            <h3>Якість</h3>
          </div>
          <p className={css.cardText}>
            Пишемо чистий, структурований код і використовуємо сучасні стандарти
            для стабільної роботи сайту.
          </p>
        </li>
        <li className={css.approachCard}>
          <div className={css.cardTitle}>
            <span className={css.cardIcon}>
              <svg className={css.icon}>
                <use href="./symbol-defs.svg#icon-transparency"></use>
              </svg>
            </span>
            <h3>Прозорість</h3>
          </div>
          <p className={css.cardText}>
            Чітко дотримуємось дедлайнів, демонструємо проміжні результати та
            працюємо без прихованих платежів.
          </p>
        </li>
        <li className={css.approachCard}>
          <div className={css.cardTitle}>
            <span className={css.cardIcon}>
              <svg className={css.icon}>
                <use href="./symbol-defs.svg#icon-support"></use>
              </svg>
            </span>
            <h3>Підтримка</h3>
          </div>
          <p className={css.cardText}>
            Не зникаємо після релізу: тестуємо проєкт під навантаженням та
            консультуємо на етапі запуску.
          </p>
        </li>
      </ul>
    </section>
  );
}
