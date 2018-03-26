import { userService } from '../services/user.servise';
import { LOGIN_SUCCESS ,LOGIN_FAILURE, LOGOUT } from '../constants/Login'



const login = (hash) => {

  return dispatch => {

    let user = userService.login(hash).then(user => {
      (user.error) ? dispatch({ type: LOGIN_FAILURE, user }): dispatch({ type: LOGIN_SUCCESS, user }) ;
    });
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