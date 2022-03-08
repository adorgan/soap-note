import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import DropDown from "./ModalContent/DropDown";

const HeaderRight = () => {
    const [loggedIn, setLoggedIn] = useContext(Context);
    const [showDropDown, setShowDropDown] = useState(false);
    const iconRef = useRef(null);

    const handleHamburgerClick = () => {
        const sidebar = document.getElementById("left-sidebar");
        if (sidebar.classList.contains("mobile-nav")) {
            sidebar.classList.remove("mobile-nav");
        } else {
            sidebar.classList.add("mobile-nav");
        }
    };

    return (
        <nav id="navRight" className="nav-container">
            <div className="nav-child-left">
                <img
                    onClick={handleHamburgerClick}
                    className="hamburger"
                    src="icons/hamburger.png"
                    alt="menu"
                />
            </div>
            <div className="header-right-nav">
                <div className="nav-child-right">
                    {!loggedIn && (
                        <>
                            <Link className="header-link" to="/login">
                                Login
                            </Link>
                            <Link className="header-link" to="/register">
                                Register
                            </Link>
                        </>
                    )}

                    {loggedIn && (
                        <>
                            <Link className="header-link" to="/notes">
                                My Notes
                            </Link>

                            <img
                                ref={iconRef}
                                onClick={() => {
                                    setShowDropDown(true);
                                }}
                                className="user-icon accent"
                                src="icons/user-icon.png"
                                alt="user icon"
                            />
                            <DropDown
                                show={showDropDown}
                                onClickOutside={() => setShowDropDown(false)}
                            />
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default HeaderRight;
