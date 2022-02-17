import React from "react";
import { Link } from "react-router-dom";

const HeaderRight = () => {
  return (
    <nav id="navRight" className="nav-container">
      <div style={{display: 'flex', flex: '1', height: "100%", alignItems: 'center', justifyContent: 'flex-end'}}>
        <div className="nav-child-right">
          <Link className="" to="/login" style={{padding: '10px'}}>
            Login
          </Link>
          <Link className="" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderRight;
