import React, { Component } from "react";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      company_id: "",
      user_id: "",
      password: "",
      companyidError: false,
      useridError: false,
      passwordError: false,
      redirecttoDashboard: false
    };
  }
  validate = () => {
    if (this.state.company_id === "") {
      this.setState({ companyidError: true });
      return;
    }
    if (this.state.user_id === "") {
      this.setState({ useridError: true });
      return;
    }
    if (this.state.password === "") {
      this.setState({ passwordError: true });
      return;
    }
    this.setState({ redirecttoDashboard: true });
    console.log(
      "Company id is = " +
        this.state.company_id +
        " user id = " +
        this.state.user_id +
        " password= " +
        this.state.password
    );

    //return <Redirect to="/dashboard" />;
    document.getElementById("closebtn").click();
    // //calling parent method for islogin state
    this.props.changeStatus();
  };

  onChangeData = e => {
    this.setState({ [e.target.name]: e.target.value });

    if (!e.target.value.length) {
      switch (e.target.name) {
        case "company_id":
          this.setState({ companyidError: true });
          break;
        case "user_id":
          this.setState({ useridError: true });
          break;
        case "password":
          this.setState({ passwordError: true });
          break;
        default:
          break;
      }
    } else {
      switch (e.target.name) {
        case "company_id":
          this.setState({ companyidError: false });
          break;
        case "user_id":
          this.setState({ useridError: false });
          break;
        case "password":
          this.setState({ passwordError: false });
          break;
        default:
          break;
      }
    }
    //console.log([e.target.name] + e.target.value);
    //alert(e.target.name);
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="loginView"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/*Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Please input valid details</h4>
                <button
                  type="button"
                  id="closebtn"
                  className="close"
                  data-dismiss="modal"
                >
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <div>
                  <div className="form-group">
                    <label htmlFor="company_id">Company Id:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="company_id"
                      placeholder="Company ID"
                      name="company_id"
                      onChange={this.onChangeData}
                    />
                    {this.state.companyidError ? (
                      <p className="text-danger">company_id is compulsary</p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="user_id">User Id:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="user_id"
                      placeholder="User ID"
                      name="user_id"
                      onChange={this.onChangeData}
                    />
                    {this.state.useridError ? (
                      <p className="text-danger">user_id is compulsary</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.onChangeData}
                    />
                    {this.state.passwordError ? (
                      <p className="text-danger">Password</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      onClick={this.validate}
                      // data-dismiss="modal"
                    >
                      Submit
                    </button>
                    <button
                      className="btn btn-outline-primary ml-2 "
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
