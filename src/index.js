// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...1
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/fourthApp/App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...2

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { App } from "./components/logRokect/App";
// import store from "./components/logRokect/store";
// import LogRocket from "logrocket";
// import setupLogRocketReact from "logrocket-react";

// LogRocket.init("j1s1vf/third_app");
// setupLogRocketReact(LogRocket);

// const AppRoot = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<AppRoot />, rootElement);
