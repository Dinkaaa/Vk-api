import { pageService } from '../services/page.service';
import { GET_USER_FAIL, GET_USER_SUCCESS } from '../constants/Page'

const getUserInfo = (id) => {
  return dispatch => {
    let user = pageService.getUserInfo(id).then(user => {
      (user.error) ? dispatch({ type: GET_USER_FAIL, user }): dispatch({ type: GET_USER_SUCCESS, user }) ;
    })

  }
}

export const pageActions = {
  getUserInfo
}