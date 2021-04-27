import { createStore } from "redux";
import MobileReducer from "./reducer";

const store = createStore(MobileReducer);

export default store;