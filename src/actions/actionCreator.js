import {Map,fromJS} from 'immutable';
import {createTypes} from 'redux-action-creator';

const actionCreator={

    login(authUser){
        return {
            type:"",
            payload:{authUser}
        }
    }
}