import css from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.logoContainer}>
          <Link href="/" className={css.logo}>
            Developer<span>Service</span>
          </Link>
          <p>
            У сучасному світі ваш сайт або додаток — це головне обличчя бізнесу.
            Ми відмовляємося від шаблонів та конструкторів на користь
            індивідуальної розробки, розробляючи гнучкі інструменти, які легко
            адаптуються під майбутнє розширення вашої компанії.
          </p>
        </div>
        <div className={css.navContainer}>
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
          <div>
            <ul className={css.navServices}>
              <li>
                <Link href="/services">Послуги</Link>
              </li>
              <li>
                <Link href="/services/mobile-app">Мобільні додатки</Link>
              </li>
              <li>
                <Link href="/services/web-app">Веб-додатки</Link>
              </li>
              <li>
                <Link href="/services/web-site">Веб-сайти</Link>
              </li>
            </ul>
          </div>
          <div className={css.navContact}>
            <address className={css.navAddress}>
              <h3>Контакти</h3>
              <ul className={css.navAddress}>
                <li>
                  <a
                    className={css.navAddressList}
                    href="mailto:info@developerservice.com"
                  >
                    <svg className={css.icon}>
                      <use href="/symbol-defs.svg#icon-mail" />
                    </svg>
                    info@developerservice.com
                  </a>
                </li>
                <li>
                  <a
                    className={css.navAddressList}
                    href="https://goo.gl/maps/yourcompanyaddress"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className={css.icon}>
                      <use href="/symbol-defs.svg#icon-location" />
                    </svg>
                    123 Main St, Київ, Україна
                  </a>
                </li>
                <li>
                  <a className={css.navAddressList} href="tel:+380123456789">
                    <svg className={css.icon}>
                      <use href="/symbol-defs.svg#icon-phone" />
                    </svg>
                    +380 123 456 789
                  </a>
                </li>
              </ul>
            </address>
            <ul className={css.navSocial}>
              <li className={css.item}>
                <a href="#" aria-label="Location 1">
                  <svg className={css.iconSocial}>
                    <use href="/symbol-defs.svg#icon-youtube" />
                  </svg>
                </a>
              </li>

              <li className={css.item}>
                <a href="#" aria-label="Location 2">
                  <svg className={css.iconSocial}>
                    <use href="/symbol-defs.svg#icon-facebook" />
                  </svg>
                </a>
              </li>

              <li className={css.item}>
                <a href="#" aria-label="Location 3">
                  <svg className={css.iconSocial}>
                    <use href="/symbol-defs.svg#icon-inst" />
                  </svg>
                </a>
              </li>

              <li className={css.item}>
                <a href="#" aria-label="Location 4">
                  <svg className={css.iconSocial}>
                    <use href="/symbol-defs.svg#icon-tiktok" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.copyright}>
          <div className={css.placeholder}></div>
          <p>&copy; 2026 DeveloperService. All rights reserved.</p>
          <div>
            <button className={`${css.btnLang} ${css.active}`}>UA</button>

            <button className={css.btnLang}>EN</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
