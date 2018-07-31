import { createStore } from "redux";

import reducers from "../reducers/index";

const WSStore = createStore(reducers);

export default WSStore;
