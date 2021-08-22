import React from 'react';

export default function MultiSelectInput(
    {id,
    name,
    label,
    options,
    handleChange}
) {

    
    return (
        <>
            <div className="row m-2">
                <label className="form-label col-4" htmlFor={id}>
                    {label}
                </label>
                <div className="col-8">
                    <select
                        name={name}
                        id={id}
                        onChange={handleChange}
                        size={options.length}
                        multiple
                        required
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
