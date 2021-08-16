import { useEffect } from 'react';

export default function NarrativeBlurb(text, id){

    useEffect(() => {
        const div = document.getElementById(id);
        div.innerHTML = text.text;
    }, [text, id]);
    
    return (
        <div className="narrative_blurb" contentEditable="true" id={id}>
        </div>
    );
}