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
    const ham = document.getElementById("hamburger-icon");
    if (sidebar.classList.contains("mobile-nav")) {
      sidebar.classList.remove("mobile-nav");
      ham.classList.remove("rotate-backwards");

    } else {
      sidebar.classList.add("mobile-nav");
      ham.classList.add("rotate-backwards");
      
    }
  };

  return (
    <nav id="navRight" className="nav-container">
      <div className="nav-child-left-hamburger">
        <img
          id="hamburger-icon"
          onClick={handleHamburgerClick}
          className="hamburger"
          src="icons/hamburger.png"
          alt="menu"
        />
      </div>

      <div className="header-right-nav">
        <div className="nav-child-left">
          <Link to="/">
            <img
              src="icons/soap-solid.png"
              alt=""
              className="accent icon-nav "
            />
          </Link>

          <Link className=" header-link" to="/">
            Soap Note Generator
          </Link>

          <Link className=" header-link" to="/get-started">
            Get Started
          </Link>
        </div>

        <div className="nav-child-right">
          {!loggedIn && (
            <>
              <Link className="header-link" to="/login">
                Log in
              </Link>
              <Link className="header-link" to="/register">
                Sign up
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
