# 🗺️ MAPA RÁPIDO - ¿Dónde modificar qué?

## 📝 CONTENIDO DE TEXTO

### Nombres, títulos, descripciones

📍 `src/utils/translations.js`

- Editar secciones "es" para Español
- Editar secciones "en" para Inglés

**Ejemplo:**

```javascript
es: {
  nav: {
    home: "Inicio"; // ← Modificar aquí
  }
}
```

---

## 🎨 ESTILOS GLOBALES

### Colores, fuentes, espaciados

📍 `src/styles/global.css`

**Variables disponibles:**

```css
--primary-color: #667eea --secondary-color: #764ba2 --accent-color: #f093fb
  --text-primary: #2d3748 --background-light: #f7fafc;
```

---

## 🛠️ DATOS DINÁMICOS

### Proyectos, Habilidades, Servicios

📍 `src/utils/constants.js`

**PROYECTOS:**

```javascript
export const PROJECTS = [
  {
    id: 1,
    title: "projects.ecommerce.title",
    description: "projects.ecommerce.description",
    image: "URL-IMAGEN",
    demoLink: "/demo.html",
    githubLink: "https://github.com/...",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  // Agregar más aquí
];
```

**HABILIDADES:**

```javascript
export const SKILLS = [
  {
    id: 1,
    title: "HTML5",
    description: "skills.html5",
    icon: "https://cdn.jsdelivr.net/...", // o 'fas fa-icon'
  },
  // Agregar más aquí
];
```

**SERVICIOS:**

```javascript
export const SERVICES = [
  {
    id: 1,
    title: "services.ui.title",
    description: "services.ui.description",
    icon: "fas fa-palette",
  },
  // Agregar más aquí
];
```

---

## 🧩 COMPONENTES POR SECCIÓN

### Header (Navegación)

📍 `src/components/Header/Header.jsx`
📍 `src/components/Header/Header.module.css`

- Logo, menú navegación, selector idioma, toggle tema

### Hero (Portada)

📍 `src/components/Hero/Hero.jsx`
📍 `src/components/Hero/Hero.module.css`

- Título principal, botones CTA, foto

### About (Sobre mí)

📍 `src/components/About/About.jsx`
📍 `src/components/About/About.module.css`

- Bio, destacados

### Skills (Habilidades)

📍 `src/components/Skills/Skills.jsx`
📍 `src/components/Skills/Skills.module.css`

- Grid de habilidades técnicas

### Services (Servicios)

📍 `src/components/Services/Services.jsx`
📍 `src/components/Services/Services.module.css`

- Tarjetas de servicios

### Projects (Proyectos)

📍 `src/components/Projects/Projects.jsx`
📍 `src/components/Projects/Projects.module.css`

- Portfolio de trabajos

### Contact (Contacto)

📍 `src/components/Contact/Contact.jsx`
📍 `src/components/Contact/Contact.module.css`

- Formulario con validación

### Footer (Pie)

📍 `src/components/Footer/Footer.jsx`
📍 `src/components/Footer/Footer.module.css`

- Enlaces y redes sociales

---

## 🌍 CONTEXTOS (Estado Global)

### Idioma

📍 `src/context/LanguageContext.jsx`
📍 Hook: `src/hooks/useLanguage.js`

**Uso:**

```jsx
const { translate, language, switchLanguage } = useLanguage()
<h1>{translate('nav.home')}</h1>
```

### Tema

📍 `src/context/ThemeContext.jsx`
📍 Hook: `src/hooks/useTheme.js`

**Uso:**

```jsx
const { isDarkMode, toggleTheme } = useTheme()
<button onClick={toggleTheme}>Cambiar tema</button>
```

### Scroll

📍 `src/hooks/useScrollPosition.js`

**Uso:**

```jsx
const { scrollPosition, isScrollingDown } = useScrollPosition();
```

---

## ✅ VALIDACIÓN DE FORMULARIO

### Validadores

📍 `src/utils/validators.js`

**Funciones disponibles:**

- `validateEmail(email)` - Valida email
- `validateForm(formData)` - Valida todo el formulario

---

## 📱 RESPONSIVE

Todos los componentes tienen media queries:

```css
@media (max-width: 768px) {
  /* Estilos móviles */
}
```

---

## 🚀 COMANDOS ÚTILES

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview del build
npm run preview

# Linting (si lo configuras)
npm run lint

# Tests (si lo configuras)
npm run test
```

---

## 📍 LISTA DE CHEQUEO RÁPIDA

- [ ] Cambiar nombre en header → `translations.js`
- [ ] Cambiar foto → Reemplazar imagen en `public/assets/`
- [ ] Editar biografía → `translations.js` (about section)
- [ ] Agregar proyectos → `constants.js` (PROJECTS array)
- [ ] Cambiar colores → `global.css` (variables CSS)
- [ ] Editar servicios → `constants.js` (SERVICES array)
- [ ] Cambiar redes sociales → `Footer.jsx`
- [ ] Modificar email contacto → `Footer.jsx`

---

## 💡 TIPS

✅ Toda la traducción está centralizada en `translations.js`
✅ Todos los colores son variables CSS reutilizables
✅ CSS Modules evita conflictos de estilos
✅ Componentes son independientes y autosuficientes
✅ Usa `useLanguage()` para cualquier texto dinámico
✅ Usa `useTheme()` para funcionalidad de tema

---

¡Todo está **mega organizado** para que encuentres lo que necesites en segundos! 🎉
