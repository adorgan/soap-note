import React from "react";
import { Link } from "react-router-dom";
import SideBarSubLink from "./SideBarSubLink";
import { useEffect, useState } from "react";
import SideBarPrimaryLink from "./SideBarPrimaryLink";
import SideBarDropDownLink from "./SideBarDropDownLink";

const SideBar = () => {
  const [ADLDropDownShowing, setADLDropDownShowing] = useState(false);
  const [therExDropDownShowing, setTherExDropDownShowing] = useState(false);
  const [funcMobDropDownShowing, setFuncMobDropDownShowing] = useState(false);
  const [balanceDropDownShowing, setBalanceDropDownShowing] = useState(false);


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

    if (ADLDropDownShowing) {
      ADLDropDown.classList.add("fadeIn");
      ADLDropDown.classList.remove("fadedOut");
    } else {
      ADLDropDown.classList.add("fadedOut");
      ADLDropDown.classList.remove("fadeIn");
    }

    if (therExDropDownShowing) {
      therExDropDown.classList.add("fadeIn");
      therExDropDown.classList.remove("fadedOut");
    } else {
      therExDropDown.classList.add("fadedOut");
      therExDropDown.classList.remove("fadeIn");
    }

    if (funcMobDropDownShowing) {
      funcMobDropDown.classList.add("fadeIn");
      funcMobDropDown.classList.remove("fadedOut");
    } else {
      funcMobDropDown.classList.add("fadedOut");
      funcMobDropDown.classList.remove("fadeIn");
    }

    if (balanceDropDownShowing) {
      balanceDropDown.classList.add("fadeIn");
      balanceDropDown.classList.remove("fadedOut");
    } else {
      balanceDropDown.classList.add("fadedOut");
      balanceDropDown.classList.remove("fadeIn");
    }
  });

  return (
    <div className="sidebar-links-container">
      <Link className="" to="/">
        Home
      </Link>

      <SideBarDropDownLink
        target="component-collapse-adl"
        title="ADLs/Self-Care"
        onClick={() => setADLDropDownShowing((prev) => !prev)}
      />

      <div
        className="collapse fadedOut"
        id="component-collapse-adl"
      >
        <SideBarSubLink id="nav-ADL" url="/ADL" title="ADL Re-Training" />
        <SideBarSubLink
          id="nav-hemi-dressing"
          url="/hemi-dressing"
          title="Hemi-Dressing"
        />
        <SideBarSubLink id="nav-grooming" url="/grooming" title="Grooming" />
      </div>

      <SideBarDropDownLink
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

      {/* <SideBarPrimaryLink id="nav-balance" url="/balance" title="Balance" /> */}

      <SideBarPrimaryLink id="nav-fim" url="/fim" title="FIM" />

      <SideBarPrimaryLink id="nav-my-notes" url="/notes" title="My Notes" />
    </div>
  );
};

export default SideBar;
