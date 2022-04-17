import React from "react";

const NewNoteModal = ({ onClickCancel, onClickAdd }) => {
    let title = "";
    let body = "";

    console.log(title);

    const updateTitle = (event) => {
        title = event.target.value;
        console.log(title);
    };

    const updateBody = (event) => {
        body = event.target.value;
    };
    
    return (
        <div className=" modal-content fade-in-component">
            <form className="new-note-form">
                <div className="new-note-container">
                    <div className="new-note-title">
                        <input
                            required
                            placeholder="Title"
                            id="text"
                            className="new-note-input"
                            name="title"
                            type="text"
                            onChange={updateTitle}
                        />
                    </div>
                    <div>
                        <textarea
                            required
                            placeholder="Type new note here..."
                            className="new-note-body"
                            name="body"
                            id="body"
                            rows="5"
                            onChange={updateBody}
                        ></textarea>
                    </div>
                </div>

                <div className="modal-btn-container">
                    <div className="btn-modal" onClick={onClickCancel}>
                        Cancel
                    </div>
                    <div
                        className="btn-modal"
                        onClick={() => onClickAdd({'title': title, 'body': body})}
                    >
                        Add
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewNoteModal;
