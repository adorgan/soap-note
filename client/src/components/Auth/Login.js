import { useState, useEffect, useReducer, useContext } from "react";
import { Redirect } from "react-router-dom";
import postData from "../../utils/postRequest";
import { Context } from "../Context";

const defaultFormState = {
  email: "",
  password: "",
};

const formReducer = (state, event) => {
  if (event.reset) {
    return defaultFormState;
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function Login() {
  const [formData, setFormData] = useReducer(formReducer, defaultFormState);
  const [success, setSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useContext(Context);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData("/login", formData).then((data) => {
      if (data === "success") {
        setSuccess(true);
        setLoggedIn(true);
      } else {
        setSuccess(false);
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    document.getElementById("left-sidebar").style.display = "none";
    document.getElementById("mainContent").classList.remove("content");
    document
      .getElementById("right-container")
      .classList.add("right-container-registration");
    document
      .getElementById("right-container")
      .classList.remove("right-container");

    document
      .getElementById("mainContent")
      .classList.add("content-registration");

    return () => {
      document.getElementById("left-sidebar").style.display = "block";
      document
        .getElementById("mainContent")
        .classList.remove("content-registration");
      document.getElementById("mainContent").classList.add("content");

      document
        .getElementById("right-container")
        .classList.remove("right-container-registration");
      document
        .getElementById("right-container")
        .classList.add("right-container");
    };
  });

  if (success) {
    return <Redirect to="/notes" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="registration-form fade-in">
      <div className="registration-title">Sign In</div>
        
          <div className="registration-div">
            <input
              placeholder="Email"
              className="registration-input"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </div>
          <div className="registration-div">
            <input
              placeholder="Password"
              className="registration-input"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <button className="btn-form btn-registration" type="submit">
            Login
          </button>
      </form>
    </>
  );
}
