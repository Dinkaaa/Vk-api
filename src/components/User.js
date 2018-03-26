import React, { Component } from 'react';
import Loading from './Loading';

export default class User extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.onGetUser();
    }
    handleClick() {
        this.props.onLogout();
    }
    render() {
        let data = this.props.userInfo;
        console.log(data);
        return (
            <div>
                {(data.error) ?
                    <div className="alert alert-danger" role="alert">Ошибка загрузки данных! Попробуйте позже.</div>
                    :
                    (data.user !== undefined) ?
                        <div>
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img className="card-img-top" src={data.user.photo} alt="photo" />
                                <div className="card-body">
                                    <h5 className="card-title">{data.user.first_name} {data.user.last_name}</h5>
                                    <p className="card-text">{data.user.bdate} {data.user.city}</p>
                                    <button onClick={this.handleClick.bind(this)} className="btn">Выйти</button>
                                </div>
                            </div>
                        </div> 
                        :
                        <Loading />

                }
            </div>
        )
    }
}