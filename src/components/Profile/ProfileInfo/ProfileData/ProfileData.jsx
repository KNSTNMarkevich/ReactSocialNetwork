import React, {Component} from 'react';
import style from './ProfileData.module.css'
import Contacts from "./Contacts";

const ProfileData = (props) => {

    return (
        <div>
            {props.isOwner && <button onClick={props.activateEditMode}>Change</button>}
            <div>
                {props.profile.fullName}
            </div>
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>Looking for a job description:</b> {props.profile.lookingForAJobDescription}
            </div>
            <div className={style.contacts}>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contacts contactTitle={key} contactValue={props.profile[key]}/>
            })}
            </div>
        </div>
    );
}

export default ProfileData;