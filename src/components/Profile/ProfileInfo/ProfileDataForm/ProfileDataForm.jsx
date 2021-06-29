import React, {Component} from 'react';
import style from "../ProfileData/ProfileData.module.css";
import Contacts from "../ProfileData/Contacts";
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";


const ProfileDataForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <button onClick={props.diactivateEditMode}>save</button>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    <b>About me:</b> <Field component={Input} name="aboutMe"
                                            validate={[required]}/>
                </div>
                <div>
                    <b>Looking for a job:</b> <Field component={Checkbox} name="lookingForAJob"
                                                     validate={[required]}/>
                </div>
                <div>
                    <b>Looking for a job description:</b> <Field component={Textarea} name="lookingForAJobDescription"
                                                                 validate={[required]}/>
                </div>
                <div className={style.contacts}>
                    <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts contactTitle={key} contactValue={props.profile[key]}/>
                })}
                </div>
            </form>
        </div>

    );
}


export const ProfileDataReduxForm = reduxForm({
    form: 'login'
})(ProfileDataForm)