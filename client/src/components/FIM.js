import React, { useState, useReducer, useEffect } from "react";
import SelectInput from "./SelectInput";
import constants from "../utils/constants";
// import changeNavBold from "../utils/changeNavBold";
import FormSelect from "./FormSelect";
import Modal from "./Modal";
import FimModal from "./ModalContent/FimModal";

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
  eating: "",
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
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(<Test />);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

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

  const handleOkModalClick = (selectedName, subtitleID, name) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    setModalVisible(false);
    document.getElementById(subtitleID).innerHTML = selectedName;
    console.log(name);
    setFormData({
      name: name,
      value: selectedName.toLowerCase(),
    });
  };

  const handleModalVisit = (component) => {
    setModalContent(component);
    setModalVisible(true);
  };

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          setModalVisible(false);
        }
      };
    }
  }, [modalVisible]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <FormSelect
            title="Eating"
            subtitle="select FIM rating"
            subtitleID="eating-subtitle-id"
            onClick={() =>
              handleModalVisit(
                <FimModal
                  title="Eating"
                  onOkayClick={handleOkModalClick}
                  subtitleID="eating-subtitle-id"
                  name="eating"
                />
              )
            }
          />
          <FormSelect
            title="Grooming"
            subtitle="select FIM rating"
            onClick={() =>
                handleModalVisit(
                  <FimModal
                    title="Grooming"
                    onOkayClick={handleOkModalClick}
                    subtitleID="grooming-subtitle-id"
                    name="grooming"
                  />
                )
              }
          />
          <FormSelect
            title="Bathing"
            subtitle="select FIM rating"
            onClick={() => handleModalVisit("Bathing")}
          />
          <FormSelect
            title="Upper Body Dressing"
            subtitle="select FIM rating"
            onClick={() => handleModalVisit("Upper Body Dressing")}
          />
          <FormSelect
            title="Lower Body Dressing"
            subtitle="select FIM rating"
            onClick={() => handleModalVisit("Lower Body Dressing")}
          />
          <FormSelect
            title="Toileting"
            subtitle="select FIM rating"
            onClick={() => handleModalVisit("Toileting")}
          />
          <FormSelect
            title="Toilet Transfers"
            subtitle="select FIM rating"
            onClick={() => handleModalVisit("Toilet Transfers")}
          />
          <FormSelect
            title="Tub Transfers"
            subtitle="select FIM rating"
            onClick={() => handleModalVisit("Tub Transfers")}
          />
          <Modal modalContent={modalContent} />

          {/* <SelectInput
            label="Eating"
            name="eating"
            id="eating"
            handleChange={handleChange}
            options={constants.assessments.fim}
          /> */}
          <SelectInput
            label="Grooming"
            name="grooming"
            id="grooming"
            handleChange={handleChange}
            options={constants.assessments.fim}
          />
          <SelectInput
            label="Bathing"
            name="bathing"
            id="bathing"
            handleChange={handleChange}
            options={constants.assessments.fim}
          />
          <SelectInput
            label="Upper Body Dressing"
            name="dressing_upper"
            id="dressing_upper"
            handleChange={handleChange}
            options={constants.assessments.fim}
          />
          <SelectInput
            label="Lower Body Dressing"
            name="dressing_lower"
            id="dressing_lower"
            handleChange={handleChange}
            options={constants.assessments.fim}
          />
          <SelectInput
            label="Toileting"
            name="toileting"
            id="toileting"
            handleChange={handleChange}
            options={constants.assessments.fim}
          />
          <SelectInput
            label="Toilet Transfers"
            name="toilet_transfer"
            id="toilet_transfer"
            handleChange={handleChange}
            options={constants.assessments.fim}
          />
          <SelectInput
            label="Tub Transfers"
            name="tub_transfer"
            id="tub_transfer"
            handleChange={handleChange}
            options={constants.assessments.fim}
          />
        </fieldset>
        <div className="div-submit-btn">
          <button className="btn-form" type="submit" style={{ width: "100%" }}>
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
            <button id="btn_copy" className="btn-copy" onClick={setCopyBtn}>
              Copy
            </button>
          </div>
        </>
      )}
    </>
  );
}

const Test = () => {
  return <div className="modal-content">Hellow</div>;
};

const Test1 = () => {
  return <div className="modal-content">Hello One</div>;
};

export default FIM;
