import css from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <div className={css.aboutContainer}>
      <img className={css.aboutImg} src="/about-hero.webp" alt="teem in work" />
      <div className={css.aboutText}>
        <h2>
          <span>DeveloperService</span> — ваш надійний партнер у веб-розробці
        </h2>
        <p>
          Ми — команда досвідчених розробників, яка створює сучасні сайти,
          інтернет-магазини та сервіси. Наша мета — перетворювати складні
          технічні завдання на прості, швидкі та ефективні рішення для вашого
          бізнесу із гарантією стабільної підтримки.
        </p>
      </div>
    </div>
  );
}
