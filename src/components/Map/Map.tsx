import css from "./Map.module.css";

export default function Map() {
  return (
    <section className={css.container}>
      <div>
        <h2 className={css.mapTitle}>Ми на мапі</h2>
        <p className={css.mapText}>
          Знайдіть наш сервісний центр на карті та прокладіть зручний маршрут
        </p>
      </div>
      <div className={css.mapContainer}>
        <div className={css.mapOverlay}></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.4740756457268!2d30.537542145008256!3d50.41917238928644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf14ea8caf9f%3A0xa6cc0ae9ace038a3!2z0YPQuy4g0J_QsNGC0YDQuNGB0LAg0JvRg9C80YPQvNCx0YssIDIxLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1781557879026!5m2!1sru!2sua"
          width="1200"
          height="600"
          allowFullScreen
          loading="lazy"
          className={css.map}
        ></iframe>
      </div>
    </section>
  );
}
