import React from "react";
import { render } from "react-dom";
import { DisplayNumber } from "../components/DisplayNumber";
import { ChangeNumber } from "../components/ChangeNumber";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ChangeNumber />
        <DisplayNumber />
      </div>
    );
  }
}

export default App;
