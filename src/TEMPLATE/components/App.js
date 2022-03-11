import React from "react";
import { Navbar } from "./Navbar/index";
import Home from "./Home";
import Work from "./Work";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
