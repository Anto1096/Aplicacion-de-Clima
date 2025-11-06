
const urlBase = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "db99e3895cb5daa8a84ce4a4c3f3e893";
const diffKelvin = 273.15;

// Configuración adicional para la API
const params = {
    units: 'metric', // Para obtener temperatura en Celsius directamente
    lang: 'es'       // Para obtener descripciones en español
};

document.getElementById("searchBtn").addEventListener("click", function () {
    const city = document.getElementById("cityInput").value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("ingrese una ciudad valida");
    }
});

function fetchWeather(city) {
    const url = `${urlBase}?q=${city}&appid=${API_KEY}&units=${params.units}&lang=${params.lang}`;
    console.log('Consultando URL:', url); // Para depuración
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('API key no válida o expirada');
                } else if (response.status === 404) {
                    throw new Error('Ciudad no encontrada');
                } else {
                    throw new Error(`Error del servidor: ${response.status}`);
                }
            }
            return response.json();
        })
        .then(data => {
            const responseDiv = document.getElementById("responseData");
            if (!data || !data.main || !data.weather) {
                throw new Error('Datos del clima no disponibles');
            }
            
            // Mostrar datos completos en la consola
            console.log('Datos del clima:', {
                ciudad: data.name,
                país: data.sys.country,
                temperatura: {
                    actual: Math.round(data.main.temp) + '°C',
                    sensación_térmica: Math.round(data.main.feels_like) + '°C',
                    mínima: Math.round(data.main.temp_min) + '°C',
                    máxima: Math.round(data.main.temp_max) + '°C'
                },
                clima: {
                    principal: data.weather[0].main,
                    descripción: data.weather[0].description
                },
                humedad: data.main.humidity + '%',
                viento: {
                    velocidad: data.wind.speed + ' m/s',
                    dirección: data.wind.deg + '°'
                },
                presión: data.main.pressure + ' hPa'
            });
            
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const iconCode = data.weather[0].icon;
            
            responseDiv.innerHTML = `
                <h2>Clima en ${data.name}</h2>
                <div class="weather-icon">
                    <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description}">
                </div>
                <p>Temperatura: ${temperature}°C</p>
                <p>Descripción: ${description}</p>
                <p>Humedad: ${humidity}%</p>
            `;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("responseData").innerHTML = 
                `<p class="error">${error.message}</p>`;
        });
}


