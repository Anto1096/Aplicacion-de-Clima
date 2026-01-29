const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "db99e3895cb5daa8a84ce4a4c3f3e893";
const params = {
    units: 'metric',
    lang: 'es'
};

export async function fetchWeather(city) {
    const url = `${urlBase}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${params.units}&lang=${params.lang}`;
    console.log('Consultando URL:', url);

    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('API key no válida o expirada');
        } else if (response.status === 404) {
            throw new Error('Ciudad no encontrada');
        } else {
            throw new Error(`Error del servidor: ${response.status}`);
        }
    }

    const data = await response.json();
    if (!data || !data.main || !data.weather) {
        throw new Error('Datos del clima no disponibles');
    }
    return data;
}
