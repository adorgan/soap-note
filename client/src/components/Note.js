import { useEffect, useState } from "react";
import postData from "../utils/postRequest";

export default function Note({ title, body, id }) {
    const [ note, setNote ] = useState(body);

    const editId = `btn-edit-${id}`;
    const saveId = `btn-save-${id}`;
    const noteId = `note-${id}`;

    async function saveChanges() {
        document.getElementById(noteId).readOnly = true;
        const data = {
            id: id,
            body: note,
        };
        await postData("/save-note", data);
    }

    const handleChange = (e) => {
        setNote(e.target.value);
    };

    useEffect(() => {
        const btn_edit = document.getElementById(editId);
        const mynote = document.getElementById(noteId);
        mynote.readOnly = true;
        mynote.style.width = "100%";
        mynote.style.height = mynote.scrollHeight + "px";
        btn_edit.addEventListener("click", () => {
            mynote.readOnly = false;
            mynote.focus();
        });
    }, [editId, saveId, noteId]);

    return (
        <>
            <h3 className="note-title">{title}</h3>
            <textarea
                id={noteId}
                
                onChange={handleChange}
                value={note}
            ></textarea>
            <button id={editId}>Edit</button>
            <button id={saveId} onClick={saveChanges}>
                Save
            </button>
        </>
    );
}
