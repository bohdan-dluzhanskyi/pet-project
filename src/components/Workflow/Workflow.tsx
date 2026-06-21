import css from "./Workflow.module.css";
import WorkflowItem from "./WorkflowItem";

export default function Workflow() {
  return (
    <section className={css.workflowContainer}>
      <div className={css.workflowTop}>
        <div className={css.workflowTitle}>
          <p>Як ми прицюємо</p>
          <h2>Простий процес — надійний результат</h2>
        </div>
        <div className={css.workflowRight}>
          <p>
            Ми беремо на себе всі етапи розробки, пояснюємо кожен крок і
            тримаємо вас у курсі до завершення робіт
          </p>
        </div>
      </div>
      <div className={css.workflowMane}>
        <img
          className={css.workflowImg}
          src="/workflow.webp"
          alt="teem in work"
        />

        <ul className={css.workflowItems}>
          <WorkflowItem
            title="Аналіз та ТЗ"
            text="Обговорюємо ідею, формуємо вимоги та складаємо чіткий план."
            icon="/symbol-defs.svg#icon-analysis"
          />

          <WorkflowItem
            title="Дизайн та UX"
            text="Створюємо інтерактивний прототип, малюємо інтерфейс та продумуємо зручність користувача."
            icon="/symbol-defs.svg#icon-design"
          />

          <WorkflowItem
            title="Розробка"
            text="Пишемо чистий код, налаштовуємо логіку та інтегруємо адмін-панель."
            icon="/symbol-defs.svg#icon-development"
          />

          <WorkflowItem
            title="Тести та запуск"
            text="Перевіряємо швидкість, виправляємо помилки та переносимо на хостинг."
            icon="/symbol-defs.svg#icon-launch"
          />
        </ul>
      </div>
    </section>
  );
}
