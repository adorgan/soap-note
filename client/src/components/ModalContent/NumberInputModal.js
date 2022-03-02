import React, { useState } from "react";

const NumberInputModal = ({
  name, // db name
  subtitleID,
  subtitle,
  ID, // id to match label with input
  label, // input label
  min, // min number value allowed
  max, // max number value allowed
  prevValue, // previously selected number, if any
  onOkayClick, // handles OK click
  onClickNext, // handles NEXT click
  nextModal, // clicking next will navigate here
}) => {
  const [minutes, setMinutes] = useState(prevValue);

  /**
   * Updates the state of minutes if a number value changes
   * @param {event} e click event
   */
  const handleChange = (e) => {
    setMinutes(e.target.value);
  };

  return (
    <div className="modal-content">
      <div className="modal-title">
        <label htmlFor={ID}>{label}</label>
      </div>
      <div className="input-number-containter">
        <input
          name={name}
          id={ID}
          type="number"
          className="modal-number-input"
          min={min}
          max={max}
          value={minutes}
          onChange={handleChange}
        ></input>
      </div>
      <div className="modal-btn-container">
        <div
          className="btn-modal"
          onClick={() => {
            setMinutes(minutes);
            onOkayClick(name, minutes, subtitleID, subtitle);
          }}
        >
          OK
        </div>
        {nextModal !== "" && (
          <div
            className="btn-modal"
            onClick={() => {
              setMinutes(minutes);
              onClickNext(nextModal, name, minutes, subtitleID, subtitle);
            }}
          >
            NEXT
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberInputModal;
