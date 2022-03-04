import React from "react";

const SideBarDropDownLink = ({ target, title, isShowing, onClick, icon, iconID }) => {
  return (
      <div>
          <div onClick={onClick} className="side-bar-text sidebar-primary-links ">
              <img id={iconID} src={icon} alt="" className="sidebar-icon accent" />
              {title}
          </div>
      </div>
  );
};

export default SideBarDropDownLink;
