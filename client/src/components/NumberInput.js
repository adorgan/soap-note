export default function NumberInput({
    name,
    id,
    label,
    min,
    max,
    handleChange,
}) {
    return (
        <>
            <div className="row my-2">
                <label className="form-label col-4 ps-4" htmlFor={id}>
                    {label}
                </label>
                <div className="col-8">
                    <input
                        type="number"
                        className="input"
                        name={name}
                        id={id}
                        min={min}
                        max={max}
                        onChange={handleChange}
                        // required
                    />
                </div>
            </div>
        </>
    );
}
