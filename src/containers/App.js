import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Login from '../components/Login';
import Authorization from '../components/Authorization';
import { Map } from 'immutable';
import { userActions } from '../actions/userActions';
import { pageActions } from '../actions/pageActions';


const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLogin === true
      ? <Component {...props} {...rest}/>
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

class App extends Component {

  render() {
    const state  = this.props;
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
                isLogin={state.user.get('loggedIn')}
                error={state.user.get('error')} />
            </Route>
            <PrivateRoute exact path='/'
              component={User}
              isLogin={state.user.get('loggedIn')}
              onLogout={state.onLogout}
              onGetUser={state.onGetUserInfo}
              user={state.page.get('user')}
              error={state.page.get('error')}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.get('login'),
    page: state.get('page')
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
      dispatch(pageActions.getUserInfo(user.get('user').user_id))
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(App);