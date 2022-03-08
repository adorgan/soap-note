import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const DropDown = (props) => {
    const ref = useRef(null);
    const { onClickOutside } = props;
    useEffect(() => {
        const handleClickOutside = (event) => {
            onClickOutside && onClickOutside();
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!props.show) return null;
    return (
        <div className="dropdown" ref={ref}>
            <div className="dropdown-content fade-in">
                <a href="#">Settings</a>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    );
};

export default DropDown;
