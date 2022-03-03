import React from "react";
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
import Balance from "./Balance";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const Routes = () => {
  return (
    <Switch>
      <Route path="/notes">
        <MyNotes />
      </Route>
      <Route path="/fim">
        <FIM />
      </Route>
      <Route path="/arm-bike">
        <ArmBike title="Arm Bike"/>
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
      <Route path="/balance">
        <Balance />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
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
