import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import SearchHistory from "./components/SearchHistory.jsx";
import StatusMessage from "./components/StatusMessage.jsx";
import { useWeather } from "./hooks/useWeather.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

const HISTORY_KEY = "weather-search-history-v1";
const MAX_HISTORY_ITEMS = 5;

function normalizeCityName(city) {
  return city.trim().replace(/\s+/g, " ");
}

export default function App() {
  const [city, setCity] = useState("");
  const [history, setHistory] = useLocalStorage(HISTORY_KEY, []);
  const { weather, loading, error, fetchByCity } = useWeather();

  const saveToHistory = (newCity) => {
    const normalized = normalizeCityName(newCity);
    const next = [
      normalized,
      ...history.filter(
        (item) => item.toLowerCase() !== normalized.toLowerCase(),
      ),
    ].slice(0, MAX_HISTORY_ITEMS);
    setHistory(next);
  };

  const handleSearch = async (rawCity) => {
    const normalized = normalizeCityName(rawCity);
    const result = await fetchByCity(normalized);
    if (result.ok) {
      saveToHistory(normalized);
      setCity(normalized);
    }
  };

  const hasHistory = history.length > 0;
  const overviewItems = weather
    ? [
        { label: "Condicion", value: weather.condition },
        { label: "Temperatura", value: `${weather.temperature}°C` },
        { label: "Periodo", value: weather.isDay ? "Diurno" : "Nocturno" },
      ]
    : [
        { label: "Fuente", value: "Open-Meteo" },
        { label: "Cobertura", value: "Busqueda global" },
        { label: "Historial", value: "5 consultas" },
      ];

  return (
    <main className="app-shell">
      <section className="weather-panel" aria-labelledby="app-title">
        <div className="panel-topbar">
          <span className="live-pill">Operational</span>
          <p className="topbar-meta">
            React dashboard · Open-Meteo · Datos actuales
          </p>
        </div>

        <div className="dashboard-layout">
          <div className="primary-column">
            <header className="panel-header">
              <p className="eyebrow">Weather Intelligence</p>
              <h1 id="app-title">Clima en tiempo real</h1>
              <p className="subtitle">
                Monitoreo sobrio y preciso por ciudad, con una interfaz pensada
                como panel ejecutivo.
              </p>
            </header>

            <div className="header-meta" aria-label="Metadatos del panel">
              <span>Monitoreo por ciudad</span>
              <span>Interfaz ejecutiva</span>
              <span>Respuesta inmediata</span>
            </div>

            <SearchBar
              value={city}
              onChange={setCity}
              onSearch={handleSearch}
              loading={loading}
            />

            <StatusMessage loading={loading} error={error} />

            {weather ? (
              <WeatherCard weather={weather} />
            ) : (
              <section className="empty-state-card" aria-label="Estado inicial">
                <p className="insight-label">Panel listo</p>
                <h2 className="empty-state-title">
                  Consulta una ciudad para generar el reporte actual.
                </h2>
                <p className="empty-state-copy">
                  El tablero va a consolidar temperatura, sensacion termica,
                  humedad, viento y precipitacion en una sola vista.
                </p>
              </section>
            )}
          </div>

          <aside className="side-rail" aria-label="Resumen lateral">
            <section className="insight-card">
              <p className="insight-label">Resumen ejecutivo</p>
              <h2>Estado del panel</h2>
              <div className="insight-grid">
                {overviewItems.map((item) => (
                  <div key={item.label} className="insight-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </section>

            {hasHistory ? (
              <SearchHistory history={history} onSelect={handleSearch} />
            ) : (
              <section
                className="history history-placeholder"
                aria-label="Historial vacio"
              >
                <h2>Ultimas busquedas</h2>
                <p>
                  Todavia no hay consultas guardadas. Las proximas 5 quedaran
                  disponibles aca.
                </p>
              </section>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
