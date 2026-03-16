export default function SearchHistory({ history, onSelect }) {
  return (
    <section className="history" aria-label="Historial de busquedas">
      <h2>Ultimas busquedas</h2>
      <div className="history-list">
        {history.map((city) => (
          <button key={city} type="button" className="history-item" onClick={() => onSelect(city)}>
            {city}
          </button>
        ))}
      </div>
    </section>
  );
}
