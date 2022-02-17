import React from "react";
import { Link } from "react-router-dom";

const SideBarSubLink = ({ id, url, title }) => {
  return (
    <div className="sidebar-sublink sidebar-links ">
      <Link id={id} to={url}>
        {title}
      </Link>
    </div>
  );
};

export default SideBarSubLink;
