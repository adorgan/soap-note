import { useState, useEffect, useReducer, useContext, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import postData from "../../utils/postRequest";
import { Context } from "../Context";
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

export default function Login() {
    const [formData, setFormData] = useReducer(formReducer, defaultFormState);
    const [success, setSuccess] = useState(false);
    const [loggedIn, setLoggedIn] = useContext(Context);
    const [userDoesntExist, setUserDoesntExist] = useState(false);
    const [captchaFail, setCaptchaFail] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);

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
        let fd = formData;
        fd.captcha = recaptchaValue;
        postData("/login", fd).then((data) => {
            if (data === "success") {
                setSuccess(true);
                setLoggedIn(true);
            } else {
                if (data === "no user") {
                    setUserDoesntExist(true);
                    setCaptchaFail(false);
                    setIncorrectPassword(false);
                } else if (data === "incorrect password") {
                    setUserDoesntExist(false);
                    setCaptchaFail(false);
                    setIncorrectPassword(true);
                } else if (data === "failed captcha") {
                    setUserDoesntExist(false);
                    setCaptchaFail(true);
                    setIncorrectPassword(false);
                }
                setSuccess(false);
                setLoggedIn(false);
                recaptchaRef.current.reset();
            }
        });
    };

    useEffect(() => {
        document.getElementById("navRight").style.display = "none";
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
            document.getElementById("navRight").style.display = "block";
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

    useEffect(() => {
        if (userDoesntExist) {
            document.getElementById("login-error-email").style.visibility =
                "visible";
        } else {
            document.getElementById("login-error-email").style.visibility =
                "hidden";
        }
    }, [userDoesntExist]);

    useEffect(() => {
        if (captchaFail) {
            document.getElementById("login-error-captcha").style.visibility =
                "visible";
        } else {
            document.getElementById("login-error-captcha").style.visibility =
                "hidden";
        }
    }, [captchaFail]);

    useEffect(() => {
        if (incorrectPassword) {
            document.getElementById("login-error-password").style.visibility =
                "visible";
        } else {
            document.getElementById("login-error-password").style.visibility =
                "hidden";
        }
    }, [incorrectPassword]);

    if (success) {
        return <Redirect to="/notes" />;
    }

    return (
        <>
            <Link to={"/"} className="registration-back">
                Back to Home
            </Link>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="registration-form fade-in"
                >
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
                    <div id="login-error-email" className="registration-error">
                        User does not exist.
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
                    <div
                        id="login-error-password"
                        className="registration-error"
                    >
                        Incorrect password.
                    </div>
                    <ReCAPTCHA
                        sitekey="6LdhPLgeAAAAADRuYSa7X-pLF6uDwEQDcE3wyzj3"
                        ref={recaptchaRef}
                    />
                    <div
                        id="login-error-captcha"
                        className="registration-error"
                    >
                        Failed captcha.
                    </div>
                    <button className="btn-form btn-registration" type="submit">
                        Login
                    </button>
                </form>
                <div className="login-create-account">
                    <Link to={"/register"} className="login-create-account">
                        Create an Account
                    </Link>
                </div>
            </div>
        </>
    );
}
