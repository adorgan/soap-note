import React from "react";

const NarrativeModal = ({ blurb, onClickCopy, onClickSave }) => {
  

  return (
    <div className="modal-content">
      <div className="modal-title">SOAP Note</div>
      <div className="modal-narrative">{blurb}</div>

      <div className="modal-btn-container">
        <div className="btn-modal" onClick={onClickCopy}>
          Copy
        </div>
        <div className="btn-modal" onClick={() => onClickSave(blurb)}>Save</div>
      </div>
    </div>
  );
};

export default NarrativeModal;
