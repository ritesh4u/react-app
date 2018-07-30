import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";
import Dashboard from "./components/Dashboard/dasboard";
import HomePage from "./components/homePage";
//edit in ritesh branch

class App extends Component {
  state = {
    isloggedIn: localStorage.getItem("login") === null ? false : true
  };

  //callback method for Homepage
  myCallback = dataFromChild => {
    this.setState({ isloggedIn: dataFromChild });
    localStorage.setItem("login", true);
  };
  render() {
    console.log(localStorage.getItem("login"));
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <Switch>
              <Route
                path="/"
                render={() => {
                  return this.state.isloggedIn ? (
                    <Dashboard />
                  ) : (
                    <HomePage callbackFromParent={this.myCallback} />
                  );
                }}
              />
              <Route
                render={() => {
                  return <h1>Error</h1>;
                }}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
    /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
  }
}

export default App;
