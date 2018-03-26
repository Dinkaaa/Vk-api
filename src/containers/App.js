import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Login from '../components/Login';
import Authorization from '../components/Authorization';
import { userActions } from '../actions/userActions';
import { pageActions } from '../actions/pageActions';


const PrivateRoute = ({ component: Component, isLogin, onLogout, onGetUser, userInfo, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLogin === true
      ? <Component {...props} onLogout={onLogout} onGetUser={onGetUser} userInfo={userInfo} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

class App extends Component {
  render() {
    return (
      <div className='wrapp'>
        <header className="">
          <span>VK API</span>
        </header>
        <BrowserRouter >
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/auth' >
              <Authorization onLogin={this.props.onLogin}
                isLogin={this.props.user} />
            </Route>
            <PrivateRoute exact path='/'
              component={User}
              isLogin={this.props.user.loggedIn}
              onLogout={this.props.onLogout}
              onGetUser={this.props.onGetUserInfo}
              userInfo={this.props.page}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.login,
    page: state.page
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  const { user, page } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    user: user,
    page: page,
    onLogin: (user) => {
      dispatch(userActions.login(user));
    },
    onLogout: () => {
      dispatch(userActions.logout());
    },
    onGetUserInfo: () => {
      dispatch(pageActions.getUserInfo(user.user.user_id))
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(App);