import React from "react";

const SideBarDropDownLink = ({ target, title, isShowing, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="side-bar-text sidebar-links "
    >
      {title}
    </div>
  );
};

export default SideBarDropDownLink;
