import Btn from "../components/Btn/Btn";
import css from "./page.module.css";
import ServisesSection from "../components/ServisesSection/ServisesSection";
import Features from "../components/Features/Features";
import Feedback from "../components/Feedback/Feedback";
import Workflow from "../components/Workflow/Workflow";

export default function Home() {
  return (
    <div className={css.container}>
      <section className={css.heroSection}>
        <div className={css.heroText}>
          <h1 className={css.title}>
            Developer<span>Service</span>
          </h1>
          <p className={css.description}>
            Перетворюємо ваші ідеї на ефективні вебрішення
          </p>
        </div>
        <div className={css.miniModal}>
          <p className={css.miniModalText}>Кодимо майбутнє вашого бізнесу</p>
          <Btn text="Залишити заявку" variant="primary" />
        </div>
      </section>
      <ServisesSection></ServisesSection>
      <Features></Features>
      <Workflow></Workflow>
      <Feedback></Feedback>
    </div>
  );
}
