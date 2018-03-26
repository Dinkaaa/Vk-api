import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Loading from './Loading';

class Authorization extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let params = window.location.hash;
        this.props.onLogin(params);
    }

    render() {
        console.log('props', this.props);
        return (
            <div>
                
                {(!this.props.isLogin.loggedIn) ?
                    <div>
                        {this.props.isLogin.error ? <div>
                            <div className="alert alert-danger" role="alert">
                                Ошибка доступа.<Link to="/login" className="btn">Попробуйте еще раз</Link>
                            </div>
                        </div> : <Loading />}
                    </div>
                    : <Redirect to='/' />

                }
            </div>
        )
    }
}

export default Authorization;


