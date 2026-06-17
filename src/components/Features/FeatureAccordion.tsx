"use client";

import { useState } from "react";
import css from "./FeatureAccordion.module.css";

const items = [
  {
    title: "Чистий код",
    text: "Легка підтримка та швидке масштабування проєкту.",
    icon: "/symbol-defs.svg#icon-clean-code",
  },
  {
    title: "Pixel Perfect",
    text: "Точна відповідність дизайну до останнього пікселя.",
    icon: "/symbol-defs.svg#icon-pixel-perfect",
  },
  {
    title: "Максимальна швидкість",
    text: "Оптимізація завантаження та високі бали PageSpeed.",
    icon: "/symbol-defs.svg#icon-speed",
  },
  {
    title: "SEO-адаптація",
    text: "Правильна структура для кращої видачі в Google.",
    icon: "/symbol-defs.svg#icon-seo",
  },
];

export default function FeatureAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  return (
    <div
      className={`${css.container} ${
        isOpen ? css.containerCompact : css.containerNormal
      }`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`${css.card} ${openIndex === index ? css.cardOpen : ""}`}
        >
          <div className={css.header}>
            <span className={css.iconContainer}>
              <svg className={css.icon} viewBox="0 0 32 32">
                <use href={item.icon} />
              </svg>
            </span>
            <h3>{item.title}</h3>

            <button
              className={css.learnMoreButton}
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <svg viewBox="0 0 32 32">
                <use
                  href={
                    openIndex === index
                      ? "/symbol-defs.svg#icon-arrow-up"
                      : "/symbol-defs.svg#icon-arrow-down"
                  }
                />
              </svg>
            </button>
          </div>

          {openIndex === index && (
            <div className={css.content}>
              <div className={css.line}></div>
              <p>{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
