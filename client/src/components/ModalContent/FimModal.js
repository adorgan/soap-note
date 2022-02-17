import React from "react";

const FimModal = ({ title, onOkayClick, subtitleID, name, modalContent, handleClick }) => {
  return (
    <div className="modal-content">
      <div className="modal-title">{title}</div>
      <div
        id="ind"
        className="modal-option modal-option-hover"
        onClick={handleClick}
      >
        Independent
      </div>
      <div
        id="modI"
        className="modal-option modal-option-hover"
        onClick={handleClick}
      >
        Modified Independent
      </div>
      <div
        id="sup"
        className="modal-option modal-option-hover"
        onClick={handleClick}
      >
        Supervision
      </div>
      <div
        id="min"
        className="modal-option modal-option-hover"
        onClick={handleClick}
      >
        Minimum Assistance
      </div>
      <div
        id="mod"
        className="modal-option modal-option-hover"
        onClick={handleClick}
      >
        Moderate Assistance
      </div>
      <div
        id="max"
        className="modal-option modal-option-hover"
        onClick={handleClick}
      >
        Maximum Assistance
      </div>
      <div
        id="tot"
        className="modal-option modal-option-hover"
        onClick={handleClick}
      >
        Total Assistance
      </div>
      <div className="modal-btn-container">
        <div
          className="btn-modal"
        //   onClick={() =>
        //     onOkayClick(
        //       document.getElementById(selected[0]).innerHTML,
        //       subtitleID,
        //       name
        //     )
        //   }
        >
          OK
        </div>
        <div
          className="btn-modal"
        //   onClick={() =>
        //     onOkayClick(
        //       document.getElementById(selected[0]).innerHTML,
        //       subtitleID,
        //       name
        //     )
        //   }
        >
          NEXT
        </div>
      </div>
    </div>
  );
};

export default FimModal;
