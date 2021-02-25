import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuthUserProfile()
            .then(data => {
                if(data.resultCode === 0){
                    let {id, login, email} = data.data
                    this.props.setAuthUserData(id, login, email);
                }
            })

    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let MapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer);