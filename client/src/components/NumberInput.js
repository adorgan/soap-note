export default function NumberInput({ name, id, label, min, max, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        name={name}
        id={id}
        min={min}
        max={max}
        onChange={handleChange}
        required
      />
    </div>
  );
}
