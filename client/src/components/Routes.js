import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import MyNotes from "./MyNotes";
import FIM from "./FIM";
import ArmExercise from "./TherEx/ArmExercise";
import ArmBike from "./TherEx/ArmBike";
import HemiDressing from "./SelfCare/HemiDressing";
import Grooming from "./SelfCare/Grooming";
import ToiletTransfer from "./FunctionalMobility/ToiletTransfer";
import ADL from "./ADL";
import FunctionalMobility from "./FunctionalMobility";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import DynamicBalance from "./Balance/DynamicBalance";
import StaticBalance from "./Balance/StaticBalance";
import Logout from "./Auth/Logout";
import { Context } from "./Context";

const Routes = () => {
  const [loggedIn, setLoggedIn] = useContext(Context);
  return (
    <Switch>
      {loggedIn && (
        <Route path="/notes">
          <MyNotes />
        </Route>
      )}

      <Route path="/fim">
        <FIM title="FIM" />
      </Route>
      <Route path="/arm-bike">
        <ArmBike title="Arm Bike" />
      </Route>
      <Route path="/arm-exercises">
        <ArmExercise title="Arm Exercises" />
      </Route>
      <Route path="/hemi-dressing">
        <HemiDressing />
      </Route>
      <Route path="/grooming">
        <Grooming title="Grooming" />
      </Route>
      <Route path="/toilet-transfer">
        <ToiletTransfer />
      </Route>
      <Route path="/ADL">
        <ADL />
      </Route>
      <Route path="/functional-mobility">
        <FunctionalMobility />
      </Route>
      <Route path="/dynamic-balance">
        <DynamicBalance title="Dynamic Balance" />
      </Route>
      <Route path="/static-balance">
        <StaticBalance title="Static Balance" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

function Home() {
  return <h2>Home</h2>;
}

export default Routes;
