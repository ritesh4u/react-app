import React, { Component } from "react";
import DashboardHeader from "./dashboard-header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import DashboardBody from "./dashboard-body";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <DashboardHeader />
            <Switch>
              <Route path="/" component={DashboardBody} exact />
              <Route
                path="/s1"
                render={() => {
                  return <h1>path to s1</h1>;
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
  }
}

export default Dashboard;
