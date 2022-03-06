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
                          <Link
                              className="header-link"
                              to="/login"
                          >
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
                      </>
                  )}
              </div>
          </div>
      </nav>
  );
};

export default HeaderRight;
