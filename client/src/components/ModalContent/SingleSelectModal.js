import React, { useState, useEffect } from "react";

const SingleSelectModal = (
    options,
    prevSelected,
    onOkayClick,
    onClickNext,
    name,
    subtitleID,
    nextModal
) => {
    
    const [selected, setSelected] = useState(options.prevSelected);
    let chosen = options.prevSelected;

    const removeSelected = () => {
        const collection = document.getElementsByClassName("modal-option");
        for (let div of collection) {
            document
                .getElementById(div.id)
                .classList.remove("modal-option-selected");
            document.getElementById(div.id).classList.add("modal-option-hover");
        }
    };

    const remainSelected = () => {
        const collection = document.getElementsByClassName("modal-option");
        for (let div of collection) {
            document
                .getElementById(div.id)
                .classList.remove("modal-option-selected");
            document.getElementById(div.id).classList.add("modal-option-hover");
        }

        document
            .getElementById(selected)
            .classList.add("modal-option-selected");
        document
            .getElementById(selected)
            .classList.remove("modal-option-hover");
    };

    useEffect(() => {
        console.log(options.prevSelected);
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
                console.log(chosen);
                const prevDiv = document.getElementById(chosen);
                prevDiv.classList.remove("modal-option-selected");
                prevDiv.classList.add("modal-option-hover");
            }

            selectedDiv.classList.add("modal-option-selected");
            selectedDiv.classList.remove("modal-option-hover");
            chosen = id;
        }
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
                        options.onOkayClick(
                            options.name,
                            chosen,
                            options.subtitleID
                        );
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

export default SingleSelectModal;
