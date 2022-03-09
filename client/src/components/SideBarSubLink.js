import React from "react";
import { Link } from "react-router-dom";

const SideBarSubLink = ({ id, url, title }) => {
    const handleClick = () => {
        const windowWidth = window.innerWidth;
        console.log(windowWidth);
        if (windowWidth <= 900) {
            const sidebar = document.getElementById("left-sidebar");
            sidebar.classList.remove('mobile-nav')
        }
    };

    return (
        <div className="sidebar-sublink sidebar-links ">
            <Link id={id} to={url} onClick={handleClick}>
                {title}
            </Link>
        </div>
    );
};

export default SideBarSubLink;
