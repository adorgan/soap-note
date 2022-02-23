import React from "react";

const Modal = ({modalContent}) => {

  return (
    <div id="myModal" className="modal">
      {modalContent}
    </div>
  );
};

export default Modal;
