import React, { useState, useEffect } from "react";

const FimModal = ({
  title,
  onOkayClick,
  subtitleID,
  name,
  modalContent,
  prevSelected,
  onClickNext,
  nextModal,
}) => {
  const [selected, setSelected] = useState(prevSelected);
  let chosen = prevSelected;

  const removeSelected = () => {
    const collection = document.getElementsByClassName("modal-option");
    for (let div of collection) {
      document.getElementById(div.id).classList.remove("modal-option-selected");
      document.getElementById(div.id).classList.add("modal-option-hover");
    }
  };

  const remainSelected = () => {
    const collection = document.getElementsByClassName("modal-option");
    for (let div of collection) {
      document.getElementById(div.id).classList.remove("modal-option-selected");
      document.getElementById(div.id).classList.add("modal-option-hover");
    }

    document.getElementById(selected).classList.add("modal-option-selected");
    document.getElementById(selected).classList.remove("modal-option-hover");
  };

  useEffect(() => {
    if (selected === "") {
      removeSelected();
    } else {
      remainSelected();
    }
  });

  const handleOnClick = (id, option) => {
    const selectedDiv = document.getElementById(id);
    if (chosen === id) {
      selectedDiv.classList.remove("modal-option-selected");
      selectedDiv.classList.add("modal-option-hover");
      chosen = id;
    } else {
      if (chosen !== "") {
        const prevDiv = document.getElementById(chosen);
        prevDiv.classList.remove("modal-option-selected");
        prevDiv.classList.add("modal-option-hover");
      }

      selectedDiv.classList.add("modal-option-selected");
      selectedDiv.classList.remove("modal-option-hover");
      chosen = option;
    }
  };

  return (
    <div className="modal-content">
      <div className="modal-title">{title}</div>
      <div
        id="independent"
        className="modal-option modal-option-hover"
        onClick={() => handleOnClick("independent", "independent")}
      >
        Independent
      </div>
      <div
        id="modified independent"
        className="modal-option modal-option-hover"
        onClick={() =>
          handleOnClick("modified independent", "modified independent")
        }
      >
        Modified Independent
      </div>
      <div
        id="supervision"
        className="modal-option modal-option-hover"
        onClick={() => handleOnClick("supervision", "supervision")}
      >
        Supervision
      </div>
      <div
        id="minimum assistance"
        className="modal-option modal-option-hover"
        onClick={() =>
          handleOnClick("minimum assistance", "minimum assistance")
        }
      >
        Minimum Assistance
      </div>
      <div
        id="moderate assistance"
        className="modal-option modal-option-hover"
        onClick={() =>
          handleOnClick("moderate assistance", "moderate assistance")
        }
      >
        Moderate Assistance
      </div>
      <div
        id="maximum assistance"
        className="modal-option modal-option-hover"
        onClick={() =>
          handleOnClick("maximum assistance", "maximum assistance")
        }
      >
        Maximum Assistance
      </div>
      <div
        id="total assistance"
        className="modal-option modal-option-hover"
        onClick={() => handleOnClick("total assistance", "total assistance")}
      >
        Total Assistance
      </div>
      <div className="modal-btn-container">
        <div
          className="btn-modal"
          onClick={async () => {
            setSelected(chosen);
            onOkayClick(name, chosen, subtitleID);
          }}
        >
          OK
        </div>
        {nextModal !== "" && (
          <div
            className="btn-modal"
            onClick={() => {
              setSelected(chosen);
              onClickNext(nextModal, name, chosen, subtitleID);
            }}
          >
            NEXT
          </div>
        )}
      </div>
    </div>
  );
};

export default FimModal;
