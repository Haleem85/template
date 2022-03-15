import { createStore } from "redux";
import rotateReducer from "./rotateReducer";

const  configureStore = (state = { rotating: true })=> {
 return createStore(rotateReducer,state);
};

 export default configureStore;
