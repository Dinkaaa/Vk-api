import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//import { userActions } from '../actions/userActions';

class Authorization extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let params = window.location.href.split('&');
        let user = {
            token: params[0].split('=')[1],
            user_id: params[2].split('=')[1]
        }
        this.props.onLogin(user);
    }

    render() {
        return (
            <div>
                Authorization...
                {this.props.isLogin ? <Redirect to='/' /> : null}
            </div>
        )
    }
}

export default Authorization;


