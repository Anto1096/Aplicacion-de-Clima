import { useLanguage } from "../../hooks/useLanguage";
import styles from "./About.module.css";

export default function About() {
  const { translate } = useLanguage();

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{translate("about.title")}</h2>
          <p className={styles.sectionSubtitle}>
            {translate("about.subtitle")}
          </p>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>{translate("about.p1")}</p>
            <p>{translate("about.p2")}</p>
            <div className={styles.aboutHighlights}>
              <div className={styles.highlightItem}>
                <i className="fas fa-lightbulb"></i>
                <span>{translate("about.highlights.creative")}</span>
              </div>
              <div className={styles.highlightItem}>
                <i className="fas fa-users"></i>
                <span>{translate("about.highlights.teamwork")}</span>
              </div>
              <div className={styles.highlightItem}>
                <i className="fas fa-rocket"></i>
                <span>{translate("about.highlights.learning")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
