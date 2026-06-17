import css from "./Feedback.module.css";
import Btn from "../Btn/Btn";

export default function Feedback() {
  return (
    <div className={css.feedbackContainer}>
      <h2>Залиште заявку — ми на зв’язку!</h2>
      <div className={css.feedbackTextContainer}>
        <p className={css.feedbackText}>
          Залиште заявку, щоб обговорити ваш проєкт, розрахувати вартість та
          отримати покроковий план розробки.
        </p>
        <Btn text="Залишити заявку" variant="outline"></Btn>
      </div>
    </div>
  );
}
