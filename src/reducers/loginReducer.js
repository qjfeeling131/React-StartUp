import { Map } from "immutable";
import { handleAction, handleActions } from "redux-actions";
import { authUser } from "../actions/actionCreator";
import actionType from "../constants/actionType";

const initState = {
  authUser: {
    token: ""
  },
  user: {}
};

const LoginReducer = function(state = initState, action) {
  switch (action.type) {
    case actionType.AUTH_USER:
      return state;
    case actionType.LOGIN:
      return state;
    default:
      return state;
  }
};
// const actions=[]
// const loginReducer = handleActions({
//     [authUser](state,action){
//         return state
//     }
// }, initState)

export default LoginReducer;
