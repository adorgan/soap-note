import React, { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        // document.getElementById("navRight").style.display = "none";
        // document.getElementById("left-sidebar").style.display = "none";
        // document.getElementById("mainContent").classList.remove("content");
        // document
        //     .getElementById("right-container")
        //     .classList.add("right-container-home");
        // document
        //     .getElementById("right-container")
        //     .classList.remove("right-container");

        // document
        //     .getElementById("mainContent")
        //     .classList.add("content-home");

        return () => {
            // document.getElementById("navRight").style.display = "block";
            // document.getElementById("left-sidebar").style.display = "block";
            // document
            //     .getElementById("mainContent")
            //     .classList.remove("content-home");
            // document.getElementById("mainContent").classList.add("content");
            // document
            //     .getElementById("right-container")
            //     .classList.remove("right-container-registration");
            // document
            //     .getElementById("right-container")
            //     .classList.add("right-container");
        };
    });
    return (
        <div className="home-container fade-in">
            <div className="home-div-left">
                <div className="home-title">Build Soap Notes Efficiently</div>
                <div className="home-subtitle">
                    Pick out the most important details from a treatment session
                    and let us generate a narrative summary.
                </div>
            </div>
        </div>
    );
};

export default Home;
