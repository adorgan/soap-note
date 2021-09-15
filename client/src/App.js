import Header from "./components/Header";
import FIM from "./components/FIM";
import ArmBike from "./components//TherEx/ArmBike";
import ArmExercise from "./components/TherEx/ArmExercise";
import HemiDressing from "./components/SelfCare/HemiDressing";
import Grooming from "./components/SelfCare/Grooming";
import ToiletTransfer from "./components/Mobility/ToiletTransfer";
import MyNotes from "./components/MyNotes";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import Dashboard from "./components/Dashboard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ADL from "./components/ADL";

function App() {
    return (
        <Router>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            Home
                        </Link>
                        {/* <Link className="navbar-brand" to="/login">
                            Login
                        </Link>
                        <Link className="navbar-brand" to="/register">
                            Register
                        </Link> */}
                    </div>
                </nav>
                <Header />
                <div className="row me-0">
                    <div className="col-2 border-end p-0">
                        <nav className="navbar">
                            <ul className="list-unstyled ps-4 pt-3">
                                <li className="">
                                    <button
                                        type="button"
                                        className="btn shadow-none p-0"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#component-collapse-adl"
                                    >
                                        ADLs/Self-Care
                                    </button>
                                    <div
                                        className="collapse"
                                        id="component-collapse-adl"
                                    >
                                        <ul className="list-unstyled ps-3">
                                            <li>
                                                <Link
                                                    id="nav-ADL"
                                                    className="text-decoration-none text-reset"
                                                    to="/ADL"
                                                >
                                                    ADL re-training
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    id="nav-hemi-dressing"
                                                    className="text-decoration-none text-reset"
                                                    to="/hemi-dressing"
                                                >
                                                    Hemi-Dressing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    id="nav-grooming"
                                                    className="text-decoration-none text-reset"
                                                    to="/grooming"
                                                >
                                                    Grooming
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="">
                                    <button
                                        type="button"
                                        className="btn shadow-none p-0"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#component-collapse-ther-ex"
                                    >
                                        Therapuetic Exercise
                                    </button>
                                    <div
                                        className="collapse"
                                        id="component-collapse-ther-ex"
                                    >
                                        <ul className="list-unstyled ps-3">
                                            <li>
                                                <Link
                                                    id="nav-arm-bike"
                                                    className="text-decoration-none text-reset"
                                                    to="/arm-bike"
                                                >
                                                    Arm Bike
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    id="nav-arm-exercises"
                                                    className="text-decoration-none text-reset"
                                                    to="/arm-exercises"
                                                >
                                                    Arm Exercises
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="">
                                    <button
                                        type="button"
                                        className="btn shadow-none p-0"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#component-collapse-mobility"
                                    >
                                        Functional Mobility
                                    </button>
                                    <div
                                        className="collapse"
                                        id="component-collapse-mobility"
                                    >
                                        <ul className="list-unstyled ps-3">
                                            <li>
                                                <Link
                                                    id="nav-toilet-transfer"
                                                    className="text-decoration-none text-reset"
                                                    to="/toilet-transfer"
                                                >
                                                    Toilet Transfer
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link
                                                    id="nav-arm-exercises"
                                                    className="text-decoration-none text-reset"
                                                    to="/arm-exercises"
                                                >
                                                    Arm Exercises
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        id="nav-fim"
                                        className="text-decoration-none text-reset"
                                        to="/fim"
                                    >
                                        FIM
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        id="nav-my-notes"
                                        className="text-decoration-none text-reset"
                                        to="/notes"
                                    >
                                        My Notes
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <div className="col-8">
                        <Switch>
                            <Route path="/notes">
                                <MyNotes />
                            </Route>
                            <Route path="/fim">
                                <FIM />
                            </Route>
                            <Route path="/arm-bike">
                                <ArmBike />
                            </Route>
                            <Route path="/arm-exercises">
                                <ArmExercise />
                            </Route>
                            <Route path="/hemi-dressing">
                                <HemiDressing />
                            </Route>
                            <Route path="/grooming">
                                <Grooming />
                            </Route>
                            <Route path="/toilet-transfer">
                                <ToiletTransfer />
                            </Route>
                            <Route path="/ADL">
                                <ADL />
                            </Route>
                            {/* <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/register">
                                <Register />
                            </Route> */}
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>

        // <div className="container">
        //   <Header />
        //   <FIM />
        //   <ArmBike />

        // </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}

export default App;
