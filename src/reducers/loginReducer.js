import { Map } from "immutable";
import { handleAction, handleActions } from "redux-actions";
import authUser from "../actions/actionCreator"

const initState = Map({
    authUser: {
        token: ''
    },
    user: {

    }
})

const loginReducer = handleActions({
    [authUser](state, action) {
        return state;
    }
}, initState)

export default loginReducer;