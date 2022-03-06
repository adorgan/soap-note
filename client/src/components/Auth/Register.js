import { useState, useReducer, useEffect, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
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
    const [userExists, setUserExists] = useState(false);
    const [captchaFail, setCaptchaFail] = useState(false);
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
        // const va = await setFormData({ name: 'captcha', value: recaptchaValue });
        postData("/register", fd).then((data) => {
            if (data === "success") {
                setSuccess(true);
            } else {
                if (data === "user exists") {
                    setUserExists(true);
                    setCaptchaFail(false);
                } else if (data === "failed captcha") {
                    setCaptchaFail(true);
                    setUserExists(false);
                }
                recaptchaRef.current.reset();
                setSuccess(false);
            }
        });
    };

    useEffect(() => {
        if (userExists) {
            document.getElementById(
                "registration-error-email"
            ).style.visibility = "visible";
        } else {
            document.getElementById(
                "registration-error-email"
            ).style.visibility = "hidden";
        }
    }, [userExists]);

    useEffect(() => {
        if (captchaFail) {
            document.getElementById(
                "registration-error-captcha"
            ).style.visibility = "visible";
        } else {
            document.getElementById(
                "registration-error-captcha"
            ).style.visibility = "hidden";
        }
    }, [captchaFail]);

    useEffect(() => {
        setSuccess(false);
    }, []);

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

    if (success) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Link to={"/"} className="registration-back">
                Back to Home
            </Link>

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
                <div
                    id="registration-error-email"
                    className="registration-error"
                >
                    User already exists!
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
                <div
                    id="registration-error-password"
                    className="registration-error"
                >
                    Password must be at least 8 characters long
                </div>
                <ReCAPTCHA
                    sitekey="6LdhPLgeAAAAADRuYSa7X-pLF6uDwEQDcE3wyzj3"
                    ref={recaptchaRef}
                />
                <div
                    id="registration-error-captcha"
                    className="registration-error"
                >
                    Failed CAPTCHA. Refresh and try again.
                </div>
                <button className="btn-form btn-registration" type="submit">
                    Register
                </button>
            </form>
        </>
    );
}
