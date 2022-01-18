import { useEffect, useReducer, useState, Fragment } from "react";
import React from "react";
import Note from "./Note";
import postData from "../utils/postRequest";
import getData from "../utils/getRequest";
import changeNavBold from "../utils/changeNavBold";

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
    const [newNoteForm, setNewNoteForm] = useReducer(formReducer, defaultState);
    const [notes, setNotes] = useState([]);

    /**
     * Adds or deletes a note from the database and updates the state of notes
     * for rendering the new list of notes.
     * @param {String} url url for get/post request
     * @param {Object} data object holding info for adding/deleting note
     */
    async function updateNotes(url, data) {
        await postData(url, data);
        const allNotes = await getData("/get-notes");
        setNotes(allNotes);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // add note to database
        updateNotes("/add-note", newNoteForm);
    };

    const handleDelete = (e) => {

        // set _id for specific note to be deleted
        const deleteData = {
            id: e.target.id,
        };

        //delete note from database
        updateNotes("/delete-note", deleteData);
    };

    const handleChange = (event) => {
        setNewNoteForm({
            name: event.target.name,
            value: event.target.value,
        });
    };

    useEffect(() => {
        getData("/get-notes").then((data) => {
            setNotes(data);
        });
    }, []);

    useEffect(() => {
        changeNavBold("nav-my-notes");
    }, []);


    return (
        <>
            
                <div className="">
                    <>
                        {notes.map((note) => {
                            return (
                                <Fragment key={note._id}>
                                    <Note
                                        id={note._id}
                                        title={note.title}
                                        body={note.body}
                                        onClickDelete={handleDelete}
                                    />
                                </Fragment>
                            );
                        })}
                    </>

                    <div className="new-note-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="new-note-title">
                                    <label htmlFor="text">Title</label>
                                    <input
                                        id="text"
                                        name="title"
                                        type="text"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="new-note-body">
                                    <label htmlFor="body">Body</label>
                                    <textarea
                                        name="body"
                                        id="body"
                                        rows="5"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="div-submit-btn">
                                <button className="btn-form" type="submit">
                                    Add Note
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            
        </>
    );
};

export default MyNotes;
