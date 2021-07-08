export default function NumberInput({ name, id, label, min, max, handleChange }) {
  return (
      <>
          <label className="form-label" htmlFor={id}>
              {label}
          </label>
          <input
              type="number"
              className="input"
              name={name}
              id={id}
              min={min}
              max={max}
              onChange={handleChange}
              required
          />
      </>
  );
}
