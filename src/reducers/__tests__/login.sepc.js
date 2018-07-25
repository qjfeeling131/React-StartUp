import loginReducer from "../loginReducer";
import { authUser } from "../../actions/actionCreator";

describe('login reducer', () => {

    it('should be made the handleActions worked', () => {
        console.log(loginReducer('', {}))
        let expectResult = {
            authUser: {
                token: ''
            },
            user: {

            }
        }
        expect(loginReducer()).toEqual(expectResult);
    })
})