import { Map, fromJS } from "immutable";
import { handleAction, handleActions } from "redux-actions";
import { authUser } from "../actions/actionCreator";
import actionType from "../constants/actionType";

const initState = fromJS({
  authUser: {
    token: "test",
    accountName: '',
    password: ''
  },
  user: {}
});

const LoginReducer = function (state = initState, action) {
  switch (action.type) {
    case actionType.AUTH_USER:
      return state.updateIn(['authUser'], item =>
        item.set('accountName', action.payload.accountName)
          .set('password', action.payload.password));
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
