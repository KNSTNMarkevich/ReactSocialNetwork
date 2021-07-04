import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import style from "../../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
    debugger;
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name="email"
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name="password" type="password"
                       validate={[required]}/>
            </div>
            <div>
                <Field component="input" type="checkbox" name="rememberMe"/> remember me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && <Field component={Input} name="captcha" validate={[required]}/>}
            {
                props.error &&
            <div className={style.loginError}>
                {props.error}
            </div>
            }
            <div>
                <button type="submit">LOGIN</button>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)