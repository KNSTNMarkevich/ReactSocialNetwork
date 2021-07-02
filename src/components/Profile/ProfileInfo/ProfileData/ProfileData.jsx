import React, {Component} from 'react';
import style from './ProfileData.module.css'
import Contacts from "./Contacts";

const ProfileData = (props) => {

    return (
        <div>
            {props.isOwner && <button onClick={() => {props.setEditMode(true)}}>Change</button>}
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
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    );
}

export default ProfileData;