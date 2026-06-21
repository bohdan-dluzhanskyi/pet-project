import css from "./ServisesHero.module.css";

export default function ServisesHero() {
  return (
    <div className={css.servisesContainer}>
      <div className={css.servisesText}>
        <h2>
          <span>DeveloperService</span> — професійна розробка сайтів для дому та
          бізнесу
        </h2>
        <p>
          Ми створюємо сучасні вебсайти, інтернет-магазини та сервіси швидко,
          якісно й з гарантією підтримки
        </p>
      </div>
      <img
        className={css.servisesImg}
        src="/servises-hero.webp"
        alt="teem in work"
      />
    </div>
  );
}
