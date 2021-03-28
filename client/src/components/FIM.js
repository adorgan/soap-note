import React, { useState, useReducer, useEffect } from "react";
import FimScore from "./FimScore";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      dressing: "",
      grooming: "",
      bathing: "",
      feeding: "",
      toileting: "",
      toilet_transfer: "",
      tub_transfer: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function FIM() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});
  
  //set form data to default values on page load
  useEffect(() => {
      console.log('useeffect');
      setFormData({
          reset: true
      })
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();

    //check to make sure no field has default option selected
    if(Object.values(formData).includes('')){
        alert('Complete form entirely!');
    }
    else{
        setSubmitting(true);

        setTimeout(() => {
        setSubmitting(false);
        console.log(formData);
        setFormData({
            reset: false,
        });
        }, 3000);
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
          <label htmlFor="dressing">Dressing</label>
          <FimScore
            name="dressing"
            id="dressing"
            handleChange={handleChange}
            value={formData.dressing}
          />
          <label htmlFor="grooming">Grooming</label>
          <FimScore
            name="grooming"
            id="grooming"
            handleChange={handleChange}
            value={formData.grooming}
          />
          <label htmlFor="bathin">Bathing</label>
          <FimScore
            name="bathing"
            id="bathing"
            handleChange={handleChange}
            value={formData.bathing}
          />
          <label htmlFor="feeding">Feeding</label>
          <FimScore
            name="feeding"
            id="feeding"
            handleChange={handleChange}
            value={formData.feeding}
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
    </div>
  );
}

export default FIM;
