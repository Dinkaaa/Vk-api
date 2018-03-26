import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants/Login';

import { Map } from 'immutable';


let user = JSON.parse(localStorage.getItem('user'));

const initialState = Map({
    loggedIn: user ? true : false,
    user: user ? user : null,
    error: null
});

export default function login(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return state.update('loggedIn', loggedIn => true).update('user', user => action.user);
        case LOGIN_FAILURE:
            return state.update('loggedIn', loggedIn => false).update('error', error => action.user);
        case LOGOUT:
            return state.update('loggedIn', loggedIn => false);
        default:
            return state
    }

}