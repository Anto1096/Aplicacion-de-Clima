# 📑 ÍNDICE COMPLETO DEL PROYECTO

## 📍 Acceso rápido por categoría

---

## 🚀 DOCUMENTACIÓN

| Archivo                                    | Propósito                           |
| ------------------------------------------ | ----------------------------------- |
| [README.md](./README.md)                   | Documentación completa del proyecto |
| [INICIO-RAPIDO.md](./INICIO-RAPIDO.md)     | Guía de setup en 5 minutos          |
| [MAPA-RAPIDO.md](./MAPA-RAPIDO.md)         | Dónde encontrar cada cosa           |
| [ÍNDICE-COMPLETO.md](./INDICE-COMPLETO.md) | Este archivo                        |

---

## 📦 CONFIGURACIÓN

| Archivo          | Propósito                       |
| ---------------- | ------------------------------- |
| `package.json`   | Dependencias y scripts npm      |
| `vite.config.js` | Configuración de Vite           |
| `index.html`     | HTML principal                  |
| `.gitignore`     | Archivos a ignorar en Git       |
| `.env.example`   | Variables de entorno (template) |

---

## 📝 CONTENIDO Y DATOS

### Traducciones y Diccionarios

📍 **`src/utils/translations.js`**

- Diccionario multiidioma (ES/EN)
- Organizado por secciones
- El ÚNICO lugar para cambiar textos

### Datos Dinámicos

📍 **`src/utils/constants.js`**

- `COLORS` - Paleta de colores
- `BREAKPOINTS` - Tamaños responsive
- `PROJECTS` - Array de proyectos
- `SKILLS` - Array de habilidades
- `SERVICES` - Array de servicios

### Validadores

📍 **`src/utils/validators.js`**

- `validateEmail()`
- `validateForm()`

---

## 🎨 COMPONENTES (Bloques principales)

### Estructura de cada componente

```
src/components/ComponentName/
├── ComponentName.jsx        ← Lógica React
├── ComponentName.module.css ← Estilos CSS
└── index.js                 ← Exportación
```

### Componentes disponibles

| Componente   | Ubicación                  | Propósito                 |
| ------------ | -------------------------- | ------------------------- |
| **Header**   | `src/components/Header/`   | Navegación, idioma, tema  |
| **Hero**     | `src/components/Hero/`     | Sección principal/portada |
| **About**    | `src/components/About/`    | Información personal      |
| **Skills**   | `src/components/Skills/`   | Grid de habilidades       |
| **Services** | `src/components/Services/` | Tarjetas de servicios     |
| **Projects** | `src/components/Projects/` | Portfolio de trabajos     |
| **Contact**  | `src/components/Contact/`  | Formulario contacto       |
| **Footer**   | `src/components/Footer/`   | Pie de página             |

---

## 📄 PÁGINAS

| Ubicación            | Propósito                     |
| -------------------- | ----------------------------- |
| `src/pages/Home.jsx` | Integra todos los componentes |

---

## 🌍 ESTADO GLOBAL (Context)

### Language Management

📍 **`src/context/LanguageContext.jsx`**

- Proporciona: `language`, `translate()`, `switchLanguage()`
- Hook: `src/hooks/useLanguage.js`

### Theme Management

📍 **`src/context/ThemeContext.jsx`**

- Proporciona: `isDarkMode`, `toggleTheme()`
- Hook: `src/hooks/useTheme.js`

---

## 🪝 CUSTOM HOOKS

| Hook                  | Ubicación                        | Retorna                                   |
| --------------------- | -------------------------------- | ----------------------------------------- |
| `useLanguage()`       | `src/hooks/useLanguage.js`       | `{ language, translate, switchLanguage }` |
| `useTheme()`          | `src/hooks/useTheme.js`          | `{ isDarkMode, toggleTheme }`             |
| `useScrollPosition()` | `src/hooks/useScrollPosition.js` | `{ scrollPosition, isScrollingDown }`     |

---

## 🎨 ESTILOS

### Estilos Globales

📍 **`src/styles/global.css`**

- Variables CSS (colores, espacios, fuentes)
- Reset y tipografía
- Animaciones globales

### Estilos por Componente

📍 **`src/components/*/Component.module.css`**

- Estilos CSS Module (no se interfieren)
- Responsive design integrado

---

## 📱 ARCHIVOS ESTÁTICOS

| Ubicación        | Contenido                    |
| ---------------- | ---------------------------- |
| `public/assets/` | Imágenes, iconos, documentos |

---

## 🔧 ENTRADA PRINCIPAL

| Archivo        | Propósito                        |
| -------------- | -------------------------------- |
| `src/main.jsx` | Punto de entrada (renderiza App) |
| `src/App.jsx`  | Configura Providers (Context)    |

---

## 📊 FLUJO DE DATOS

```
main.jsx (entry point)
    ↓
App.jsx (BrowserRouter + Providers)
    ↓
LanguageProvider (multiidioma)
    ↓
ThemeProvider (tema claro/oscuro)
    ↓
Home.jsx (página principal)
    ├── Header
    ├── Hero
    ├── About
    ├── Skills
    ├── Services
    ├── Projects
    ├── Contact
    └── Footer
```

---

## 🎯 TAREAS COMUNES

### "Quiero cambiar el texto del header"

1. Abre: `src/utils/translations.js`
2. Busca: `nav.home`, `nav.about`, etc.
3. Edita el valor

### "Quiero agregar un nuevo proyecto"

1. Abre: `src/utils/constants.js`
2. Encuentra: `export const PROJECTS = [`
3. Sumaun objeto nuevo al array

### "Quiero cambiar los colores"

1. Abre: `src/styles/global.css`
2. Modifica: `--primary-color`, `--secondary-color`, etc.
3. Se aplica automáticamente en todo

### "Quiero editar el formulario"

1. Abre: `src/components/Contact/Contact.jsx`
2. Modifica campos, validaciones, email

### "Quiero cambiar la foto"

1. Coloca imagen en: `public/assets/`
2. Abre: `src/components/Hero/Hero.jsx`
3. Modifica `src=` en la imagen

### "Quiero editar redes sociales"

1. Abre: `src/components/Footer/Footer.jsx`
2. Modifica los links en `href=`

---

## 🚀 COMANDOS NPM

```bash
npm run dev         # Desarrollo
npm run build       # Build producción
npm run preview     # Preview del build
npm run lint        # Linting (si instalas)
npm run test        # Tests (si instalas)
```

---

## 📂 VISTA DE ÁRBOL COMPLETO

```
react-version/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   │   └── index.js
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.module.css
│   │   │   └── index.js
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── About.module.css
│   │   │   └── index.js
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   ├── Skills.module.css
│   │   │   └── index.js
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   ├── Services.module.css
│   │   │   └── index.js
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.module.css
│   │   │   └── index.js
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   ├── Contact.module.css
│   │   │   └── index.js
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       ├── Footer.module.css
│   │       └── index.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── context/
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   ├── useLanguage.js
│   │   ├── useTheme.js
│   │   └── useScrollPosition.js
│   │
│   ├── utils/
│   │   ├── translations.js
│   │   ├── constants.js
│   │   └── validators.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│   └── assets/
│       └── pixelcut-export.jpg
│
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── .env.example
├── README.md
├── INICIO-RAPIDO.md
├── MAPA-RAPIDO.md
└── INDICE-COMPLETO.md
```

---

## 💡 TIPS FINALES

✅ **Busca por nombre de componente:** Header, Hero, About, etc.
✅ **Busca por tipo:** translations, constants, components, utils
✅ **Usa Ctrl+P en VS Code** para abrir archivo por nombre
✅ **Usa Ctrl+Shift+F** para buscar en todos los archivos

---

## 🆘 ¿NECESITAS AYUDA?

1. **¿Dónde está X?** → Lee [MAPA-RAPIDO.md](./MAPA-RAPIDO.md)
2. **¿Cómo hago Y?** → Lee [INICIO-RAPIDO.md](./INICIO-RAPIDO.md)
3. **Documentación completa** → Lee [README.md](./README.md)

---

**Última actualización:** 12 de marzo de 2026
**Versión:** React 1.0.0 con Vite

🚀 **¡Proyecto listo para modificar!**
