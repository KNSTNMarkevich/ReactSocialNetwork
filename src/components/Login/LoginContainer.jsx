import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {postAuthLogin} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {

    render() {
        return (
            <Login  {...this.props}/>
        );
    }
}

let MapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    password: state.auth.password
});

export default compose(
    connect(MapStateToProps, {postAuthLogin}),
    withRouter,
    //withAuthRedirect
)(LoginContainer)