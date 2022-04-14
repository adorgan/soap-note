import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.getElementById("left-sidebar").style.display = "none";
  });
  return (<>
  
    <div className="home-container fade-in-component">
      <div className="home-top">
        <div className="home-title">
          Build Therapy <span className="soap-home">SOAP</span> Notes
          Efficiently
        </div>
        <div className="home-subtitle">
          Pick out the most important details from a session and generate a
          well-formed narrative to use as a guide for documenting treatments,
          evaluations, and progress notes.
        </div>
        
      </div>
    </div>
    <div className="home-banner"></div>
    </>
  );
};

export default Home;
