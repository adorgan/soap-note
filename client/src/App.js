import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderRight from "./components/HeaderRight";
import Routes from "./components/Routes";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div className="flex-container">
        <div className="left-container">
          <SideBar />
        </div>

        <div className="right-container">
          <HeaderRight />

          <div className="content" id="mainContent">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
