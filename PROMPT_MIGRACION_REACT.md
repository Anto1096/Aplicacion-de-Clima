# Prompt Maestro - Migracion App Clima a React

## Rol del asistente

Actua como un Senior Frontend Engineer y Product Designer especializado en React. Tu objetivo es migrar una app de clima hecha en JavaScript vanilla a una version moderna, limpia y profesional.

## Contexto del proyecto actual

- App actual con archivos: `index.html`, `main.js`, `style.css`, `modules/api.js`, `modules/ui.js`.
- Problema actual: API key expuesta en frontend (riesgo de seguridad).
- Objetivo: migrar a React con arquitectura mantenible, UI minimalista y experiencia profesional.

## Objetivo principal

Construir una aplicacion de clima en React, responsive, accesible y de alto nivel visual, usando una API gratuita sin necesidad de exponer claves privadas en cliente.

## Stack tecnico obligatorio

- React 18+ con Vite.
- JavaScript (si no se solicita TypeScript).
- CSS moderno con variables CSS (sin frameworks pesados al inicio).
- Estructura por componentes y custom hooks.
- ESLint + Prettier configurados.

## API gratuita recomendada (preferida)

Usar Open-Meteo:

- Geocodificacion (buscar ciudad):
  `https://geocoding-api.open-meteo.com/v1/search?name={ciudad}&count=1&language=es&format=json`
- Clima actual:
  `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`

Razon:

- Gratuita.
- No requiere API key.
- Evita exponer secretos en frontend.

## Requisitos funcionales

1. Busqueda de ciudad por input + boton + tecla Enter.
2. Mostrar estado de carga mientras se consulta API.
3. Mostrar errores claros:
   - ciudad vacia
   - ciudad no encontrada
   - error de red
4. Mostrar datos actuales:
   - ciudad y pais
   - temperatura actual
   - sensacion termica
   - humedad
   - viento
   - condicion climatica legible
5. Guardar ultimas 5 busquedas en `localStorage`.
6. Permitir re-consultar desde historial con un click.

## Requisitos de UI/UX (minimalista + profesional)

1. Estetica limpia, elegante, sin sobrecarga visual.
2. Layout centrado con card principal y jerarquia tipografica clara.
3. Paleta sobria (neutros + un color de acento).
4. Espaciado consistente (escala de 8px).
5. Estados visuales definidos: hover, focus, disabled, loading, error.
6. Responsive real:
   - mobile: 320px+
   - tablet: 768px+
   - desktop: 1024px+
7. Accesibilidad:
   - labels correctos
   - contraste suficiente
   - navegacion por teclado
   - `aria-live` para mensajes dinamicos

## Arquitectura esperada

```txt
src/
  components/
    SearchBar.jsx
    WeatherCard.jsx
    SearchHistory.jsx
    StatusMessage.jsx
  hooks/
    useWeather.js
    useLocalStorage.js
  services/
    weatherService.js
    weatherMapper.js
  utils/
    weatherCodeToText.js
  App.jsx
  main.jsx
  styles/
    tokens.css
    app.css
```

## Reglas de implementacion

1. Separar logica de negocio y presentacion.
2. No hardcodear textos en multiples lugares; centralizar constantes.
3. Manejar errores con `try/catch` y mensajes amigables.
4. Evitar dependencias innecesarias.
5. Codigo simple, legible y mantenible.

## Mapeo de codigos de clima

Implementar mapeo de `weather_code` de Open-Meteo a descripcion en espanol y a icono semantico.

## Definicion de terminado (DoD)

1. La app corre con `npm run dev` sin errores.
2. Linter sin errores criticos.
3. Flujo completo de busqueda funciona.
4. Manejo de errores validado.
5. Responsive validado en mobile y desktop.
6. Historial persistente funcionando.
7. README con instrucciones de instalacion y uso.

## Entregables esperados

1. Proyecto React migrado y funcional.
2. UI refinada minimalista/profesional.
3. Codigo modular por capas (components/hooks/services).
4. README con:
   - descripcion
   - stack
   - comandos
   - decisiones tecnicas

## Prompt de ejecucion (copiar y pegar)

"""
Quiero que migres mi app de clima en JavaScript vanilla a React con Vite, manteniendo una arquitectura profesional y mantenible. Usa Open-Meteo (geocoding + current weather) para evitar exponer API keys. Implementa busqueda de ciudad, loading, manejo de errores, tarjeta de clima actual e historial de ultimas 5 busquedas en localStorage. La interfaz debe ser minimalista, elegante, responsive y accesible, con estados visuales completos (hover/focus/disabled/error/loading). Estructura el codigo por componentes, hooks y servicios. Entrega codigo final listo para ejecutar, junto con README claro y breve.
"""
