# Portfolio Antonella Rivas - Versión React

Landing page profesional de Antonella Rivas (Desarrolladora Frontend Junior) migrada a **React + Vite**.

## 🚀 Stack Tecnológico

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server ultrarrápido
- **React Router v6** - Enrutamiento (preparado para futuras páginas)
- **CSS Modules** - Estilos modularizados y organizados
- **Context API** - Gestión de estado global

## 📁 Estructura del Proyecto

```
react-version/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Header/          # Navegación, selector de idioma, tema
│   │   ├── Hero/            # Sección principal
│   │   ├── About/           # Información personal
│   │   ├── Skills/          # Habilidades técnicas
│   │   ├── Services/        # Servicios ofrecidos
│   │   ├── Projects/        # Portafolio de proyectos
│   │   ├── Contact/         # Formulario de contacto
│   │   └── Footer/          # Pie de página
│   │
│   ├── pages/               # Páginas de la aplicación
│   │   └── Home.jsx         # Página principal (integra todos los componentes)
│   │
│   ├── context/             # Context API para estado global
│   │   ├── LanguageContext.jsx     # Multiidioma (ES/EN)
│   │   └── ThemeContext.jsx        # Tema claro/oscuro
│   │
│   ├── hooks/               # Hooks custom reutilizables
│   │   ├── useLanguage.js   # Hook para acceder al contexto de idioma
│   │   ├── useTheme.js      # Hook para acceder al contexto de tema
│   │   └── useScrollPosition.js    # Hook para posición del scroll
│   │
│   ├── utils/               # Funciones y constantes utilitarias
│   │   ├── translations.js  # Diccionario multiidioma (ES/EN)
│   │   ├── constants.js     # Datos: proyectos, habilidades, servicios
│   │   └── validators.js    # Validaciones de formulario
│   │
│   ├── styles/              # Estilos globales
│   │   └── global.css       # Variables CSS, reset, tipografía
│   │
│   ├── App.jsx              # Configuración principal (Context Providers)
│   └── main.jsx             # Punto de entrada
│
├── public/                  # Archivos estáticos
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
└── README.md                # Este archivo
```

## 🎯 Características

✅ **Componentes modulares** - Fácil de encontrar y modificar  
✅ **CSS Modules** - Sin conflictos de estilos  
✅ **Context API** - Estado compartido limpio y simple  
✅ **Hooks custom** - Lógica reutilizable  
✅ **Multiidioma** - Soporte para Español e Inglés  
✅ **Tema claro/oscuro** - Toggle integrado  
✅ **Responsive Design** - Mobile-first  
✅ **Validación de formularios** - Integrada

## 🛠️ Instalación y Setup

### 1. Dependencias

```bash
cd react-version
npm install
```

### 2. Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Build para producción

```bash
npm run build
```

### 4. Preview de build

```bash
npm run preview
```

## 📝 Guía de Modificaciones

### 📍 Cambiar contenido de texto

**Archivo:** `src/utils/translations.js`

```javascript
export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí", // Modificar aquí
      // ...
    },
  },
};
```

### 📍 Agregar/modificar proyectos

**Archivo:** `src/utils/constants.js`

```javascript
export const PROJECTS = [
  {
    id: 1,
    title: "projects.ecommerce.title", // Referencia a translation
    description: "projects.ecommerce.description",
    image: "url-imagen.jpg",
    demoLink: "/projects/demo.html",
    githubLink: "https://github.com/...",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  // Agregar más proyectos aquí
];
```

### 📍 Agregar/modificar habilidades

**Archivo:** `src/utils/constants.js`

```javascript
export const SKILLS = [
  {
    id: 1,
    title: "HTML5",
    description: "skills.html5", // Referencia a translation
    icon: "https://cdn.jsdelivr.net/gh/...", // URL externa o ícono Font Awesome
  },
  // Agregar más habilidades aquí
];
```

### 📍 Modificar estilos globales

**Archivo:** `src/styles/global.css`

Variables CSS disponibles:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  --text-primary: #2d3748;
  --background-light: #f7fafc;
  /* Y muchas más... */
}
```

### 📍 Personalizar componentes individuales

Cada componente tiene su propia carpeta con:

- `ComponentName.jsx` - Lógica React
- `ComponentName.module.css` - Estilos modulares
- `index.js` - Exportación simplificada

**Ejemplo para modificar el Header:**

```
src/components/Header/
├── Header.jsx          # Modificar JSX aquí
├── Header.module.css   # Modificar estilos aquí
└── index.js            # No tocar
```

## 🎨 Paleta de Colores

```
Primary:   #667eea (Azul)
Secondary: #764ba2 (Púrpura)
Accent:    #f093fb (Rosa)
Text:      #2d3748 (Gris oscuro)
Background:#f7fafc (Gris claro)
```

## 🌍 Multiidioma

El sitio soporta **Español** e **Inglés** automáticamente.

Para usar el contexto en un componente:

```jsx
import { useLanguage } from "../../hooks/useLanguage";

export default function MiComponente() {
  const { translate, language, switchLanguage } = useLanguage();

  return (
    <h1>{translate("nav.home")}</h1> // "Inicio" o "Home"
  );
}
```

## 🎭 Tema Claro/Oscuro

El tema se almacena en localStorage y se detecta la preferencia del sistema.

Para usar en un componente:

```jsx
import { useTheme } from "../../hooks/useTheme";

export default function MiComponente() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}
```

## 📱 Responsive Design

Breakpoints configurados:

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Usa media queries en CSS Modules:

```css
@media (max-width: 768px) {
  /* Estilos móviles aquí */
}
```

## ✅ Validación de Formulario

**Archivo:** `src/utils/validators.js`

```javascript
import { validateForm } from "../../utils/validators";

const errors = validateForm(formData);
```

## 🚀 Próximas Mejoras

- [ ] Agregar React Query para datos remotos
- [ ] Implementar análitica (Google Analytics)
- [ ] PWA (Progressive Web App)
- [ ] Optimización de imágenes
- [ ] Unit tests
- [ ] E2E tests

## 📧 Contacto

**Antonella Rivas**

- Email: antonella.rivas@email.com
- GitHub: [github.com/Anto1096](https://github.com/Anto1096)
- LinkedIn: [linkedin.com/in/antonellarivas](https://linkedin.com/in/antonellarivas)

## 📄 Licencia

MIT - Libre para usar y modificar.
