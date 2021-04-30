export default function Goals({ name, id, handleChange, value }) {
  return (
    <div>
      <select
        name={name}
        id={id}
        onChange={handleChange}
        multiple
        value={value || ""}
        required
      >
        <option value="feeding">Feeding</option>
        <option value="grooming">Grooming</option>
        <option value="upper body dressing">Upper Body Dressing</option>
        <option value="lower body dressing">Lower Body Dressing</option>
        <option value="toileting">Toileting</option>
        <option value="toilet transfers">Toilet Transfers</option>
        <option value="tub transfers">Tub Transfers</option>
      </select>
    </div>
  );
}
