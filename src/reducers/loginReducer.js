import { Map } from "immutable";
import { handleAction, handleActions } from "redux-actions";
import {authUser} from "../actions/actionCreator"
import actionType from "../constants/actionType";

const initState = Map({
    authUser: {
        token: ''
    },
    user: {

    }
})

const actions=[]

// const loginReducer = handleActions({
//     AUTH_USER:(state,action)=>{
//         console.log(state);
//         console.log(action)
//     }
// }, initState)
const loginReducer = handleActions({
    [authUser](state,action){
        return state
    }
}, initState)

export default loginReducer;