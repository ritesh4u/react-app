import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
//import HomePage from "./components/homePage";
//import Dashboard from "./components/Dashboard/dasboard"

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
