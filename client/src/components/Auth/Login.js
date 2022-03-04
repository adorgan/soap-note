import { useState, useReducer, useContext } from "react";
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

    if(success){
        return <Redirect to="/notes"/>
    }

    return (
        <>
            <h3>Logon</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Logon</button>
            </form>
        </>
    );
}
