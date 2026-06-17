import css from "./ServisesCard.module.css";
import clsx from "clsx";
import Link from "next/link";

interface CardProp {
  title: string;
  variant: string;
  link: string | URL;
}
export default function Card({ title, variant, link }: CardProp) {
  return (
    <div className={clsx(css.card, css[variant])}>
      <h3>{title}</h3>
      <Link className={css.button} href={link}>
        <svg>
          <use href="/symbol-defs.svg#icon-arrow-up" />
        </svg>
      </Link>
    </div>
  );
}
