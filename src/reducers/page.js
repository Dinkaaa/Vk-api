import {
    GET_USER_FAIL,
    GET_USER_SUCCESS
} from '../constants/Page'

import { Map } from 'immutable';

const initialState = Map({
    user: null,
    error: false
});

export default function page(state = initialState, action) {

    switch (action.type) {
        case GET_USER_SUCCESS:
            return state.update('user', user => action.user);

        case GET_USER_FAIL:
            return state.update('error', error => true);
        default:
            return state
    }

}