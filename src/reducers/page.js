import {
    GET_USER_FAIL,
    GET_USER_SUCCESS
} from '../constants/Page'

let user = {}
const initialState = user;

export default function page(state = initialState, action) {

    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                user: action.user
            }
        case GET_USER_FAIL:
            return {
                error: true,
                type:action.error
            };
        default:
            return state
    }

}