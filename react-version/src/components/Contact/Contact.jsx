import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../hooks/useLanguage";
import { validateForm } from "../../utils/validators";
import styles from "./Contact.module.css";

export default function Contact() {
  const { translate } = useLanguage();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        {
          publicKey,
        },
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error("EmailJS submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{translate("contact.title")}</h2>
          <p className={styles.sectionSubtitle}>
            {translate("contact.subtitle")}
          </p>
        </div>

        <div className={styles.contactContent}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                {translate("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.error : ""}`}
                placeholder={translate("contact.namePlaceholder")}
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                {translate("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.error : ""}`}
                placeholder={translate("contact.emailPlaceholder")}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                {translate("contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`${styles.input} ${errors.subject ? styles.error : ""}`}
                placeholder={translate("contact.subjectPlaceholder")}
                disabled={isSubmitting}
              />
              {errors.subject && (
                <span className={styles.errorMessage}>{errors.subject}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                {translate("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.textarea} ${errors.message ? styles.error : ""}`}
                placeholder={translate("contact.messagePlaceholder")}
                rows="5"
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <span className={styles.errorMessage}>{errors.message}</span>
              )}
            </div>

            {submitStatus && (
              <div className={`${styles.formStatus} ${styles[submitStatus]}`}>
                {submitStatus === "success"
                  ? translate("contact.success")
                  : translate("contact.error")}
              </div>
            )}

            <button
              type="submit"
              className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? translate("contact.sending")
                : translate("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
