export default function Impairments({ name, id, handleChange, value, label, impairments, size }) {
    return (
        <>
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <div>
                <select
                    className="input"
                    name={name}
                    id={id}
                    onChange={handleChange}
                    value={value || ""}
                    required
                    size={size}
                    multiple
                    style={{ width: "auto" }}
                >
                    {impairments.map((impairment, index) => {
                        return (
                            <option key={index} value={impairment}>
                                {/* capitalize first letter */}
                                {impairment.charAt(0).toUpperCase() +
                                    impairment.slice(1)}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
}
