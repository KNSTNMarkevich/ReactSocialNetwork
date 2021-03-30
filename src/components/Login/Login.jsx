import React from "react";
import style from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

const Login = (props) => {
    const onSubmit = values => {
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
                <Field component={Input} name="login"
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name="password"
                       validate={[required]}/>
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