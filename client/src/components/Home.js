import React from "react";

const Home = () => {
  return (
      <div className="home-container fade-in-component">
          <div className="home-div-left">
              <div className="home-title">
                  Build Therapy <span className="soap-home">SOAP</span> Notes Efficiently
              </div>
              <div className="home-subtitle">
                  Pick out the most important details from a session and
                  generate a well-formed narrative to use as a guide for
                  documenting treatments, evaluations, and progress notes.
              </div>
          </div>
          {/* <div className="home-icon-container">
              <div className="home-icon">
                  <img
                      src="icons/Untitled.png"
                      alt=""
                      className="home-icon-image"
                  />
              </div>
          </div> */}
      </div>
  );
};

export default Home;
