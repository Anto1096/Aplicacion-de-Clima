import { useLanguage } from "../../hooks/useLanguage";
import { SKILLS } from "../../utils/constants";
import styles from "./Skills.module.css";

export default function Skills() {
  const { translate } = useLanguage();

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{translate("skills.title")}</h2>
          <p className={styles.sectionSubtitle}>
            {translate("skills.subtitle")}
          </p>
        </div>
        <div className={styles.skillsGrid}>
          {SKILLS.map((skill, index) => (
            <div
              key={skill.id}
              className={styles.skillCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.skillIcon}>
                {skill.icon.startsWith("http") ? (
                  <img src={skill.icon} alt={skill.title} />
                ) : (
                  <i className={skill.icon}></i>
                )}
              </div>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillDescription}>
                {translate(skill.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
