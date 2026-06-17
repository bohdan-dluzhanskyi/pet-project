import css from "./ContactsHero.module.css";

const items = [
  {
    title: "Телефон",
    text: "+38 (098) 432 34 34",
    icon: "/symbol-defs.svg#icon-phone",
  },
  {
    title: "Email",
    text: "123@gmail.com",
    icon: "/symbol-defs.svg#icon-mail",
  },
  {
    title: "Локація",
    text: "м. Київ, вул. Перемоги 12",
    icon: "/symbol-defs.svg#icon-location",
  },
  {
    title: "Часи роботи",
    text: "Пн-пт : 9:00-20:00 Сб-нд : вихідний",
    icon: "/symbol-defs.svg#icon-clock",
  },
];

export default function ContactsHero() {
  return (
    <section className={css.hero}>
      <div className={css.contactsText}>
        <h2>Контакти</h2>
        <p>
          Зв’яжіться з нами зручним для вас способом — обговоримо вашу ідею,
          проконсультуємо щодо технологій та створимо надійний цифровий продукт
          для вашого бізнесу.
        </p>
      </div>

      <ul className={css.items}>
        {items.map(({ title, text, icon }) => (
          <li key={title} className={css.item}>
            <div className={css.iconTitle}>
              <span className={css.iconConrainer}>
                <svg className={css.icon} viewBox="0 0 32 32">
                  <use xlinkHref={icon} />
                </svg>
              </span>
              <h3 className={css.title}>{title}</h3>
            </div>
            <div className={css.line}></div>
            <p className={css.text}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
