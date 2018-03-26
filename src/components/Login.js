import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI, API_VERSION, getLoginURL } from '../constants/Login'


class Login extends Component {

    render() {
        return (

            <div className="login">
                <a className="btn" 
                    href={getLoginURL()}>Войти через VK</a>
            </div>
        )
    }
}

export default Login;


