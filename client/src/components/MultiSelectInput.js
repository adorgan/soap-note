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
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <div className="div-select">
                <select
                    name={name}
                    id={id}
                    onChange={handleChange}
                    size={options.length + 1}
                    multiple
                    required
                >
                    <option value="default">Select One</option>
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
        </>
    );
}
