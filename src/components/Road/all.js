import React from "react";
import Messages from "../Test/messages/baseComp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Books from "./Books";
import Login from "./Login";
import apiClient from "../Test/messages/Services/api";

// export const App = () => {
//   return (
//     <div className="page">
//       <DataList />
//     </div>
//   );
// };
const Main = () => {
  const [loggedIn, setLoggedIn] = React.useState(
    sessionStorage.getItem("loggedIn") == "true" || false
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
    <Router>
      {" "}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/messages" className="nav-link">
                {" "}
                Messages{" "}
              </NavLink>{" "}
            </li>{" "}
            <li className="nav-item">
              {" "}
              <NavLink to="/books" className="nav-link">
                {" "}
                Books{" "}
              </NavLink>{" "}
            </li>{" "}
            <li className="nav-item"> {authLink} </li>{" "}
          </ul>{" "}
        </div>{" "}
      </nav>{" "}
      <div className="container mt-5 pt-5">
        <Switch>
          <Route
            path="/books"
            exact
            render={(props) => <Books {...props} loggedIn={loggedIn} />}
          />{" "}
          {"  "} {""} {"    "} {""}{" "}
          <Route
            path="/messages"
            exact
            render={(props) => <Messages {...props} loggedIn={loggedIn} />}
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

export default Main;
