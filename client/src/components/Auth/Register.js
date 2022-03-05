import { useState, useReducer, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import postData from "../../utils/postRequest";
import ReCAPTCHA from "react-google-recaptcha";

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

export default function Register() {
  const [formData, setFormData] = useReducer(formReducer, defaultFormState);
  const [success, setSuccess] = useState(false);
  const recaptchaRef = useRef();
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recaptchaValue = await recaptchaRef.current.getValue();
    const va = await setFormData({ name: 'captcha', value: recaptchaValue });
    console.log(formData);
    postData("/register", formData).then((data) => {
      if (data === "success") {
        console.log("success");
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    });
  };
  useEffect(() => {
    setSuccess(false);
  }, []);

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
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="registration-sidebar fade-in">
        <p>Sign up for more features!</p>
        <ul>
          <li>Save custom notes</li>
          <li>Access your notes anywhere</li>
          <li>Copy and Paste</li>
        </ul>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="registration-form fade-in"
      >
        <div className="registration-title">Register</div>
        <div className="registration-div">
          {/* <label htmlFor="email">Email</label> */}
          <input
            placeholder="Email"
            className="registration-input"
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="registration-div">
          {/* <label htmlFor="password">Password</label> */}
          <input
            placeholder="Password"
            className="registration-input"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="registration-div">
            <label htmlFor="re-typed-password">Re-Type Password</label>
            <input
              className="registration-input"
              id="re-typed-password"
              name="re-typed-password"
              type="password"
              onChange={handleChange}
              required
            />
          </div> */}
        <ReCAPTCHA
          sitekey="6LdhPLgeAAAAADRuYSa7X-pLF6uDwEQDcE3wyzj3"
          ref={recaptchaRef}
        />
        {/* <div
          className="g-recaptcha"
          data-sitekey="6LdhPLgeAAAAADRuYSa7X-pLF6uDwEQDcE3wyzj3"
        ></div> */}
        <button className="btn-form btn-registration" type="submit">
          Register
        </button>
      </form>
    </>
  );
}
