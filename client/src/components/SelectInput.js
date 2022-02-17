import { useEffect } from "react";

export default function SelectInput({
  id,
  name,
  label,
  options,
  handleChange,
  isRequired,
}) {
  useEffect(() => {
    const input = document.getElementById(id);
    if (isRequired) {
      input.required = true;
    }
  }, [id, isRequired]);

  return (
    <>
      <div className="row my-2">
        <label className="form-label col-4 pt-1 ps-4" htmlFor={id}>
          {label}
        </label>

          <select
            className="form-select"
            name={name}
            id={id}
            onChange={handleChange}
          >
            <option value="">Select One</option>
            {options.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {/* capitalize first letter */}
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              );
            })}
          </select>
        
      </div>

      {/* <div className="div-select"></div> */}
    </>
  );
}
