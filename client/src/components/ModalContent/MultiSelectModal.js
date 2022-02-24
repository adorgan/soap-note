import React, { useState, useEffect } from "react";

const MultiSelectModal = (
    options,
    prevSelected,
    onOkayClick,
    onClickNext,
    name,
    subtitleID,
    nextModal
) => {
    const [selected, setSelected] = useState(prevSelected);
    let chosen = [];

    const handleOnClick = (id, option) => {
        console.log(chosen);
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

        chosen.forEach((id) => {
            const div = document.getElementById(id);
            div.classList.add("modal-option-selected");
            div.classList.remove("modal-option-hover");
        });
    };

    return (
        <div className="modal-content">
            {options.options.map((option, index) => {
                return (
                    <div
                        key={index}
                        id={option.id}
                        className="modal-option modal-option-hover"
                        onClick={() => handleOnClick(option.id, option.value)}
                    >
                        {option.value}
                    </div>
                );
            })}
            <div className="modal-btn-container">
                <div
                    className="btn-modal"
                    onClick={() => {
                        setSelected(chosen);
                        options.onOkayClick(options.name, chosen, options.subtitleID);
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

export default MultiSelectModal;
