import { combineReducers } from 'redux';
import login from './login';
import page from './page'

export default combineReducers({
  login,
  page
})
