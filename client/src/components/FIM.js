import React, { useState, useReducer, useEffect } from "react";
import FormSelect from "./FormSelect";
import Modal from "./Modal";
import FimModal from "./ModalContent/FimModal";
import postData from "../utils/postRequest";

const setCopyBtn = () => {
  var range = document.createRange();
  range.selectNode(document.getElementById("blurb"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  // window.getSelection().removeAllRanges(); // to deselect
};

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

function FIM({ title }) {
  const [showFimBlurb, setShowFimBlurb] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, defaultState);
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

  const onClickNext = (modal, name, value, subtitleID) => {
    setModalContent(modal);
    if (value !== "") {
      document.getElementById(subtitleID).innerHTML = value;
    }

    setFormData({
      name: name,
      value: value.toLowerCase(),
    });
  };

  const handleOkModalClick = (name, value, subtitleID) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    setModalVisible(false);

    if (value !== "") {
      document.getElementById(subtitleID).innerHTML = value;
    }

    setFormData({
      name: name,
      value: value.toLowerCase(),
    });
  };

  const handleModalVisit = (component) => {
    setModalContent(component);
    setModalVisible(true);
  };

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

  const tubTransferModal = (
    <FimModal
      key="tub transers"
      title="Tub Transfers"
      onOkayClick={handleOkModalClick}
      subtitleID="tub-transfers-subtitle-id"
      name="tub_transfer"
      prevSelected={formData.tub_transfer}
      nextModal={""}
    />
  );

  const toiletTransferModal = (
    <FimModal
      key="toilet transers"
      title="Toilet Transfers"
      onOkayClick={handleOkModalClick}
      subtitleID="toilet-transfers-subtitle-id"
      name="toilet_transfer"
      prevSelected={formData.toilet_transfer}
      nextModal={tubTransferModal}
      onClickNext={onClickNext}
    />
  );

  const toiletingModal = (
    <FimModal
      key="toileting"
      title="Toileting"
      onOkayClick={handleOkModalClick}
      subtitleID="toileting-subtitle-id"
      name="toileting"
      prevSelected={formData.toileting}
      nextModal={toiletTransferModal}
      onClickNext={onClickNext}
    />
  );

  const lowerDressModal = (
    <FimModal
      key="lower body dressing"
      title="Lower Body Dressing"
      onOkayClick={handleOkModalClick}
      subtitleID="lb-dressing-subtitle-id"
      name="dressing_lower"
      prevSelected={formData.dressing_lower}
      nextModal={toiletingModal}
      onClickNext={onClickNext}
    />
  );

  const upperDressModal = (
    <FimModal
      key="upper body dressing"
      title="Upper Body Dressing"
      onOkayClick={handleOkModalClick}
      subtitleID="ub-dressing-subtitle-id"
      name="dressing_upper"
      prevSelected={formData.dressing_upper}
      nextModal={lowerDressModal}
      onClickNext={onClickNext}
    />
  );
  const bathingModal = (
    <FimModal
      key="bathin"
      title="Bathing"
      onOkayClick={handleOkModalClick}
      subtitleID="bathin-subtitle-id"
      name="bathing"
      prevSelected={formData.bathing}
      nextModal={upperDressModal}
      onClickNext={onClickNext}
    />
  );

  const groomingModal = (
    <FimModal
      key="grooming"
      title="Grooming"
      onOkayClick={handleOkModalClick}
      subtitleID="grooming-subtitle-id"
      name="grooming"
      prevSelected={formData.grooming}
      nextModal={bathingModal}
      onClickNext={onClickNext}
    />
  );

  const eatingModal = (
    <FimModal
      key="eating"
      title="Eating"
      onOkayClick={handleOkModalClick}
      subtitleID="eating-subtitle-id"
      name="eating"
      prevSelected={formData.eating}
      nextModal={groomingModal}
      onClickNext={onClickNext}
    />
  );

  return (
    <>
      <div className="content-title">{title}</div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <FormSelect
            title="Eating"
            subtitle="select FIM rating"
            subtitleID="eating-subtitle-id"
            onClick={() => handleModalVisit(eatingModal)}
          />
          <FormSelect
            title="Grooming"
            subtitle="select FIM rating"
            subtitleID="grooming-subtitle-id"
            onClick={() => handleModalVisit(groomingModal)}
          />
          <FormSelect
            title="Bathing"
            subtitle="select FIM rating"
            subtitleID="bathin-subtitle-id"
            onClick={() => handleModalVisit(bathingModal)}
          />
          <FormSelect
            title="Upper Body Dressing"
            subtitle="select FIM rating"
            subtitleID="ub-dressing-subtitle-id"
            onClick={() => handleModalVisit(upperDressModal)}
          />
          <FormSelect
            title="Lower Body Dressing"
            subtitle="select FIM rating"
            subtitleID="lb-dressing-subtitle-id"
            onClick={() => handleModalVisit(lowerDressModal)}
          />
          <FormSelect
            title="Toileting"
            subtitle="select FIM rating"
            subtitleID="toileting-subtitle-id"
            onClick={() => handleModalVisit(toiletingModal)}
          />
          <FormSelect
            title="Toilet Transfers"
            subtitle="select FIM rating"
            subtitleID="toilet-transfers-subtitle-id"
            onClick={() => handleModalVisit(toiletTransferModal)}
          />
          <FormSelect
            title="Tub Transfers"
            subtitle="select FIM rating"
            subtitleID="tub-transfers-subtitle-id"
            onClick={() => handleModalVisit(tubTransferModal)}
          />
          <Modal modalContent={modalContent} />
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
            <button id="btn_copy" className="btn-copy" onClick={setCopyBtn}>
              Copy
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default FIM;
