import { useEffect, useReducer, useState, Fragment } from "react";
import React from "react";
import Note from "./Note";
import Delete from "./Delete";
import postData from "../utils/postRequest"

async function getData(url = "") {
    const response = await fetch(url);
    return response.json();
}

const defaultState = {
    title: "",
    body: "",
};

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
    const [notes, setNotes] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        postData("/add-note", formData).then((data) => {
            setSubmitted(!submitted);
        });
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const deleteData = {
            id: e.target.id.value,
        };
        postData("/delete-note", deleteData).then((data) => {
            setSubmitted(!submitted);
        });
    };

    const handleChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };

    useEffect(() => {
        getData("/get-notes").then((data) => {
            setNotes(data);
        });
    }, [submitted]);

    return (
        <>
            <div className="note-container">
                <>
                    {notes.map((note) => {
                        return (
                            <Fragment key={note._id}>
                                <Note
                                    id={note._id}
                                    title={note.title}
                                    body={note.body}
                                />
                                <Delete
                                    id={note._id}
                                    handleSubmit={handleDelete}
                                />
                            </Fragment>
                        );
                    })}
                </>

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
};

export default MyNotes;
