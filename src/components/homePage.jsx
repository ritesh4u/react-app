import React, { Component } from "react";
import Login from "./login";
import MarkAttendance from "./markAttendance";
class HomePage extends Component {
  state = {
    togglelogin: false
  };
  //callback method for login component to change app component 'islogin' state
  changeStatus = () => {
    //calling app method for changing islogin state
    this.props.callbackFromParent(true);
  };
  render() {
    return (
      <div>
        <div className="jumbotron  m-2">
          <h1 className="text-center">PLUGHRAPP.COM</h1>
        </div>
        <div className="container ">
          <div className="row-1 text-center ">
            <h1 className="display-1">Let's get to work</h1>
          </div>
          <div className="row-1 text-center">
            <h5>Crack goals, achieve milestones, stay awesome</h5>
          </div>
          <div className="text-center mt-5">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg"
              data-toggle="modal"
              data-target="#loginView"
            >
              USER LOGIN
            </button>
            <div className="text-center mt-3 mb-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg"
                data-toggle="modal"
                data-target="#attendanceView"
              >
                MARK ATTENDANCE
              </button>
            </div>
          </div>
        </div>
        <Login changeStatus={this.changeStatus} />
        <MarkAttendance />
      </div>
    );
  }
}

export default HomePage;
