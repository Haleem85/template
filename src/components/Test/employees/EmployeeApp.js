import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalProvider } from "./GlobalState";
import "./App.css";

import { Home } from "./Home";
import { AddEmployee } from "./AddEmployee";
import { EditEmployee } from "./EditEmployee";

const EmployeeApp = () => {
  return (
    <Router>
      <GlobalProvider>
        <div className="EmployeeApp">
          <Switch>
            <Route path="/employees" component={Home} exact />
            <Route path="/add" component={AddEmployee} exact />
            <Route path="/edit/:id" component={EditEmployee} exact />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
};

export default EmployeeApp;
