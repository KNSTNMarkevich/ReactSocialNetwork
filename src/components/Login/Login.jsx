import React from "react";
import style from './Login.module.css'
import {ReduxLoginForm} from "./LoginForm/LoginForm";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    debugger;
    const onSubmit = values => {
        props.login(values.email, values.password, values.rememberMe, values.captcha)
    }

    if(props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <div className={style.login}>LOGIN</div>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);