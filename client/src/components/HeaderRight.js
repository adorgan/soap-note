import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

const HeaderRight = () => {
  const [loggedIn, setLoggedIn] = useContext(Context);
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
              <Link className="" to="/login" style={{ padding: "10px" }}>
                Login
              </Link>
              <Link className="" to="/register">
                Register
              </Link>
            </>
          )}

          {loggedIn && (
            <Link className="" to="/logout">
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderRight;
