import React, { useState, useEffect } from "react";

const Modal = ({modalContent}) => {
  const [selected, setSelected] = useState([]);

  const handleClick = (event) => {
    // add item to array if empty
    if (selected.length === 0) {
      setSelected([event.target.id]);
    } else {
      // if not empty, delete a duplicate or else add and remove old value
      if (!selected.includes(event.target.id)) {
        // remove highlight if re-selected
        const reSelectedOption = document.getElementById(selected[0]);
        reSelectedOption.classList.remove("modal-option-selected");
        reSelectedOption.classList.add("modal-option-hover");

        // add new item in empty array
        const newSelected = [];
        newSelected.push(event.target.id);
        setSelected(newSelected);
      } else {
        setSelected([]);
        const selectedOption = document.getElementById(event.target.id);
        selectedOption.classList.remove("modal-option-selected");
        selectedOption.classList.add("modal-option-hover");
      }
    }
  };

  useEffect(() => {
    selected.forEach((item) => {
      const selectedOption = document.getElementById(item);
      selectedOption.classList.add("modal-option-selected");
      selectedOption.classList.remove("modal-option-hover");
    });
  });
  return (
    <div id="myModal" className="modal">
      {modalContent}
    </div>
  );
};

export default Modal;
