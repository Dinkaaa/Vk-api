import { combineReducers } from 'redux-immutable';
import login from './login';
import page from './page'

export default combineReducers({
  login,
  page
})
