import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderRight from "./components/HeaderRight";
import Routes from "./components/Routes";
import SideBar from "./components/SideBar";
import { Context } from "./components/Context";
import postData from "./utils/postRequest";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(async()=> {
    const status = await postData("/checkLoggedIn");
    if (status === "success"){
      setLoggedIn(true);
    }
  })
  return (
    <Router>
      <Context.Provider value={[loggedIn, setLoggedIn]}>
        <div className="flex-container">
          <div id="left-sidebar" className="left-container">
            <SideBar />
          </div>

          <div id="right-container" className="right-container">
            <HeaderRight />

            <div className="content" id="mainContent">
              <Routes />
            </div>
          </div>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
