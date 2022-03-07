import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import SideBar from "./components/SideBar";
import toJson from "enzyme-to-json";


it("renders sidebar", () => {
    const wrapper = shallow(<App />);
    const sidebar = <SideBar />;
    expect(wrapper.contains(sidebar)).toEqual(true);
});
