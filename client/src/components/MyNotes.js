import { useEffect, useReducer } from "react";
import React from 'react'

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST", 
        mode: "cors", 
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

const defaultState = {
    title: "",
    body: "",
}

const formReducer = (state, event) => {
    if (event.reset) {
        return defaultState;
    }
    return {
        ...state,
        [event.name]: event.value,
    };
};




const MyNotes = () => {
    const [formData, setFormData] = useReducer(formReducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        postData("/add-note", formData).then((data) => {
            console.log(data.body);
        });
    };

    const handleChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };

    useEffect(() => {
        const btn_edit = document.getElementById("btn-edit");
        const btn_save = document.getElementById("btn-save")
        const mynote = document.getElementById("mynote");
        btn_edit.addEventListener("click", () => {
            mynote.contentEditable = "true"
            mynote.focus();
        });
        btn_save.addEventListener("click", () => {
            mynote.contentEditable = "false";
        });

    }, []);

    return (
        <>
            <div className="note-container">
                <h3 className="note-title">Title</h3>
                <div id="mynote" className="note-div">
                    This is an example of some notes I would save for future
                    use.
                </div>
                <button id="btn-edit">Edit</button>
                <button id="btn-save">Save</button>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="text">Title</label>
                    <input
                        id="text"
                        name="title"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="body">Body</label>
                    <textarea
                        name="body"
                        id="body"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default MyNotes
