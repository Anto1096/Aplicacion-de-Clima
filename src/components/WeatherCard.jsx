function Icon({ name }) {
  const map = {
    sun: "☀",
    moon: "☾",
    "cloud-sun": "⛅",
    cloud: "☁",
    rain: "🌧",
    snow: "❄",
    storm: "⛈",
  };

  return <span aria-hidden="true">{map[name] || "☁"}</span>;
}

export default function WeatherCard({ weather }) {
  return (
    <article className="weather-card" aria-label="Resultado del clima">
      <header className="card-header">
        <div>
          <p className="card-kicker">Snapshot actual</p>
          <p className="location">
            {weather.location.city}, {weather.location.country}
          </p>
        </div>
        <p className="condition">
          <Icon name={weather.icon} /> {weather.condition}
        </p>
      </header>

      <div className="card-main">
        <div className="temperature-wrap">
          <p className="temperature">{weather.temperature}°C</p>
          <p className="feels-like">Sensacion termica: {weather.feelsLike}°C</p>
        </div>

        <div className="spotlight-card">
          <span className="spotlight-label">Lectura dominante</span>
          <strong className="spotlight-value">
            {weather.isDay ? "Ciclo diurno" : "Ciclo nocturno"}
          </strong>
        </div>
      </div>

      <dl className="stats-grid">
        <div>
          <dt>Humedad</dt>
          <dd>{weather.humidity}%</dd>
        </div>
        <div>
          <dt>Viento</dt>
          <dd>{weather.windSpeed} km/h</dd>
        </div>
        <div>
          <dt>Precipitacion</dt>
          <dd>{weather.precipitation} mm</dd>
        </div>
        <div>
          <dt>Periodo</dt>
          <dd>{weather.isDay ? "Dia" : "Noche"}</dd>
        </div>
      </dl>
    </article>
  );
}
