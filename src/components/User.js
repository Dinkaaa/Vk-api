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
        let data = this.props.user;
        return (
            <div>
                {(this.props.error) ?
                    <div className="alert alert-danger" role="alert">Ошибка загрузки данных! Попробуйте позже.</div>
                    :
                    (data !== null) ?
                        <div>
                            {<div className="card" style={{ 'width': '18rem' }}>
                                <img className="card-img-top" src={data.photo} alt="photo" />
                                <div className="card-body">
                                    <h5 className="card-title">{data.first_name} {data.last_name}</h5>
                                    <p className="card-text">{data.bdate} {data.city}</p>
                                    <button onClick={this.handleClick.bind(this)} className="btn">Выйти</button>
                                </div>
                        </div>}
                        </div> 
                        :
                        <Loading />

                }
            </div>
        )
    }
}