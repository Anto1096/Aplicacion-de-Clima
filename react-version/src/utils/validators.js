export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateForm(formData) {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  }

  if (!validateEmail(formData.email)) {
    errors.email = "Por favor ingresa un email válido";
  }

  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.subject = "El asunto debe tener al menos 3 caracteres";
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
}
