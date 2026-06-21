import css from "./Teem.module.css";
import Carousel from "./Carousel";

export default function Teem() {
  return (
    <section className={css.approachSection}>
      <div className={css.approachTop}>
        <div className={css.approachTitle}>
          <p>Наша команда</p>
          <h2>Люди, які створюють ваш успіх</h2>
        </div>
        <div className={css.approachRight}>
          <p>
            DeveloperService — це синергія досвідчених розробників, аналітиків
            та дизайнерів, закоханих у свою справу. Ми об’єдналися, щоб
            перетворювати ваші складні бізнес-виклики на надійні, красиві та
            масштабовані цифрові рішення.
          </p>
        </div>
      </div>
      <Carousel></Carousel>
    </section>
  );
}
