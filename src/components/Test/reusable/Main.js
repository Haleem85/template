import React, { Component } from "react";
import "./App.css";
import { Tabs, TabPane } from "../../fourthApp/api";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Tabs activeTab="1">
          <TabPane tab="1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </TabPane>
          <TabPane tab="2">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua.
          </TabPane>
          <TabPane tab="3">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
