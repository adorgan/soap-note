import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import postData from "../../utils/postRequest";
import { Context } from "../Context";

const Logout = () => {
  const [loggedIn, setLoggedIn] = useContext(Context);
  postData("/logout", {}).then((data) => {
    setLoggedIn(false);
  });
  
  return <Redirect to="/login" />;
};

export default Logout;
