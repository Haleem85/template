import React from "react";
import { Navbar } from "./Navbar/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./index";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Work from "./Work";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Index} />;
        <Route exact path="/portfolio" component={Portfolio} />;
        <Route exact path="/work" component={Work} />;
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
