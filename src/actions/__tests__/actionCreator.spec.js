import { authUser } from "../actionCreator";
import actionType from "../../constants/actionType";

describe('action creator', () => {

    it('should call the authUser', () => {
        let expectResult = {
            type: actionType.AUTH_USER,
            payload: { accountName: 'test' }
        }
        let result = authUser({ accountName: 'test' });
        expect(result).toEqual(expectResult)
    })
})