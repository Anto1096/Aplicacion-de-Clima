# 🚀 INICIO RÁPIDO

## ⏱️ 5 Minutos para tener todo funcionando

### 1️⃣ Instalar dependencias

```bash
cd react-version
npm install
```

⏳ Espera ~2-3 minutos (Primera vez)

### 2️⃣ Iniciar desarrollo

```bash
npm run dev
```

✅ Se abre automáticamente en http://localhost:3000

### 3️⃣ ¡Listo! Ahora puedes:

- 🌍 Cambiar idioma (ES/EN) - Arriba a la derecha
- 🌙 Toggle tema oscuro - Botón solar/lunar
- ✏️ Editar contenido (ver MAPA-RAPIDO.md)

---

## 📝 PRIMERAS COSAS A CAMBIAR

### 1. Tu foto (Hero Section)

1. Ve a `react-version/public/assets/`
2. Reemplaza `pixelcut-export.jpg` con tu imagen
3. Actualiza referencias si es necesario

**Nota:** Si copias `pixelcut-export.jpg` del proyecto original, listo

### 2. Textos principales

📍 `src/utils/translations.js`

Busca y edita:

- `hero.greeting` → "Hola, soy"
- `about.p1` → Tu biografía
- `heroSubtitle` → "Desarrolladora Frontend Junior"

### 3. Tus redes sociales

📍 `src/components/Footer/Footer.jsx`

Cambia los links:

```jsx
<a href="https://github.com/TU_USUARIO" ...>
<a href="https://linkedin.com/in/TU_USUARIO" ...>
```

### 4. Email de contacto

📍 `src/components/Footer/Footer.jsx`

```jsx
<a href="mailto:TU_EMAIL@gmail.com" ...>
```

---

## 🏗️ ESTRUCTURA MENTAL

```
¿Quiero cambiar:        Voy a:
─────────────────       ─────────────────────────────
Textos                  src/utils/translations.js
Colores                 src/styles/global.css
Proyectos               src/utils/constants.js
Habilidades             src/utils/constants.js
Servicios               src/utils/constants.js
Foto                    public/assets/
Layout                  src/components/*/Component.jsx
Estilos comp.           src/components/*/Component.module.css
```

---

## ⚙️ CONFIGURACIÓN IMPORTANTE

### ✋ No toques (por ahora):

```
src/context/          ← Context API
src/hooks/            ← Custom hooks
src/pages/            ← Estructura de páginas
App.jsx               ← Setup principal
main.jsx              ← Punto de entrada
vite.config.js        ← Config Vite
```

### ✅ Puedes modificar con seguridad:

```
src/components/       ← Lógica y estilos de componentes
src/utils/            ← Datos y validadores
src/styles/global.css ← Variables y estilos globales
public/               ← Imágenes y assets
```

---

## 🐛 TROUBLESHOOTING

### "No funciona nada después de instalar"

```bash
# Limpia y reinstala
rm -r node_modules package-lock.json
npm install
npm run dev
```

### "La imagen no se ve"

1. Verifica que la imagen esté en `public/assets/`
2. Usa la ruta correcta: `./assets/nombre-imagen.jpg`

### "El selector de idioma no funciona"

- Asegúrate de importar `useLanguage`:

```jsx
import { useLanguage } from "../../hooks/useLanguage";
```

### "Los estilos no se aplican"

- Verifica que importes el CSS Module correctamente:

```jsx
import styles from "./Component.module.css";
```

---

## 📦 BUILD PARA PRODUCCIÓN

Cuando necesites deploy:

```bash
# 1. Generar build optimizado
npm run build

# 2. La carpeta "dist" contiene todo listo para subir
# Sube "dist" a tu hosting (Vercel, Netlify, etc.)

# 3. (Opcional) Ver cómo se vería en producción
npm run preview
```

---

## 🎓 APRENDIENDO MIENTRAS EDITAS

Cada vez que modifiques:

- `translations.js` → Aprenderás sobre multiidioma
- `constants.js` → Array de datos dinámica
- `Component.jsx` → Props y estado React
- `Component.module.css` → CSS modular

---

## ✨ PRÓXIMOS PASOS (Cuando domines esto)

1. **Agregar más secciones** (nuevo componente en `src/components/`)
2. **Conectar a backend** (formulario con API real)
3. **Agregar blog** (post system)
4. **Dark mode perfecto** (ajustar más colores)
5. **Testing** (Vitest)

---

## 📚 DOCUMENTACIÓN

- Detallado: `README.md`
- Mapa rápido: `MAPA-RAPIDO.md`
- Este archivo: `INICIO-RAPIDO.md`

---

## ¡LISTO! 🎉

Ya tienes un portfolio **profesional**, **modular** y **fácil de editar**.

Si necesitas ayuda:

- Ve a `MAPA-RAPIDO.md` para encontrar dónde está cada cosa
- Lee los comentarios en el código
- Consulta los Contextos y Hooks para lógica avanzada

**¡A llevarla!** 🚀
