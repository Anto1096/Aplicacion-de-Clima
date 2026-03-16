import { useState } from 'react';
import { getWeatherByCity } from '../services/weatherService.js';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchByCity = async (city) => {
    if (!city) {
      setError('Ingresa una ciudad valida.');
      return { ok: false };
    }

    setLoading(true);
    setError('');

    try {
      const result = await getWeatherByCity(city);
      setWeather(result);
      return { ok: true, data: result };
    } catch (err) {
      setWeather(null);
      setError(err.message || 'No pudimos obtener el clima.');
      return { ok: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    error,
    fetchByCity
  };
}
