import { createStore, applyMiddleware } from "redux";
import { Map } from "immutable";
import promiseMiddleware from "redux-promise-middleware";
import reducers from "../reducers/index";

const initialState=Map(); 


const WSStore = createStore(reducers,applyMiddleware(promiseMiddleware()),
    initialState);

export default WSStore;
