import Link from "next/link";
import css from "./Header.module.css";
import Btn from "../Btn/Btn";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          Developer<span>Service</span>
        </Link>

        <nav>
          <ul className={css.navList}>
            <li>
              <Link href="/">Головна</Link>
            </li>
            <li>
              <Link href="/about">Про компанію</Link>
            </li>
            <li>
              <Link href="/services">Послуги</Link>
            </li>
            <li>
              <Link href="/blog">Блог</Link>
            </li>
            <li>
              <Link href="/contacts">Контакти</Link>
            </li>
          </ul>
        </nav>

        <Btn text="Зв'язатись" variant="primary" />
      </div>
    </header>
  );
}
