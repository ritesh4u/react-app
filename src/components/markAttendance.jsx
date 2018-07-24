import React, { Component } from "react";
class MarkAttendance extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="attendanceView"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/*Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Mark Attendance</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <form action="/" method="GET">
                  <div className="form-group">
                    <span>
                      <label htmlFor="company_id">Company Id:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mcompany_id"
                        placeholder="company id"
                        name="company_id"
                      />
                    </span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_id">User Id:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="muser_id"
                      placeholder="User ID"
                      name="user_id"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="mpassword"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="form-group ">
                    <div className=" radio ">
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="At_Office"
                        />At Office
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Working_from_home"
                        />Working from home
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="In_field"
                        />In field
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Full_day_off"
                        />Full day off
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="First_half_off"
                        />First half off
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="radioGroup"
                          value="Second_half_off"
                        />Second half off
                      </label>
                    </div>
                  </div>

                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-outline-primary">
                      Submit
                    </button>
                    <button
                      className="btn btn-outline-primary ml-2"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkAttendance;
