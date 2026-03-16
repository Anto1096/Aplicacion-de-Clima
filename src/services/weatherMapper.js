import { weatherCodeToText } from '../utils/weatherCodeToText.js';

function round(value) {
  return Math.round(value);
}

export function mapWeatherResponse(location, current) {
  const weatherInfo = weatherCodeToText(current.weather_code, current.is_day);

  return {
    location: {
      city: location.name,
      country: location.country
    },
    temperature: round(current.temperature_2m),
    feelsLike: round(current.apparent_temperature),
    humidity: round(current.relative_humidity_2m),
    windSpeed: round(current.wind_speed_10m),
    precipitation: current.precipitation,
    condition: weatherInfo.label,
    icon: weatherInfo.icon,
    isDay: Boolean(current.is_day)
  };
}
