import React, { useState, useReducer } from "react";
import SelectInput from "./SelectInput";
import constants from "../utils/constants";

// const fim = [
//     "independent",
//     "modified independent",
//     "supervision",
//     "minimal assistance",
//     "moderate assistance",
//     "maximum assistance",
//     "total assistance",
// ];
const setCopyBtn = () => {
    var range = document.createRange();
    range.selectNode(document.getElementById("blurb"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    // window.getSelection().removeAllRanges(); // to deselect
};

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const defaultState = {
    feeding: "",
    grooming: "",
    bathing: "",
    dressing_upper: "",
    dressing_lower: "",
    toileting: "",
    toilet_transfer: "",
    tub_transfer: "",
};
const formReducer = (state, event) => {
    if (event.reset) {
        return defaultState;
    }
    return {
        ...state,
        [event.name]: event.value,
    };
};

function FIM() {
    const [showFimBlurb, setShowFimBlurb] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, defaultState);

    const handleSubmit = (event) => {
        event.preventDefault();

        //check to make sure no field has default option selected
        if (Object.values(formData).includes("")) {
            alert("Complete form entirely!");
        } else {
            postData("/fim", formData).then((data) => {
                setShowFimBlurb(true);
                document.querySelector(".narrative_blurb").innerHTML = data;
            });
        }
    };

    const handleChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };

    return (
        <>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <SelectInput
                            label="Feeding"
                            name="feeding"
                            id="feeding"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                        <SelectInput
                            label="Grooming"
                            name="grooming"
                            id="grooming"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                        <SelectInput
                            label="Bathing"
                            name="bathing"
                            id="bathing"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                        <SelectInput
                            label="Upper Body Dressing"
                            name="dressing_upper"
                            id="dressing_upper"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                        <SelectInput
                            label="Lower Body Dressing"
                            name="dressing_lower"
                            id="dressing_lower"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                        <SelectInput
                            label="Toileting"
                            name="toileting"
                            id="toileting"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                        <SelectInput
                            label="Toilet Transfers"
                            name="toilet_transfer"
                            id="toilet_transfer"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                        <SelectInput
                            label="Tub Transfers"
                            name="tub_transfer"
                            id="tub_transfer"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                    </fieldset>
                    <div className="div-submit-btn">
                        <button className="btn-form" type="submit">
                            Submit
                        </button>
                    </div>
                </form>

                {showFimBlurb && (
                    <>
                        <div
                            id="blurb"
                            contentEditable="true"
                            className="narrative_blurb"
                        ></div>
                        <div className="div-copy-btn">
                            <button
                                id="btn_copy"
                                className="btn-copy"
                                onClick={setCopyBtn}
                            >
                                Copy
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default FIM;
