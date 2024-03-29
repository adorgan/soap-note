import { useEffect } from 'react';

export default function MultiSelectInput(
    {id,
    name,
    label,
    options,
    handleChange,
    isRequired=false}
) {

    useEffect(() => {
        const input = document.getElementById(id);
        if (isRequired) {
          input.required = true;
        }
      }, [id, isRequired]);
    
    return (
        <>
            <div className="row my-2">
                <label className="form-label col-4 ps-4" htmlFor={id}>
                    {label}
                </label>
                <div className="col-8">
                    <select
                        name={name}
                        id={id}
                        onChange={handleChange}
                        size={options.length}
                        multiple
                        className="form-select"
                    >
                        {options.map((option, index) => {
                            return (
                                <option key={index} value={option}>
                                    {/* capitalize first letter */}
                                    {option.charAt(0).toUpperCase() +
                                        option.slice(1)}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </>
    );
}
