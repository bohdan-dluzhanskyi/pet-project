"use client";

import css from "./Btn.module.css";
import clsx from "clsx";
import type { MouseEvent } from "react";
import { useModalStore } from "@/src/store/useModalStore"; // Імпортуємо наш стор

interface BtnProps {
  text: string;
  variant: "primary" | "secondary" | "outline";
  onClick?: () => void; // Залишаємо можливість передати кастомний клік
}

export default function Btn({ text, variant, onClick }: BtnProps) {
  const openModal = useModalStore((state) => state.openModal); // Дістаємо функцію відкриття

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const handleButtonClick = () => {
    if (onClick) {
      onClick(); // Якщо в кнопку передали унікальний onClick (наприклад, перехід по лінку або інша дія)
    } else {
      openModal(); // Якщо клік не передано — кнопка всюди за замовчуванням відкриває форму заявки
    }
  };

  return (
    <button
      className={clsx(css.btn, css[variant])}
      onMouseMove={handleMouseMove}
      onClick={handleButtonClick}
    >
      <span className={css.label}>{text}</span>
    </button>
  );
}
