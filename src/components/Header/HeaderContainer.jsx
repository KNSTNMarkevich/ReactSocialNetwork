import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserProfile, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserProfile()
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


export default connect(MapStateToProps, {getAuthUserProfile, logout})(HeaderContainer);