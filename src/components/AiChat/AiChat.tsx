"use client";

import { useState, useRef, useEffect } from "react";
import Btn from "../Btn/Btn";
import { useModalStore } from "@/src/store/useModalStore";
import css from "./AiChat.module.css";

// Описуємо структуру повідомлення вручну
interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

export default function AiChat() {
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const openModal = useModalStore((state) => state.openModal);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Автоматичний скрол вниз при появі нових літер
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  // 📤 Відправка повідомлення та читання сирого текстового стріму
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = textInput.trim();
    if (!text || isLoading) return;

    setError(false);
    setIsLoading(true);
    setTextInput("");

    // Створюємо унікальні ID для повідомлень
    const userMsgId = Math.random().toString(36).substring(7);
    const aiMsgId = Math.random().toString(36).substring(7);

    // Додаємо повідомлення користувача в історію
    const updatedMessages: Message[] = [
      ...messages,
      { id: userMsgId, role: "user", text },
    ];
    setMessages(updatedMessages);

    try {
      // Робимо звичайний POST запит на ваш роут
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Конвертуємо нашу історію у формат, який очікує ваш роут
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.text,
          })),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to fetch stream");
      }

      // Додаємо порожнє повідомлення від ШІ, яке будемо наповнювати літерами
      setMessages((prev) => [
        ...prev,
        { id: aiMsgId, role: "assistant", text: "" },
      ]);

      // Працюємо з текстовим потоком (Stream Reader)
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let accumulatedText = "";

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;

        // Декодуємо отриманий шматок сирого тексту
        const chunk = decoder.decode(value, { stream: !done });
        accumulatedText += chunk;

        // Оновлюємо текст останнього повідомлення ШІ в реальному часі
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMsgId ? { ...msg, text: accumulatedText } : msg,
          ),
        );
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={css.chatWrapper}>
      {/* HEADER */}
      <div className={css.chatHeader}>
        <div className={css.statusDot} />
        <span>DeveloperStudio AI</span>
      </div>

      {/* CHAT WINDOW */}
      <div className={css.chatWindow} ref={chatWindowRef}>
        {messages.length === 0 && (
          <p className={css.placeholder}>
            Вітаю! Опишіть вашу бізнес-ідею чи завдання. Я допоможу спроектувати
            архітектуру для <b>мобільного додатка</b>, складного{" "}
            <b>веб-сервісу (SaaS)</b>
            або корпоративного <b>веб-сайту</b>, а також підберу надійний стек
            технологій та сформую первинне ТЗ 🚀
          </p>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={m.role === "user" ? css.userMsg : css.aiMsg}
          >
            <div className={css.msgLabel}>
              {m.role === "user" ? "Ви" : "AI Консультант"}
            </div>
            <div className={css.msgContent}>
              <p>{m.text}</p>
            </div>
          </div>
        ))}

        {/* Loader */}
        {isLoading && messages[messages.length - 1]?.text === "" && (
          <div className={css.loader}>AI думає...</div>
        )}

        {/* Error */}
        {error && <div className={css.error}>Сталася помилка AI</div>}
      </div>

      {/* INPUT FORM */}
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Напишіть запит..."
          disabled={isLoading}
          className={css.input}
        />
        <button
          type="submit"
          disabled={isLoading || !textInput.trim()}
          className={css.sendButton}
        >
          →
        </button>
      </form>

      {/* CTA BUTTON */}
      {messages.length >= 2 && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Btn text="Зафіксувати ТЗ" variant="primary" onClick={openModal} />
        </div>
      )}
    </div>
  );
}
