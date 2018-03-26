import { authToken } from '../helpers/auth-token';

export const userService = {
    login,
    logout
};

function login(user){
    
    localStorage.setItem('user', JSON.stringify(user));

    return user;
}

function logout() {
    localStorage.removeItem('user');
}