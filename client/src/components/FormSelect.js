import React from "react";

const FormSelect = ({title, subtitle, onClick, subtitleID}) => {
  return (
    <div className={"form-select-parent"} onClick={onClick}>
      <div className="form-select-container-left">
        <div className="text-primary accent">{title}</div>
        <div id={subtitleID} className="form-select-subtext">{subtitle}</div>
      </div>
      <div className="form-select-arrow">></div>
    </div>
  );
};

export default FormSelect;
