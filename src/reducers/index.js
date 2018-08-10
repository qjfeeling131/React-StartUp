import { combineReducers } from "redux-immutable";
import LoginReducer from "./loginReducer";
import order from "./orderReducer";

const reducers = combineReducers({ authUser:LoginReducer,order });
export default reducers;
