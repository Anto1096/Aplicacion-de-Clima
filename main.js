
import { fetchWeather } from './modules/api.js';
import { renderWeather, renderError } from './modules/ui.js';

document.getElementById("searchBtn").addEventListener("click", async function () {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("ingrese una ciudad valida");
        return;
    }

    try {
        const data = await fetchWeather(city);
        renderWeather(data);
    } catch (error) {
        console.error("Error:", error);
        renderError(error.message);
    }
});


