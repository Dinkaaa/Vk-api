import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants/Login'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export default function login(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {
                loggedIn: false,
                error: action.user
            }
        case LOGOUT:
            return {
                loggedIn: false
            };
        default:
            return state
    }

}