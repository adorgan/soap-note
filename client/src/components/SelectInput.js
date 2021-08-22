export default function SelectInput({
    id,
    name,
    label,
    options,
    handleChange,
}) {
    return (
        <>
            <div className="row m-2">
                <label className="form-label col-4" htmlFor={id}>
                    {label}
                </label>
                <div className="col-8">
                    <select
                        className="form-select"
                        name={name}
                        id={id}
                        required
                        onChange={handleChange}
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
            </div>

            {/* <div className="div-select"></div> */}
        </>
    );
}
