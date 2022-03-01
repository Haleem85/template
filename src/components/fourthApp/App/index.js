import React, { Component } from "react";
import "./style.css";
import { Messages, LinkNav, LinkNavPane, Books, MouseTracker } from "../api";

class App extends Component {
  render() {
    return (
      <div className="main">
        <LinkNav activeLink="1">
          {/* Home Page */}
          <LinkNavPane link="1" title="Home" url="/"></LinkNavPane>
          <LinkNavPane
            link="2"
            title="Books"
            url="/books"
            component={Books}></LinkNavPane>
          <LinkNavPane
            link="3"
            url="/messages"
            title="Messages"
            component={Messages}></LinkNavPane>
          <LinkNavPane
            link="4"
            url="/mouse"
            title="Mouse"
            component={MouseTracker}></LinkNavPane>
        </LinkNav>
      </div>
    );
  }
}

export default App;
