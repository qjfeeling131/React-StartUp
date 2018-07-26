import loginReducer from "../loginReducer";
import { authUser } from "../../actions/actionCreator";
import actionType from "../../constants/actionType";
import { Map } from "immutable";

describe('login reducer', () => {

    it('should be made the handleActions worked', () => {
        console.log(loginReducer(undefined, {}))
        let expectResult = Map({
            authUser: {
                token: ''
            },
            user: {

            }
        });
        expect(loginReducer(undefined,{})).toEqual(expectResult);
    })
})