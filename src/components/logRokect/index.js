import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import store from "./store";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

LogRocket.init("j1s1vf/test-project");
setupLogRocketReact(LogRocket);

const AppRoot = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppRoot />, rootElement);
