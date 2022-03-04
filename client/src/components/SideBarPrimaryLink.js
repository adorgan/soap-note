import React from "react";
import { Link } from "react-router-dom";

const SideBarPrimaryLink = ({ id, url, title }) => {
  return (
      <div className="sidebar-primary-links side-bar-non-dropdown-link">
          <Link id={id} to={url}>
              {title}
          </Link>
      </div>
  );
};

export default SideBarPrimaryLink;
