import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class DashboardBody extends Component {
  state = {};
  logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    // localStorage.setItem("my_data", "rit");
    return (
      <div>
        <h1>This is Home page after login</h1>
        <h3>
          {" "}
          only about dropdown from setup is define for demo And home btn also
        </h3>
        <h4>Below is logout btn</h4>
        <NavLink to="/">
          <button
            type="button "
            className="btn btn-primary"
            onClick={this.logout}
          >
            Logout
          </button>
        </NavLink>
      </div>
    );
  }
}

export default DashboardBody;
