// Import React
import React, { Component, useState, defaultProps } from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
// import Books from "../../messages/Books";
import Login from "../../messages/Login";
import apiClient from "../../messages/Services/api";
// import Messages, from "../../messages/messages";

// Import Custom CSS
import "./style.css";

// Import other React Component
// import CreateStudent from "./create-student.component";
// import EditStudent from "./edit-student.component";
// import StudentList from "./student-list.component";

// App Component
export const Bar = (props) => {
  // props;
  const { NavOne, NavTwo, linkOne, linkTwo, componentOne, componentTwo } =
    props;
  const [ComponentOne, setComponentOne] = useState(componentOne);
  const [ComponentTwo, setComponentTwo] = useState(componentTwo);
  // const NavTwo = props.NavTwo;
  // const linkOne = props.linkOne;
  // const linkTwo = props.linkTwo;
  // const [linkTwo, setLinkTwo] = useState();
  // const {NavOne, setNavOne}= setState({props})
  // let[ NavOne, NavTwo ] =setState({NavOne:props.NavOne, NavTwo:props.NavTwo});
  const [loggedIn, setLoggedIn] = React.useState(
    sessionStorage.getItem("loggedIn") === "true" || false
  );
  const login = () => {
    setLoggedIn(true);
    sessionStorage.setItem("loggedIn", true);
  };
  const logout = () => {
    apiClient.post("/logout").then((response) => {
      if (response.status === 204) {
        setLoggedIn(false);
        sessionStorage.setItem("loggedIn", false);
      }
    });
  };

  const authLink = loggedIn ? (
    <button onClick={logout} className="nav-link btn btn-link">
      {" "}
      Logout{" "}
    </button>
  ) : (
    <NavLink to="/login" className="nav-link">
      {" "}
      Login{" "}
    </NavLink>
  );
  return (
    // const[ NavOne, NavTwo ] =this.setState(props);
    <Router>
      {" "}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={linkOne} className="nav-link">
                {" "}
                {NavOne}{" "}
              </NavLink>{" "}
            </li>{" "}
            <li className="nav-item">
              {" "}
              <NavLink to={linkTwo} className="nav-link">
                {" "}
                {NavTwo}{" "}
              </NavLink>{" "}
            </li>{" "}
            <li className="nav-item"> {authLink} </li>{" "}
          </ul>{" "}
        </div>{" "}
      </nav>{" "}
      <div className="container mt-5 pt-5">
        <Switch>
          <Route
            path={linkTwo}
            exact
            // component
            // render
            render={(props) => <ComponentTwo {...props} loggedIn={loggedIn} />}
          />{" "}
          {"  "} {""} {"    "} {""}{" "}
          <Route
            path={linkOne}
            exact
            // component={componentOne}
            render={(props) => <ComponentOne {...props} loggedIn={loggedIn} />}
          />{" "}
          {"  "} {""} {"    "} {""}{" "}
          <Route
            path="/login"
            render={(props) => <Login {...props} login={login} />}
          />{" "}
        </Switch>{" "}
      </div>{" "}
    </Router>
  );
};
Bar.defaultProps = {
  NavOne: "",
  NavTwo: "",
  linkOne: "/",
  linkTwo: "/",
  componentOne: "",
  componentTwo: "",
};
