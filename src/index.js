// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...taskbox
// Dir::  F:\Programming_Library\Active\react\third_app\taskbox

import React from "react";
import ReactDOM from "react-dom";
import "./taskbox/src/index.css";
import App from "./taskbox/src/App";
import reportWebVitals from "./taskbox/src/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...myRedux
// Dir::  F:\Programming_Library\Active\react\third_app\src\myRedux

// import React from "react";
// import ReactDOM from "react-dom";
// // import "./codBox/index.css";
// import { Counter } from "./myRedux/features/counter/Counter";
// import store from "./myRedux/store";
// import { Provider } from "react-redux";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// start();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...codBox
// Dir::  F:\Programming_Library\Active\react\third_app\src\codBox

// import React from "react";
// import ReactDOM from "react-dom";
// import "./codBox/index.css";
// import App from "./codBox/App";
// import store from "./codBox/app/store";
// import { Provider } from "react-redux";

// import { worker } from "./codBox/api/server";

// import { fetchUsers } from "./codBox/features/users/usersSlice";

// // Wrap app rendering so we can wait for the mock API to initialize
// async function start() {
//   // Start our mock API server
//   await worker.start({ onUnhandledRequest: "bypass" });

//   store.dispatch(fetchUsers());

//   ReactDOM.render(
//     <React.StrictMode>
// <Provider store={store}>
//   <App />
// </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// }

// start();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...1
// import React from "react";
// import ReactDOM from "react-dom";
// // import "./index.css";
// import App from "./FreeCodeCamp/src/App";
// // import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
// // import { createStore } from "redux";
// // import reducer from "./ReduxDataFetch/Reducer";

// import store from "./FreeCodeCamp/src/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
// serviceWorker.unregister();

// const middleware = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

// const store = createStore(reducer, applyMiddleware(...middleware));

// store.dispatch(getAllProducts());

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 3
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// // import { BarInstance } from "./components/fourthApp/api";
// import App from "./components/chakra/app";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import reportWebVitals from "./reportWebVitals";
// // import App from "./components/fourthApp/App";
// // import { Clock, AnalogDisplay } from "./reactQuickly/clock/api";

// import LogRocket from "logrocket";
// LogRocket.init("rpbpxj/third_app");

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// reportWebVitals();
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
