export default function FimScore({name, id, handleChange, value}) {
    return (
      <div>
        <select name={name} id={id} onChange={handleChange} value={value || ""}>
          <option value="default">Select One</option>
          <option value="independent">7-Independent</option>
          <option value="modified independent">6-Modified Independent</option>
          <option value="supervision">5-Supervision</option>
          <option value="minimum assistance">4-Minimum Assistancer</option>
          <option value="moderate assistance">3-Moderate Assistance</option>
          <option value="maximum assistance">2-Maximum Assistance</option>
          <option value="dependent">1-Dependent</option>
        </select>
      </div>
    );
}