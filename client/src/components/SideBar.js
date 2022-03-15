import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SideBarSubLink from "./SideBarSubLink";
import { useEffect, useState } from "react";
import SideBarDropDownLink from "./SideBarDropDownLink";

const SideBar = () => {
    const [ADLDropDownShowing, setADLDropDownShowing] = useState(false);
    const [therExDropDownShowing, setTherExDropDownShowing] = useState(false);
    const [funcMobDropDownShowing, setFuncMobDropDownShowing] = useState(false);
    const [balanceDropDownShowing, setBalanceDropDownShowing] = useState(false);
    const [assessmentsDropDownShowing, setAssessmentsDropDownShowing] =
        useState(false);

    const ADLDropDown = useRef(null);
    const ADLDropDownArrow = useRef(null);

    const therExDropDown = useRef(null);
    const therExDropDownArrow = useRef(null);

    const funcMobDropDown = useRef(null);
    const funcMobDropDownArrow = useRef(null);

    const balanceDropDown = useRef(null);
    const balanceDropDownArrow = useRef(null);

    const assessmentsDropDown = useRef(null);
    const assessmentsDropDownArrow = useRef(null);

  const handleClick = () => {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);
      if (windowWidth <= 900) {
          const sidebar = document.getElementById("left-sidebar");
          sidebar.classList.remove("mobile-nav");
          document
              .getElementById("hamburger-icon")
              .classList.remove("rotate-backwards");
      }
  };

    useEffect(() => {
        if (ADLDropDownShowing) {
            ADLDropDownArrow.current.classList.add("rotate");
            ADLDropDown.current.classList.add("fadeIn");
            ADLDropDown.current.classList.remove("fadedOut");
        } else {
            ADLDropDownArrow.current.classList.remove("rotate");
            ADLDropDown.current.classList.add("fadedOut");
            ADLDropDown.current.classList.remove("fadeIn");
        }

        if (therExDropDownShowing) {
            therExDropDownArrow.current.classList.add("rotate");
            therExDropDown.current.classList.add("fadeIn");
            therExDropDown.current.classList.remove("fadedOut");
        } else {
            therExDropDownArrow.current.classList.remove("rotate");
            therExDropDown.current.classList.add("fadedOut");
            therExDropDown.current.classList.remove("fadeIn");
        }

        if (funcMobDropDownShowing) {
            funcMobDropDownArrow.current.classList.add("rotate");

            funcMobDropDown.current.classList.add("fadeIn");
            funcMobDropDown.current.classList.remove("fadedOut");
        } else {
            funcMobDropDownArrow.current.classList.remove("rotate");
            funcMobDropDown.current.classList.add("fadedOut");
            funcMobDropDown.current.classList.remove("fadeIn");
        }

        if (balanceDropDownShowing) {
            balanceDropDownArrow.current.classList.add("rotate");
            balanceDropDown.current.classList.add("fadeIn");
            balanceDropDown.current.classList.remove("fadedOut");
        } else {
            balanceDropDownArrow.current.classList.remove("rotate");
            balanceDropDown.current.classList.add("fadedOut");
            balanceDropDown.current.classList.remove("fadeIn");
        }

        if (assessmentsDropDownShowing) {
            assessmentsDropDownArrow.current.classList.add("rotate");
            assessmentsDropDown.current.classList.add("fadeIn");
            assessmentsDropDown.current.classList.remove("fadedOut");
        } else {
            assessmentsDropDownArrow.current.classList.remove("rotate");
            assessmentsDropDown.current.classList.add("fadedOut");
            assessmentsDropDown.current.classList.remove("fadeIn");
        }
    });

    return (
        <div className="sidebar-links-container">
            <div className="sidebar-icon-container">
                <Link to="/">
                    <img
                        style={{ width: "40px" }}
                        src="icons/Untitled.png"
                        alt=""
                    />
                </Link>
            </div>

            <Link
                to={"/"}
                onClick={handleClick}
                className="side-bar-text sidebar-primary-links sidebar-home-link noselect"
            >
                Home
            </Link>
            <SideBarDropDownLink
                icon={"icons/angle-right-solid.png"}
                iconID="adl-icon"
                myRef={ADLDropDownArrow}
                target="component-collapse-adl"
                title="ADLs/Self-Care"
                onClick={() => setADLDropDownShowing((prev) => !prev)}
            />

            <div
                ref={ADLDropDown}
                className="collapse fadedOut"
                id="component-collapse-adl"
            >
                <SideBarSubLink
                    id="nav-ADL"
                    url="/ADL"
                    title="ADL Re-Training"
                />
                <SideBarSubLink
                    id="nav-hemi-dressing"
                    url="/hemi-dressing"
                    title="Hemi-Dressing"
                />
                <SideBarSubLink
                    id="nav-grooming"
                    url="/grooming"
                    title="Grooming"
                />
            </div>

            <SideBarDropDownLink
                icon={"icons/angle-right-solid.png"}
                iconID="ther-ex-icon"
                myRef={therExDropDownArrow}
                target="#component-collapse-ther-ex"
                title="Therapuetic Exercise"
                onClick={() => setTherExDropDownShowing((prev) => !prev)}
            />
            <div
                className="collapse fadedOut"
                id="component-collapse-ther-ex"
                ref={therExDropDown}
            >
                <SideBarSubLink
                    id="nav-arm-bike"
                    url="/arm-bike"
                    title="Arm Bike"
                />
                <SideBarSubLink
                    id="nav-arm-exercises"
                    url="/arm-exercises"
                    title="Arm Exercises"
                />
            </div>

            <SideBarDropDownLink
                icon={"icons/angle-right-solid.png"}
                iconID="func-mob-icon"
                myRef={funcMobDropDownArrow}
                target="#component-collapse-mobility"
                title="Functional Mobility"
                onClick={() => setFuncMobDropDownShowing((prev) => !prev)}
            />
            <div
                ref={funcMobDropDown}
                className="collapse fadedOut"
                id="component-collapse-mobility"
            >
                <SideBarSubLink
                    id="nav-toilet-transfer"
                    url="/toilet-transfer"
                    title="Toilet Transfer"
                />
                <SideBarSubLink
                    id="nav-transfers"
                    url="/functional-mobility"
                    title="Functional Mobility"
                />
            </div>

            <SideBarDropDownLink
                icon={"icons/angle-right-solid.png"}
                iconID="balance-icon"
                myRef={balanceDropDownArrow}
                target="#component-collapse-balance"
                title="Balance"
                onClick={() => setBalanceDropDownShowing((prev) => !prev)}
            />
            <div
                ref={balanceDropDown}
                className="collapse fadedOut"
                id="component-collapse-balance"
            >
                <SideBarSubLink
                    id="nav-dynamic-balance"
                    url="/dynamic-balance"
                    title="Dynamic Balance"
                />
                <SideBarSubLink
                    id="nav-static-balance"
                    url="/static-balance"
                    title="Static Balance"
                />
            </div>

            <SideBarDropDownLink
                icon={"icons/angle-right-solid.png"}
                iconID="assessments-icon"
                myRef={assessmentsDropDownArrow}
                target="#component-collapse-assessments"
                title="Assessments"
                onClick={() => setAssessmentsDropDownShowing((prev) => !prev)}
            />
            <div
                className="collapse fadedOut"
                id="component-collapse-assessments"
                ref={assessmentsDropDown}
            >
                <SideBarSubLink
                    id="nav-assessments-fim"
                    url="/fim"
                    title="FIM"
                />
                {/* <SideBarSubLink
                  id="nav-static-balance"
                  url="/static-balance"
                  title="Static Balance"
              /> */}
            </div>
        </div>
    );
};

export default SideBar;
