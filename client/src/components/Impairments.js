export default function Impairments({ name, id, handleChange, value, label }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <div>
                <select
                    name={name}
                    id={id}
                    onChange={handleChange}
                    value={value || ""}
                    required
                    multiple
                >
                    <option value="fine motor coordination">
                        Fine Motor Coordination
                    </option>
                    <option value="gross motor coordination">
                        Gross Motor Coordination
                    </option>
                    <option value="bilateral upper extremity strength">
                        BUE Strength
                    </option>
                    <option value="dynamic sitting balance">
                        Dynamic Sitting Balance
                    </option>
                    <option value="static sitting balance">
                        Static Sitting Balance
                    </option>
                    <option value="propioception">Proprioception</option>
                    <option value="safety awareness">Safety Awareness</option>
                </select>
            </div>
        </>
    );
}
