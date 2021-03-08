import React from "react";
import style from './Login.module.css'
import { Field, reduxForm } from 'redux-form'

const Login = (props) => {
    const onSubmit = values => {
        // print the form values to the console
        console.log(values)
    }
    return (
        <div>
        <div className={style.login}>LOGIN</div>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="login"/>
            </div>
            <div>
                <Field component="input" name="password"/>
            </div>
            <div>
                <Field component="input" type="checkbox" name="rememberMe"/> remember me
            </div>
            <div>
                <button type="submit">LOGIN</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


export default Login;