export default function Goals({
    name,
    id,
    handleChange,
    value,
    label,
    goals,
    size,
}) {
    return (
        <>
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <div className="div-select">
                <select
                    className="input"
                    name={name}
                    id={id}
                    onChange={handleChange}
                    multiple
                    value={value || ""}
                    size={size}
                    required
                    style={{ width: "auto" }}
                >
                    {goals.map((goal, index) => {
                        return (
                            <option key={index} value={goal}>
                                {/* capitalize first letter */}
                                {goal.charAt(0).toUpperCase() + goal.slice(1)}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
}
