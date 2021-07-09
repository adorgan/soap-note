import { useEffect } from "react";

import React from 'react'





const MyNotes = () => {
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
        <div className="note-container">
            <h3 className="note-title">Title</h3>
            <div id='mynote' className="note-div">
                This is an example of some notes I would save for future use.
            </div>
            <button id="btn-edit">Edit</button>
            <button id="btn-save">Save</button>

          
        </div>
    );
}

export default MyNotes
