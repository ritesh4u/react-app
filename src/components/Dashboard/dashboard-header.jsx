import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./dashboard.css";

class DashboardHeader extends Component {
  state = {};
  render() {
    let DropdownItem = new dropdownItem();
    return (
      <div>
        <nav className="navbar  navbar-expand-md navbar-light mt-4 ml-4">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="a">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/plughr-uploads/10005/10005_logo.png"
              alt="logo"
              style={{
                width: "60px"
              }}
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ">
              <li className="  btn-group">
                <NavLink to="/">
                  <div
                    className="nav-link  dropdown-outline ml-1"
                    id="navbarhome"
                  >
                    Home
                  </div>
                </NavLink>
              </li>
              <DropdownComponent
                name="setup"
                dropdownitem={DropdownItem.setupDropdownItem()}
              />
              <DropdownComponent
                name="Users"
                dropdownitem={DropdownItem.usersDropdownItem()}
              />
              <DropdownComponent
                name="Learning"
                dropdownitem={DropdownItem.learningDropdownItem()}
              />
              <DropdownComponent
                name="Performance"
                dropdownitem={DropdownItem.performanceDropdownItem()}
              />
              <DropdownComponent
                name="Reports"
                dropdownitem={DropdownItem.ReportsDropdownItem()}
              />
              <li className=" dropdown nav-item btn-group">
                <a
                  id="notifimenu"
                  href="notifimessage"
                  className="nav-link dropdown-toggle dropdown-outline "
                >
                  message
                </a>
              </li>

              <DropdownComponent
                name="user set"
                dropdownitem={DropdownItem.userSettingDropdownItem()}
              />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
class DropdownComponent extends Component {
  render() {
    return (
      <li className="dropdown nav-item btn-group">
        <a
          className="nav-link dropdown-toggle dropdown-outline ml-1"
          id="navbarsetup"
          data-toggle="dropdown"
        >
          {this.props.name}
        </a>
        <div className="dropdown-menu">
          {this.props.dropdownitem.map(x => {
            return x.itemUrl === "headerItem" || x.itemUrl === "headerItem1" ? (
              x.itemUrl === "headerItem" ? (
                <div key={x.itemName}>
                  <hr />
                  <a className="dropdown-header text-muted">{x.itemName}</a>
                </div>
              ) : (
                <a className="dropdown-header text-muted" key={x.itemName}>
                  {x.itemName}
                </a>
              )
            ) : (
              <NavLink to={x.itemUrl} key={x.itemName}>
                <div className="dropdown-item">{x.itemName}</div>
              </NavLink>
            );
          })}
        </div>
      </li>
    );
  }
}
class dropdownItem {
  dropdownItem() {}
  setupDropdownItem = () => {
    return [
      { itemName: "Organisation design", itemUrl: "headerItem1" },
      { itemName: "About", itemUrl: "/s1" },
      { itemName: "Settings", itemUrl: "/s2" },
      { itemName: "Offices", itemUrl: "/s3" },
      { itemName: "Edit departments", itemUrl: "/s4" },
      { itemName: "Edit KRAs", itemUrl: "s5" },
      { itemName: "Edit skills", itemUrl: "s6" },
      { itemName: "Create Roles", itemUrl: "s7" },
      { itemName: "Policy setup", itemUrl: "headerItem" },
      { itemName: "Policy definitions", itemUrl: "s8" },
      { itemName: "Policy contents", itemUrl: "s9" },
      { itemName: "Holidays list", itemUrl: "s10" },
      { itemName: "Assign holiday to offices", itemUrl: "s11" },
      { itemName: "Automate leaves", itemUrl: "s12" },
      { itemName: "Leaves balances setup", itemUrl: "s13" }
    ];
  };
  usersDropdownItem = () => {
    return [
      { itemName: "Onboarding", itemUrl: "headerItem1" },
      { itemName: "Add users", itemUrl: "u1" },
      { itemName: "Manage users", itemUrl: "u2" },
      { itemName: "Track onboarding", itemUrl: "u3" },
      { itemName: "End probation", itemUrl: "u4" },
      { itemName: "User views", itemUrl: "headerItem" },
      { itemName: "User profile", itemUrl: "u5" },
      { itemName: "Documents", itemUrl: "u6" },
      { itemName: "Leaves", itemUrl: "u7" },
      { itemName: "skills", itemUrl: "u8" },
      { itemName: "Engagement", itemUrl: "headerItem" },
      { itemName: "Announce events", itemUrl: "u9" },
      { itemName: "Core values", itemUrl: "u10" },
      { itemName: "Message for team", itemUrl: "u11" },
      { itemName: "Seperation", itemUrl: "headerItem" },
      { itemName: "Exit checklists", itemUrl: "u12" },
      { itemName: "Initiate Exit", itemUrl: "u13" },
      { itemName: "Exit status", itemUrl: "u14" }
    ];
  };
  learningDropdownItem = () => {
    return [
      { itemName: "e-Learning decks", itemUrl: "headerItem1" },
      { itemName: "Create decks", itemUrl: "l1" },
      { itemName: "Create content", itemUrl: "l2" },
      { itemName: "Readiness test", itemUrl: "l3" },
      { itemName: "Reading room", itemUrl: "headerItem" },
      { itemName: "Create articles", itemUrl: "l4" },
      { itemName: "Publish articles", itemUrl: "l5" }
    ];
  };
  performanceDropdownItem = () => {
    return [
      { itemName: "Launch PMS", itemUrl: "headerItem1" },
      { itemName: "Edit success indicator", itemUrl: "p1" },
      { itemName: "Rating scale", itemUrl: "p2" },
      { itemName: "Initiate review cycle", itemUrl: "p3" },
      { itemName: "Review ratings", itemUrl: "headerItem" },
      { itemName: "View review status", itemUrl: "p4" },
      { itemName: "Manage reviews", itemUrl: "p5" },
      { itemName: "Reset review progress", itemUrl: "p6" },
      { itemName: "Performance history", itemUrl: "p7" },
      { itemName: "Put user on PIP", itemUrl: "p8" },
      { itemName: "Appraisals", itemUrl: "headerItem" },
      { itemName: "Manage Appraisals", itemUrl: "p9" },
      { itemName: "HR Appraisals", itemUrl: "p10" },
      { itemName: "View Appraisals status", itemUrl: "p11" }
    ];
  };
  ReportsDropdownItem = () => {
    return [
      { itemName: "Exception reports", itemUrl: "headerItem1" },
      { itemName: "Onboarding checklists", itemUrl: "r1" },
      { itemName: "Incomplete profile", itemUrl: "r2" },
      { itemName: "Targets unassigned", itemUrl: "r3" },
      { itemName: "Status reports", itemUrl: "headerItem" },
      { itemName: "Staff Attendance", itemUrl: "r4" },
      { itemName: "View role book", itemUrl: "r5" },
      { itemName: "View KRAs", itemUrl: "r6" },
      { itemName: "Induction status", itemUrl: "r7" },
      { itemName: "Current manpower", itemUrl: "r8" },
      { itemName: "View leave balances", itemUrl: "r9" },
      { itemName: "View review periods", itemUrl: "r10" },
      { itemName: "Hiring Report", itemUrl: "r11" },
      { itemName: "Exit Report", itemUrl: "r12" }
    ];
  };
  userSettingDropdownItem = () => {
    return [
      { itemName: "Subscription history", itemUrl: "us1" },
      { itemName: "Manage subscription", itemUrl: "us2" },
      { itemName: "Add HR admins", itemUrl: "us3" },
      { itemName: "Update password", itemUrl: "us4" },
      { itemName: "Logout", itemUrl: "us5" }
    ];
  };
}
export default DashboardHeader;
