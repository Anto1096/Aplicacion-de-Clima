import { useState } from 'react';

export default function SearchBar({ value, onChange, onSearch, loading }) {
  const [touched, setTouched] = useState(false);
  const invalid = touched && !value.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched(true);
    if (!value.trim()) {
      return;
    }
    await onSearch(value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <label className="label" htmlFor="city-input">
        Ciudad
      </label>
      <div className="search-row">
        <input
          id="city-input"
          type="text"
          className="search-input"
          placeholder="Ej: Buenos Aires"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={() => setTouched(true)}
          disabled={loading}
          aria-invalid={invalid}
        />
        <button className="search-button" type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
      {invalid ? (
        <p className="field-error" role="alert">
          Debes ingresar una ciudad.
        </p>
      ) : null}
    </form>
  );
}
