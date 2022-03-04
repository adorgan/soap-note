import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SideBarSubLink from "./SideBarSubLink";
import { useEffect, useState } from "react";
import SideBarPrimaryLink from "./SideBarPrimaryLink";
import SideBarDropDownLink from "./SideBarDropDownLink";
import { Context } from "./Context";

const SideBar = () => {
  const [ADLDropDownShowing, setADLDropDownShowing] = useState(false);
  const [therExDropDownShowing, setTherExDropDownShowing] = useState(false);
  const [funcMobDropDownShowing, setFuncMobDropDownShowing] = useState(false);
  const [balanceDropDownShowing, setBalanceDropDownShowing] = useState(false);
  const [assessmentsDropDownShowing, setAssessmentsDropDownShowing] =
    useState(false);
  const [loggedIn, setLoggedIn] = useContext(Context);
  console.log(loggedIn);

  useEffect(() => {
    const ADLDropDown = document.getElementById("component-collapse-adl");
    const therExDropDown = document.getElementById(
      "component-collapse-ther-ex"
    );
    const funcMobDropDown = document.getElementById(
      "component-collapse-mobility"
    );

    const balanceDropDown = document.getElementById(
      "component-collapse-balance"
    );

    const assessmentsDropDown = document.getElementById(
      "component-collapse-assessments"
    );

    if (ADLDropDownShowing) {
      document.getElementById("adl-icon").classList.add("rotate");
      ADLDropDown.classList.add("fadeIn");
      ADLDropDown.classList.remove("fadedOut");
    } else {
      document.getElementById("adl-icon").classList.remove("rotate");
      ADLDropDown.classList.add("fadedOut");
      ADLDropDown.classList.remove("fadeIn");
    }

    if (therExDropDownShowing) {
      document.getElementById("ther-ex-icon").classList.add("rotate");
      therExDropDown.classList.add("fadeIn");
      therExDropDown.classList.remove("fadedOut");
    } else {
      document.getElementById("ther-ex-icon").classList.remove("rotate");
      therExDropDown.classList.add("fadedOut");
      therExDropDown.classList.remove("fadeIn");
    }

    if (funcMobDropDownShowing) {
      document.getElementById("func-mob-icon").classList.add("rotate");

      funcMobDropDown.classList.add("fadeIn");
      funcMobDropDown.classList.remove("fadedOut");
    } else {
      document.getElementById("func-mob-icon").classList.remove("rotate");
      funcMobDropDown.classList.add("fadedOut");
      funcMobDropDown.classList.remove("fadeIn");
    }

    if (balanceDropDownShowing) {
      document.getElementById("balance-icon").classList.add("rotate");
      balanceDropDown.classList.add("fadeIn");
      balanceDropDown.classList.remove("fadedOut");
    } else {
      document.getElementById("balance-icon").classList.remove("rotate");
      balanceDropDown.classList.add("fadedOut");
      balanceDropDown.classList.remove("fadeIn");
    }

    if (assessmentsDropDownShowing) {
      document.getElementById("assessments-icon").classList.add("rotate");
      assessmentsDropDown.classList.add("fadeIn");
      assessmentsDropDown.classList.remove("fadedOut");
    } else {
      document.getElementById("assessments-icon").classList.remove("rotate");
      assessmentsDropDown.classList.add("fadedOut");
      assessmentsDropDown.classList.remove("fadeIn");
    }
  });

  return (
    <div className="sidebar-links-container">
      <Link className="side-bar-non-dropdown-link" to="/">
        Home
      </Link>

      <SideBarDropDownLink
        icon={"icons/caret-right-solid.png"}
        iconID="adl-icon"
        target="component-collapse-adl"
        title="ADLs/Self-Care"
        onClick={() => setADLDropDownShowing((prev) => !prev)}
      />

      <div className="collapse fadedOut" id="component-collapse-adl">
        <SideBarSubLink id="nav-ADL" url="/ADL" title="ADL Re-Training" />
        <SideBarSubLink
          id="nav-hemi-dressing"
          url="/hemi-dressing"
          title="Hemi-Dressing"
        />
        <SideBarSubLink id="nav-grooming" url="/grooming" title="Grooming" />
      </div>

      <SideBarDropDownLink
        icon={"icons/caret-right-solid.png"}
        iconID="ther-ex-icon"
        target="#component-collapse-ther-ex"
        title="Therapuetic Exercise"
        onClick={() => setTherExDropDownShowing((prev) => !prev)}
      />
      <div className="collapse fadedOut" id="component-collapse-ther-ex">
        <SideBarSubLink id="nav-arm-bike" url="/arm-bike" title="Arm Bike" />
        <SideBarSubLink
          id="nav-arm-exercises"
          url="/arm-exercises"
          title="Arm Exercises"
        />
      </div>

      <SideBarDropDownLink
        icon={"icons/caret-right-solid.png"}
        iconID="func-mob-icon"
        target="#component-collapse-mobility"
        title="Functional Mobility"
        onClick={() => setFuncMobDropDownShowing((prev) => !prev)}
      />
      <div className="collapse fadedOut" id="component-collapse-mobility">
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
        icon={"icons/caret-right-solid.png"}
        iconID="balance-icon"
        target="#component-collapse-balance"
        title="Balance"
        onClick={() => setBalanceDropDownShowing((prev) => !prev)}
      />
      <div className="collapse fadedOut" id="component-collapse-balance">
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
        icon={"icons/caret-right-solid.png"}
        iconID="assessments-icon"
        target="#component-collapse-assessments"
        title="Assessments"
        onClick={() => setAssessmentsDropDownShowing((prev) => !prev)}
      />
      <div className="collapse fadedOut" id="component-collapse-assessments">
        <SideBarSubLink id="nav-assessments-fim" url="/fim" title="FIM" />
        {/* <SideBarSubLink
                  id="nav-static-balance"
                  url="/static-balance"
                  title="Static Balance"
              /> */}
      </div>

      {loggedIn && (
        <SideBarPrimaryLink id="nav-my-notes" url="/notes" title="My Notes" />
      )}
    </div>
  );
};

export default SideBar;
