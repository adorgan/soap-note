import React, { useState, useReducer, useEffect } from "react";
import FimScore from "./FimScore";
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
    return defaultState
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function FIM() {
  const [showFimBlurb, setShowFimBlurb] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, defaultState);

  const handleSubmit = (event) => {
    event.preventDefault();

    //check to make sure no field has default option selected
    if(Object.values(formData).includes('')){
        alert('Complete form entirely!');
    }
    else{
        // setSubmitting(true);

        // setTimeout(() => {
        // setSubmitting(false);
        // console.log(formData);
        // setFormData({
        //     reset: false,
        // });
        // }, 3000);
        postData("/fim", formData).then((data) => {
          setShowFimBlurb(true);
          document.getElementById('fim_blurb').innerHTML = data;
          console.log(data); // JSON data parsed by `data.json()` call
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
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting && <div>Submtting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="feeding">Feeding</label>
          <FimScore
            name="feeding"
            id="feeding"
            handleChange={handleChange}
            value={formData.feeding}
          />
          <label htmlFor="grooming">Grooming</label>
          <FimScore
            name="grooming"
            id="grooming"
            handleChange={handleChange}
            value={formData.grooming}
          />
          <label htmlFor="bathing">Bathing</label>
          <FimScore
            name="bathing"
            id="bathing"
            handleChange={handleChange}
            value={formData.bathing}
          />
          <label htmlFor="dressing_upper">Upper Body Dressing</label>
          <FimScore
            name="dressing_upper"
            id="dressing_upper"
            handleChange={handleChange}
            value={formData.dressing_upper}
          />
          <label htmlFor="dressing_lower">Lower Body Dressing</label>
          <FimScore
            name="dressing_lower"
            id="dressing_lower"
            handleChange={handleChange}
            value={formData.dressing_lower}
          />
          <label htmlFor="toileting">Toileting</label>
          <FimScore
            name="toileting"
            id="toileting"
            handleChange={handleChange}
            value={formData.toileting}
          />
          <label htmlFor="toilet_transfer">Toilet Transfer</label>
          <FimScore
            name="toilet_transfer"
            id="toilet_transfer"
            handleChange={handleChange}
            value={formData.toilet_transfer}
          />
          <label htmlFor="tub_transfer">Tub Transfer</label>
          <FimScore
            name="tub_transfer"
            id="tub_transfer"
            handleChange={handleChange}
            value={formData.tub_transfer}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {showFimBlurb && <div contentEditable="true" id="fim_blurb"></div>}
    </div>
  );
}

export default FIM;
