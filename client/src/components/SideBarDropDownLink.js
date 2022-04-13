import React from "react";

const SideBarDropDownLink = ({ target, title, isShowing, onClick, icon, iconID, myRef }) => {
  
  return (
      <div>
          <div onClick={onClick} className="sidebar-text sidebar-primary-links noselect">
              <img ref={myRef} id={iconID} src={icon} alt="" className="sidebar-icon accent" />
              {title}
          </div>
      </div>
  );
};

export default SideBarDropDownLink;
