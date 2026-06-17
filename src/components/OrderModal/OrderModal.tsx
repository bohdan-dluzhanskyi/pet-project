"use client";

import { useEffect, useRef, useState } from "react";
import css from "./OrderModal.module.css";
import { useModalStore } from "@/src/store/useModalStore"; // Імпортуємо стор
import Link from "next/link";
import type { MouseEvent } from "react";

export default function OrderModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Дістаємо глобальний стан та функцію закриття із Zustand
  const { isOpen, closeModal } = useModalStore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeModal();
    }
  };
  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Вмикаємо лоадер на кнопці
    try {
      // Робимо запит до нашого API роуту
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, comment }),
      });

      if (response.ok) {
        alert("Дякуємо! Заявка успішно надіслана.");
        // Очищаємо форму
        setName("");
        setPhone("");
        setComment("");
        closeModal();
      } else {
        alert("Щось пішло не так. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error(error);
      alert("Сталася помилка з'єднання.");
    } finally {
      setIsLoading(false); // Вимикаємо лоадер
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={css.modal}
      onClose={closeModal}
      onClick={handleBackdropClick}
    >
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={closeModal} type="button">
          <svg viewBox="0 0 32 32" width="20" height="20">
            <path
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              d="M8 8l16 16M24 8L8 24"
            />
          </svg>
        </button>

        <div className={css.logoContainer}>
          <Link href="/" className={css.logo}>
            Developer<span>Service</span>
          </Link>
        </div>

        <h2>Обговорімо ваш проєкт</h2>
        <p className={css.subtitle}>
          Залиште контакти та коротко опишіть задачу — ми підготуємо персональну
          пропозицію
        </p>

        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.inputGroup}>
            <input
              id="modal-name"
              type="text"
              required
              placeholder="Олександр"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className={css.inputGroup}>
            <input
              id="modal-phone"
              type="tel"
              required
              placeholder="+380 (99) 000-00-00"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className={css.inputGroup}>
            <textarea
              id="modal-comment"
              required
              rows={4}
              placeholder="Потрібно розробити інтернет-магазин..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className={css.textarea}
              disabled={isLoading}
            />
          </div>

          {/* Текст кнопки змінюється залежно від стану завантаження */}
          <button
            type="submit"
            className={css.submitButton}
            disabled={isLoading}
            onMouseMove={handleMouseMove}
          >
            <span className={css.label}>
              {isLoading ? "Відправка..." : "Надіслати заявку"}
            </span>
          </button>
        </form>
      </div>
    </dialog>
  );
}
