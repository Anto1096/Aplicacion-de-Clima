# App Clima React

Aplicacion de clima migrada a React + Vite con una interfaz minimalista y profesional.

## Stack

- React 18
- Vite
- Open-Meteo (API gratuita sin API key)
- ESLint + Prettier

## Funcionalidades

- Busqueda por ciudad con boton o Enter.
- Estado de carga, errores claros y estado inicial.
- Datos actuales: ciudad, pais, temperatura, sensacion termica, humedad, viento y condicion.
- Historial de ultimas 5 busquedas con persistencia en `localStorage`.
- UI responsive y accesible.

## Estructura

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
  styles/
    tokens.css
    app.css
  App.jsx
  main.jsx
```

## Ejecutar localmente

1. Instalar dependencias:
   `npm install`
2. Levantar entorno de desarrollo:
   `npm run dev`
3. Generar build:
   `npm run build`

## Decisiones tecnicas

- Se uso Open-Meteo para evitar exponer claves privadas en frontend.
- Se separo logica en hooks y servicios para mejorar mantenibilidad.
- Se aplico un sistema de diseno con tokens CSS para consistencia visual.
