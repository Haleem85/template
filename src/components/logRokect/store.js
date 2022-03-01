import { applyMiddleware, createStore } from "redux";
import reducers from "./reducer";
import LogRocket from "logrocket";

const store = createStore(
  reducers,
  // RocketLog middleware should go last
  applyMiddleware(
    /*middlewares,*/
    LogRocket.reduxMiddleware()
  )
);

export default store;
