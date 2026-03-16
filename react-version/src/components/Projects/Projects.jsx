import { useLanguage } from "../../hooks/useLanguage";
import { PROJECTS } from "../../utils/constants";
import styles from "./Projects.module.css";

export default function Projects() {
  const { translate } = useLanguage();

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{translate("projects.title")}</h2>
          <p className={styles.sectionSubtitle}>
            {translate("projects.subtitle")}
          </p>
        </div>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={translate(project.title)}
                  className={styles.projectImg}
                  loading="lazy"
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a
                      href={project.demoLink}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver demo de ${translate(project.title)}`}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href={project.githubLink}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código en GitHub de ${translate(project.title)}`}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>
                  {translate(project.title)}
                </h3>
                <p className={styles.projectDescription}>
                  {translate(project.description)}
                </p>
                <div className={styles.projectTech}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
