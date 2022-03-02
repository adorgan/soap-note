import React, { useState, useEffect } from "react";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";

const SingleSelectModal = (
  options, // items to select
  name, // db name associated with modal category
  subtitleID,
  subtitle,
  prevSelected, // previously saved item, if any
  onOkayClick, // handles OK button clicks
  onClickNext, // handles NEXT button clicks
  nextModal // where clicking NEXT will take user
) => {
  /**
   * if a user clicks to edit the item with a value already stored from a prior attempt,
   * this previous value is converted from an array of values to an array of IDs to
   * make it easier to track click events
   */
  let chosen = "";
  Object.keys(options.options).forEach((key) => {
    if (options.options[key] === options.prevSelected) {
      chosen = key;
    }
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

    document.getElementById(selected).classList.add("modal-option-selected");
    document.getElementById(selected).classList.remove("modal-option-hover");
  };

  /**
   * Denotes a selected item as chosen and changes the color of the item to
   * highlight it. If an item is already chosen, it is removed and the formatting
   * is cleared.
   * @param {string} id element id of clicked item
   */
  const handleClick = (id) => {
    const selectedDiv = document.getElementById(id);
    if (chosen === id) {
      selectedDiv.classList.remove("modal-option-selected");
      selectedDiv.classList.add("modal-option-hover");
      chosen = "";
    } else {
      if (chosen !== "") {
        const prevDiv = document.getElementById(chosen);
        prevDiv.classList.remove("modal-option-selected");
        prevDiv.classList.add("modal-option-hover");
      }

      selectedDiv.classList.add("modal-option-selected");
      selectedDiv.classList.remove("modal-option-hover");
      chosen = id;
    }
  };

  /**
   * Enable highlighting of selected items if any was selected
   * prior
   */
  useEffect(() => {
    if (selected === "") {
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
            const selectedOption =
              options.options[chosen] === undefined
                ? ""
                : options.options[chosen];
            options.onOkayClick(
              options.name,
              selectedOption,
              options.subtitleID,
              options.subtitle
            );
          }}
        >
          OK
        </div>
        {options.nextModal !== "" && options.nextModal !== undefined && (
          <div
            className="btn-modal"
            onClick={() => {
              setSelected(chosen);
              const selectedOption =
                options.options[chosen] === undefined
                  ? ""
                  : options.options[chosen];
              options.onClickNext(
                options.nextModal,
                options.name,
                selectedOption,
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

export default SingleSelectModal;
