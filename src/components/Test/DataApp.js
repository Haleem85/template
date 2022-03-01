import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import StudentApp from "./students/StudentApp";
import EmployeeApp from "./employees/EmployeeApp";
import "bootstrap/dist/css/bootstrap.css";
// import apiClient from "./Services/api";
// import Messages from "./messages";
// import Records from "./Records_";

const App = () => {
  return (
    <Router>
      {" "}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/employees" className="nav-link">
                {" "}
                Employees{" "}
              </NavLink>{" "}
            </li>{" "}
            <li className="nav-item">
              {" "}
              <NavLink to="/students" className="nav-link">
                {" "}
                Students{" "}
              </NavLink>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </nav>{" "}
      <div className="container mt-5 pt-5">
        <Switch>
          <Route path="/employees" component={EmployeeApp} exact /> {""}{" "}
          <Route path="/students" component={StudentApp} exact />
          {""}{" "}
        </Switch>{" "}
      </div>{" "}
    </Router>
  );
};

export default App;
