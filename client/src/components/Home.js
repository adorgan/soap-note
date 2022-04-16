import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.getElementById("left-sidebar").classList.add("home-display");
  });
  return (
    <>
      <div className="home-container fade-in-component">
        <div className="home-top">
        <img src="icons/soap-solid.png" alt="" className="accent icon-home " />
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
      <div className="home-banner">
        <p>
          "<strong>S</strong>ubjective <strong>O</strong>bjective{" "}
          <strong>A</strong>ssessment <strong>P</strong>lan"
        </p>
        <div >
          <Link className="get-started home-banner-btn" to={"/get-started"}>Get Started</Link>
        </div>
      </div>
      <div className="home-benefits-container">
        <div className="home-benefits-title">
          Benefits of Using SOAP Note Generator
        </div>
        <div className="home-benefits-specifics-container">
          <div className="home-benefits-specifics-row">
            <div className="home-benefits-specifics-item">
                <div className="home-benefits-specifics-item-title">
                    Improved Efficiency
                </div>
                <div className="home-benefits-specifics-item-body">
                    With a few clicks, you can have a grammatically correct paragraph to use as a guide.
                </div>
            </div>
            <div className="home-benefits-specifics-item">
                <div className="home-benefits-specifics-item-title">
                    Better Readability
                </div>
                <div className="home-benefits-specifics-item-body">
                    Don't worry about punctuation anymore. SOAP Notes are guaranteed to be free of spelling error or improper syntax.
                </div>
            </div>
            <div className="home-benefits-specifics-item">
                <div className="home-benefits-specifics-item-title">
                  Patient Experience
                </div>
                <div className="home-benefits-specifics-item-body">
                    Spend less time trying to format a SOAP Note and more time working with a patient.
                </div>
            </div>
            
          </div>
          <div className="home-benefits-specifics-row">
            <div className="home-benefits-specifics-item">
                <div className="home-benefits-specifics-item-title">
                    Save Your Notes
                </div>
                <div className="home-benefits-specifics-item-body">
                    Custom SOAP Notes can be saved to your account and re-used or edited to suit your needs.
                </div>
            </div>
            <div className="home-benefits-specifics-item">
                <div className="home-benefits-specifics-item-title">
                    Learning Opportunities
                </div>
                <div className="home-benefits-specifics-item-body">
                    Use SOAP Note templates as a guide to plan your treatment sessions, or come up with intervention ideas.
                </div>
            </div>
            <div className="home-benefits-specifics-item">
                <div className="home-benefits-specifics-item-title">
                    Skilled Language
                </div>
                <div className="home-benefits-specifics-item-body">
                    SOAP Notes use actionable, therapy-specific language to ensure your skill is justified in documentation.
                </div>
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
