export function renderWeather(data) {
    const responseDiv = document.getElementById("responseData");

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
}

export function renderError(message) {
    const responseDiv = document.getElementById("responseData");
    responseDiv.innerHTML = `<p class="error">${message}</p>`;
}
