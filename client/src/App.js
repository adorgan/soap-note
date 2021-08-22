import Header from "./components/Header";
import FIM from "./components/FIM";
import ArmBike from "./components//TherEx/ArmBike";
import MyNotes from "./components/MyNotes";
import ArmExercise from "./components/TherEx/ArmExercise";
import HemiDressing from "./components/SelfCare/HemiDressing";
import Grooming from "./components/SelfCare/Grooming";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </div>
                </nav>
                <Header />
                <div className="row">
                    <div className="col-2 border-end">
                        <nav className="navbar">
                            <ul>
                                <li>
                                    <Link to="/hemi-dressing">
                                        Hemi-Dressing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/grooming">Grooming</Link>
                                </li>
                                <li>
                                    <Link to="/arm-bike">Arm Bike</Link>
                                </li>
                                <li>
                                    <Link to="/arm-exercises">
                                        Arm Exercises
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/fim">FIM</Link>
                                </li>
                                <li>
                                    <Link to="/notes">My Notes</Link>
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
