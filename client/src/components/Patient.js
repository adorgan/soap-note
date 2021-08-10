export default function Patient({name, id, handleChange}) {
    return (
        <>
            <label className="form-label" htmlFor={id}>
                Healthcare Receiver Terminology
            </label>
            <div className="div-select">
                <select name={name} id={id} onChange={handleChange}>
                    <option value="resident">Resident</option>
                    <option value="patient">Patient</option>
                    <option value="client">Client</option>
                </select>
            </div>
        </>
    );
}
