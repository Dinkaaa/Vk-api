import { authToken } from '../helpers/auth-token';

export const userService = {
    login,
    logout
};

async function login(hash) {
    let params = hash.split('&');

    if (params[0].split('=')[0] == '#error') return await { error: true };

    let user = {
        token: params[0].split('=')[1],
        user_id: params[2].split('=')[1]
    }

    localStorage.setItem('user', JSON.stringify(user));
    return await user;
}

function logout() {
    localStorage.removeItem('user');
}