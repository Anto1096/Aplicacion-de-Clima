import { mapWeatherResponse } from './weatherMapper.js';

const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

async function getCoordinatesByCity(city) {
  const url = `${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=es&format=json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error de red consultando la ciudad.');
  }

  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error('Ciudad no encontrada.');
  }

  const cityData = data.results[0];
  return {
    name: cityData.name,
    country: cityData.country,
    latitude: cityData.latitude,
    longitude: cityData.longitude
  };
}

async function getCurrentWeather(latitude, longitude) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m',
    timezone: 'auto'
  });

  const response = await fetch(`${WEATHER_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error('No pudimos obtener el clima actual.');
  }

  const data = await response.json();
  if (!data.current) {
    throw new Error('Datos del clima no disponibles.');
  }

  return data;
}

export async function getWeatherByCity(city) {
  const location = await getCoordinatesByCity(city);
  const weatherRaw = await getCurrentWeather(location.latitude, location.longitude);
  return mapWeatherResponse(location, weatherRaw.current);
}
