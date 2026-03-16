import { useEffect, useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollPosition } = useScrollPosition();
  const { language, switchLanguage, translate } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const isScrolled = scrollPosition > 50;

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "services",
      "projects",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-90px 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    switchLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.navLogo}>
          <a href="#home">Antonella Rivas</a>
        </div>

        {/* Desktop Navigation */}
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          <li className={styles.navItem}>
            <a
              href="#home"
              className={`${styles.navLink} ${activeSection === "home" ? styles.active : ""}`}
              onClick={() => handleNavClick("home")}
              aria-current={activeSection === "home" ? "page" : undefined}
            >
              {translate("nav.home")}
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#about"
              className={`${styles.navLink} ${activeSection === "about" ? styles.active : ""}`}
              onClick={() => handleNavClick("about")}
              aria-current={activeSection === "about" ? "page" : undefined}
            >
              {translate("nav.about")}
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#skills"
              className={`${styles.navLink} ${activeSection === "skills" ? styles.active : ""}`}
              onClick={() => handleNavClick("skills")}
              aria-current={activeSection === "skills" ? "page" : undefined}
            >
              {translate("nav.skills")}
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#services"
              className={`${styles.navLink} ${activeSection === "services" ? styles.active : ""}`}
              onClick={() => handleNavClick("services")}
              aria-current={activeSection === "services" ? "page" : undefined}
            >
              {translate("nav.services")}
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#projects"
              className={`${styles.navLink} ${activeSection === "projects" ? styles.active : ""}`}
              onClick={() => handleNavClick("projects")}
              aria-current={activeSection === "projects" ? "page" : undefined}
            >
              {translate("nav.projects")}
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#contact"
              className={`${styles.navLink} ${activeSection === "contact" ? styles.active : ""}`}
              onClick={() => handleNavClick("contact")}
              aria-current={activeSection === "contact" ? "page" : undefined}
            >
              {translate("nav.contact")}
            </a>
          </li>
        </ul>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Theme Toggle */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            <i className={`fas fa-${isDarkMode ? "sun" : "moon"}`}></i>
          </button>

          {/* Language Switcher */}
          <div className={styles.languageSwitcher}>
            <button
              className={styles.langBtn}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              aria-label="Seleccionar idioma"
            >
              <i className="fas fa-globe"></i>
              <span>{language.toUpperCase()}</span>
            </button>
            <div
              className={`${styles.dropdownContent} ${isLanguageOpen ? styles.active : ""}`}
            >
              <button
                onClick={() => handleLanguageChange("es")}
                className={`${styles.dropdownItem} ${language === "es" ? styles.active : ""}`}
              >
                Español
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`${styles.dropdownItem} ${language === "en" ? styles.active : ""}`}
              >
                English
              </button>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
