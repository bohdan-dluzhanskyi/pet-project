"use client";

import { useState } from "react";
import Link from "next/link";
import css from "./Header.module.css";
import Btn from "../Btn/Btn";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo} onClick={closeMenu}>
          Developer<span>Service</span>
        </Link>

        {/* Кнопка бургер-меню */}
        <button
          className={`${css.burgerBtn} ${isOpen ? css.active : ""}`}
          onClick={toggleMenu}
          aria-label="Переключити меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${css.nav} ${isOpen ? css.active : ""}`}>
          <ul className={css.navList}>
            <li>
              <Link href="/" onClick={closeMenu}>
                Головна
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                Про компанію
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMenu}>
                Послуги
              </Link>
            </li>
            <li>
              <Link href="/ai-assistent" onClick={closeMenu}>
                AI-асистент
              </Link>
            </li>
            <li>
              <Link href="/contacts" onClick={closeMenu}>
                Контакти
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`${css.ctaBtn} ${isOpen ? css.active : ""}`}>
          <Btn text="Зв'язатись" variant="primary" />
        </div>
      </div>
    </header>
  );
}
