import loginReducer from "../loginReducer";
import { authUser } from "../../actions/actionCreator";
import actionType from "../../constants/actionType";
import { Map } from "immutable";

describe('login reducer', () => {

    //TODO: It used the handleActions, and will be optimized in next sprint.
    // it('should be made the handleActions worked', () => {
    //     console.log(loginReducer(undefined, {}))
    //     let expectResult = Map({
    //         authUser: {
    //             token: ''
    //         },
    //         user: {

    //         }
    //     });
    //     expect(loginReducer(undefined,{})).toEqual(expectResult);
    // })
    it('should be worked well', () => {
        let expectResult = Map({
            authUser: {
                token: ''
            },
            user: {

            }
        });
        let action = {
            type: actionType.AUTH_USER,
            payload: []
        }
        expect(loginReducer(expectResult, action)).toEqual(expectResult);
    })
})