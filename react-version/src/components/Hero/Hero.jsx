import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Hero.module.css";

export default function Hero() {
  const { translate } = useLanguage();

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span>{translate("hero.greeting")}</span>
              <span className={styles.accentText}>Antonella Rivas</span>
            </h1>
            <h2 className={styles.heroSubtitle}>
              {translate("hero.subtitle")}
            </h2>
            <p className={styles.heroDescription}>
              {translate("hero.description")}
            </p>
            <div className={styles.heroButtons}>
              <a
                href="#contact"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                <i className="fas fa-envelope"></i>
                <span>{translate("hero.btnWork")}</span>
              </a>
              <a
                href="#projects"
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                <i className="fas fa-code"></i>
                <span>{translate("hero.btnProjects")}</span>
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroAvatar}>
              <img
                src="/assets/pixelcut-export.jpg"
                alt="Antonella Rivas - Desarrolladora Frontend"
                className={styles.avatarImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroScroll}>
        <a
          href="#about"
          className={styles.scrollIndicator}
          aria-label="Ir a la sección Sobre mí"
        >
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
