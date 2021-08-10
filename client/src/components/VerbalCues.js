export default function VerbalCues({name, label, id, handleChange}) {
    return (
        <>
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <div className="div-select">
                <select name={name} id={id} onChange={handleChange} required>
                    <option value="default">Select One</option>
                    <option value="no verbal cueing">No cueing</option>
                    <option value="minimal verbal cueing">Minimal cueing</option>
                    <option value="moderate verbal cueing">Moderate cueing</option>
                    <option value="maximum verbal cueing">Maximum cueing</option>
                </select>
            </div>
        </>
    );
}
