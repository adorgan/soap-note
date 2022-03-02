import React, { useState, useEffect } from "react";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";

const MultiSelectModal = (
  options,
  name,
  title,
  subtitle,
  subtitleID,
  prevSelected,
  onOkayClick,
  onClickNext,
  nextModal
) => {
  /**
   * if a user clicks to edit the item with a value already stored from a prior attempt,
   * this previous value is converted from an array of values to an array of IDs to
   * make it easier to track click events
   */
  let chosen = [];
  Object.keys(options.options).forEach((key) => {
    options.prevSelected.forEach((item) => {
      if (options.options[key] === item) {
        chosen.push(key);
      }
    });
  });

  const [selected, setSelected] = useState(chosen);

  /**
   * This clears all highlighted items from a modal
   */
  const removeSelected = () => {
    const collection = document.getElementsByClassName("modal-option");
    for (let div of collection) {
      document.getElementById(div.id).classList.remove("modal-option-selected");
      document.getElementById(div.id).classList.add("modal-option-hover");
    }
  };

  /**
   * This clears all highlighted items from a modal but adds a highlight to
   * an item if it was chosen
   */
  const remainSelected = () => {
    const collection = document.getElementsByClassName("modal-option");
    for (let div of collection) {
      document.getElementById(div.id).classList.remove("modal-option-selected");
      document.getElementById(div.id).classList.add("modal-option-hover");
    }

    selected.forEach((item) => {
      document.getElementById(item).classList.add("modal-option-selected");
      document.getElementById(item).classList.remove("modal-option-hover");
    });
  };

  /**
   * Denotes a selected item as chosen and changes the color of the item to
   * highlight it. If an item is already chosen, it is removed and the formatting
   * is cleared.
   * @param {string} id element id of clicked item
   */
  const handleClick = (id) => {
    if (chosen.includes(id)) {
      // remove highlight
      const div = document.getElementById(id);
      div.classList.remove("modal-option-selected");
      div.classList.add("modal-option-hover");
      // delete from array
      const index = chosen.indexOf(id);
      if (index > -1) {
        chosen.splice(index, 1); // 2nd parameter means remove one item only
      }
    } else {
      chosen.push(id);
    }

    // highlight all chosen items
    chosen.forEach((id) => {
      const div = document.getElementById(id);
      div.classList.add("modal-option-selected");
      div.classList.remove("modal-option-hover");
    });
  };

  /**
   * Enable highlighting of selected items if any was selected
   * prior
   */
  useEffect(() => {
    if (selected.length === 0) {
      removeSelected();
    } else {
      remainSelected();
    }
  });

  return (
    <div className="modal-content">
      <div className="modal-title">{options.title}</div>
      {Object.keys(options.options).map((key, index) => {
        return (
          <div
            key={index}
            id={key}
            className="modal-option modal-option-hover"
            onClick={() => handleClick(key)}
          >
            {capitalizeEveryWord(options.options[key])}
          </div>
        );
      })}
      <div className="modal-btn-container">
        <div
          className="btn-modal"
          onClick={() => {
            setSelected(chosen);
            let usableValues = [];
            chosen.forEach((id) => usableValues.push(options.options[id]));
            options.onOkayClick(
              options.name,
              usableValues,
              options.subtitleID,
              options.subtitle
            );
          }}
        >
          OK
        </div>
        {options.nextModal !== "" && (
          <div
            className="btn-modal"
            onClick={() => {
              setSelected(chosen);
              let usableValues = [];
              chosen.forEach((id) => usableValues.push(options.options[id]));
              options.onClickNext(
                options.nextModal,
                options.name,
                usableValues,
                options.subtitleID,
                options.subtitle
              );
            }}
          >
            NEXT
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectModal;
