import Header from './components/Header'
import FIM from './components/FIM'
import ArmBike from './components//TherEx/ArmBike'
import MyNotes from './components/MyNotes'
import ArmExercise from './components/TherEx/ArmExercise'
import HemiDressing from './components/SelfCare/HemiDressing'
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="container">
              <Header />
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/hemi-dressing">Hemi-Dressing</Link>
                      </li>
                      <li>
                          <Link to="/arm-bike">Arm Bike</Link>
                      </li>
                      <li>
                          <Link to="/arm-exercises">Arm Exercises</Link>
                      </li>
                      <li>
                          <Link to="/fim">FIM</Link>
                      </li>
                      <li>
                          <Link to="/notes">My Notes</Link>
                      </li>
                  </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
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
