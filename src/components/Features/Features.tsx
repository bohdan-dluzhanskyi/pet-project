import css from "./Features.module.css";
import FeatureAccordion from "./FeatureAccordion";

export default function Features() {
  return (
    <section className={css.featuresSection}>
      <p className={css.sectionDescription}>Чому DeveloperService</p>
      <h2 className={css.featuresTitle}>Чому обирають DeveloperService</h2>
      <div className={css.featuresContainer}>
        <FeatureAccordion></FeatureAccordion>
        <img className={css.featuresImg} src="/feature-section.jpg"></img>
      </div>
    </section>
  );
}
