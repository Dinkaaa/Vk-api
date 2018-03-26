export const CLIENT_ID = '6422039';
export const REDIRECT_URI = 'http://localhost:8080/auth';
export const API_VERSION = '5.73';

export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';

export const LOGOUT = 'USERS_LOGOUT';

export function getLoginURL() {
    let url = 'https://oauth.vk.com/authorize?';
    url += 'client_id=' + CLIENT_ID + '&';
    url += 'display=page&';
    url += 'redirect_uri=' + REDIRECT_URI + '&';
    url += 'response_type=token&';
    url += 'scope=account&';
    url += 'state=vk&';
    url += 'v=' + API_VERSION + '&';
    url += 'revoke=1';
    return url;
}
