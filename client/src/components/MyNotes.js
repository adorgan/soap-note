import { useEffect, useReducer, useState, Fragment } from "react";
import React from "react";
import Note from "./Note";
import postData from "../utils/postRequest";
import getData from "../utils/getRequest";
import { Oval } from "react-loader-spinner";
import Modal from "./Modal";
import NewNoteModal from "./ModalContent/NewNoteModal";

const MyNotes = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalContent, setModalContent] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

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

    const handleAdd = (formData) => {
        console.log(formData);
        updateNotes("/add-note", formData);
        setModalVisible(false);
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    const handleNewNote = () => {
        setModalVisible(true);
        setModalContent(
            <NewNoteModal onClickCancel={handleCancel} onClickAdd={handleAdd} />
        );
    };

    const handleDelete = (e) => {
        // set _id for specific note to be deleted
        const deleteData = {
            id: e.target.id,
        };

        //delete note from database
        updateNotes("/delete-note", deleteData);
    };

    const handleCancel = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        setModalVisible(false);
    };

    useEffect(() => {
        const getNotes = async () => {
            const data = await getData("/get-notes");
            setNotes(data);
            setIsLoading(false);
        };
        getNotes();
    }, []);

    useEffect(() => {
        if (modalVisible) {
            const modal = document.getElementById("myModal");
            modal.style.display = "block";
            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                    setModalVisible(false);
                }
            };
        }
    }, [modalVisible]);

    if (isLoading) {
        return (
            <div className="loading">
                <Oval
                    color="#5158e2"
                    height={50}
                    width={50}
                    secondaryColor="#5158e2"
                />
            </div>
        );
    }

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
            </div>
            <div onClick={handleNewNote} className="float">
                +
            </div>
            <Modal modalContent={modalContent} />
        </>
    );
};

export default MyNotes;
