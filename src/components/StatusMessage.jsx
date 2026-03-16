export default function StatusMessage({ loading, error }) {
  if (loading) {
    return (
      <p className="status loading" aria-live="polite">
        Consultando clima...
      </p>
    );
  }

  if (error) {
    return (
      <p className="status error" role="alert" aria-live="assertive">
        {error}
      </p>
    );
  }

  return (
    <p className="status idle" aria-live="polite">
      Escribe una ciudad para ver el estado del clima.
    </p>
  );
}
