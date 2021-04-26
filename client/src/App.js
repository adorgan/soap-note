import Header from './components/Header'
import FIM from './components/FIM'
import ArmBike from './components/ArmBike'
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/arm-bike">Arm Bike</Link>
            </li>
            <li>
              <Link to="/fim">FIM</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/fim">
            <FIM />
          </Route>
          <Route path="/arm-bike">
            <ArmBike />
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
    return <h2></h2>;
}

export default App;
