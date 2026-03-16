import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { translate } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Antonella Rivas</h4>
            <p>{translate("footer.subtitle")}</p>
          </div>

          <div className={styles.footerSection}>
            <h5>{translate("footer.quickLinks")}</h5>
            <ul className={styles.links}>
              <li>
                <a href="#home">{translate("footer.home")}</a>
              </li>
              <li>
                <a href="#about">{translate("footer.about")}</a>
              </li>
              <li>
                <a href="#projects">{translate("footer.projects")}</a>
              </li>
              <li>
                <a href="#contact">{translate("footer.contact")}</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h5>{translate("footer.socialNetworks")}</h5>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/Anto1096"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/antonella-soto-988600180/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p className={styles.emailText}>
              <a href="mailto:antosoto2014@gmail.com">antosoto2014@gmail.com</a>
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; {currentYear} Antonella Rivas.{" "}
            {translate("footer.copyright")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
