import {useEffect} from 'react';

export default function Note({ title, body, id }) {
    const editId = `btn-edit-${id}`;
    const saveId = `btn-save-${id}`;
    const noteId = `note-${id}`

    useEffect(() => {
        
        const btn_edit = document.getElementById(editId);
        const btn_save = document.getElementById(saveId);
        const mynote = document.getElementById(noteId);
        btn_edit.addEventListener("click", () => {
            mynote.contentEditable = "true"
            mynote.focus();
        });
        btn_save.addEventListener("click", () => {
            mynote.contentEditable = "false";
        });
    }, [editId, saveId, noteId]);
    return (
        <>
            <h3 className="note-title">{title}</h3>
            <div id={noteId} className="note-div">
                {body}
            </div>
            <button id={editId}>Edit</button>
            <button id={saveId}>Save</button>


        </>
    );
}
