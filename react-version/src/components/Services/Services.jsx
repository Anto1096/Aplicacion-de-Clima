import { useLanguage } from "../../hooks/useLanguage";
import { SERVICES } from "../../utils/constants";
import styles from "./Services.module.css";

export default function Services() {
  const { translate } = useLanguage();

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{translate("services.title")}</h2>
          <p className={styles.sectionSubtitle}>
            {translate("services.subtitle")}
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.serviceIcon}>
                <i className={service.icon}></i>
              </div>
              <h3 className={styles.serviceTitle}>
                {translate(service.title)}
              </h3>
              <p className={styles.serviceDescription}>
                {translate(service.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
