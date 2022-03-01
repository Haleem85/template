import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./styles.css";
import { incrementAction, decreaseAction } from "../actions/actions";
import { Button } from "../Buttons";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

const propTypes = {
  value: PropTypes.string,
};
const defaultProps = {
  value: "",
};
const mapStateToProps = (state) => ({
  value: state.value,
});
const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
});

// This is an example script - don't forget to change it!
LogRocket.identify("Test_2", {
  name: "Tester Test 2",
  email: "tester@test.com",

  release: "1.0.0",

  // Add your own custom user variables here, ie:
  subscriptionType: "pro",
});

class App extends PureComponent {
  render() {
    const { value, incrementAction, decreaseAction } = this.props;
    return (
      <div>
        <div className="App">
          <h1>LogRocket Test Sandbox</h1>
          <h2 />

          <h1>{value}</h1>
          <Button onClick={incrementAction}>increment</Button>
          <Button onClick={decreaseAction}>decrease</Button>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(App);
