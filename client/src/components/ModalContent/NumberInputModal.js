import React, { useState, useEffect } from "react";

const NumberInputModal = ({
  name,
  ID,
  label,
  min,
  max,
  prevValue,
  nextModal,
  onOkayClick,
  onClickNext,
  subtitleID,
  subtitle,
}) => {
  const [minutes, setMinutes] = useState(prevValue);
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
            // setSelected(chosen);
            // const selectedOption =
            //   options.options[chosen] === undefined
            //     ? ""
            //     : options.options[chosen];
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
