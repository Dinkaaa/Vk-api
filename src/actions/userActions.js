import { userService } from '../services/user.servise';
import { LOGIN_SUCCESS , LOGOUT } from '../constants/Login'



const login = (user) => {

  return dispatch => {

    userService.login(user);
    dispatch({ type: LOGIN_SUCCESS, user });

  };
}

const logout = () => {
  userService.logout();
  return { type: LOGOUT };
}

export const userActions = {
  login,
  logout
}