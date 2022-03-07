import React, { useContext, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import DropDown from "./ModalContent/DropDown";

const HeaderRight = () => {
  const [loggedIn, setLoggedIn] = useContext(Context);
  const [showDropDown, setShowDropDown] = useState(false);
  const accountDropDown = useRef(null);
  const iconRef = useRef(null);

  const handleUserIconClick = () => {
    if (accountDropDown.current.style.display === "block") {
      accountDropDown.current.style.display = "none";
    } else {
      accountDropDown.current.style.display = "block";
    }
  };

  return (
    <nav id="navRight" className="nav-container">
      <div
        style={{
          display: "flex",
          flex: "1",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
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
              <Link className="header-link" to="/logout">
                Logout
              </Link>
              <img
                ref={iconRef}
                onClick={() => {setShowDropDown(true)}}
                className="user-icon accent"
                src="icons/user-icon.png"
                alt="user icon"
              />
              <DropDown show={showDropDown} onClickOutside = {() => {setShowDropDown(false)}}/>

            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderRight;
