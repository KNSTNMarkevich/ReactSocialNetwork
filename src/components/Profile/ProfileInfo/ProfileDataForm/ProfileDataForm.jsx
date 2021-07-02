import React, {Component} from 'react';
import Contacts from "../ProfileData/Contacts";
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import style from "../../../common/FormsControls/FormsControls.module.css"


const ProfileDataForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <button type="submit">save</button>
                {
                    props.error &&
                    <div className={style.loginError}>
                        {props.error}
                    </div>
                }
                <div>
                    <Field component={Input} name="fullName"
                           validate={[required]} />
                    {props.profile.fullName}
                </div>
                <div>
                    <b>About me:</b> <Field component={Input} name="aboutMe"
                                            validate={[required]}/>
                </div>
                <div>
                    <b>Looking for a job:</b> <Field component={Checkbox} name="lookingForAJob"/>
                </div>
                <div>
                    <b>Looking for a job description:</b> <Field component={Textarea} name="lookingForAJobDescription"
                                                                 validate={[required]}/>
                </div>
                <div className={style.contacts}>
                    <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                    return <div>
                        {key} <Field component={Input} name={"contacts." + key}/>
                    </div>
                })}
                </div>
            </form>
        </div>

    );
}
/*

<div className={style.contacts}>
    <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
    return <Contacts contactTitle={key} contactValue={props.profile[key]}/>
})}
</div>
*/

export const ProfileDataReduxForm = reduxForm({
    form: 'profileUpdateForm'
})(ProfileDataForm)