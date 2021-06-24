import React, {Component} from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import defaultAvatar from "../../../assets/images/images.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://cdn.theculturetrip.com/wp-content/uploads/2013/04/rome-e1487329583205.jpg'></img>*/}
            {/*</div>*/}
            <div>
            <div className={style.profileContainer}>
                <div className={style.avatar}>
                    <img src={props.profile.photos.large || defaultAvatar}/>
                </div>
                <div className={style.descriptionBlock}>
                    <div>
                        {props.profile.fullName}
                    </div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
                <div className={style.aboutBlock}>
                    {props.profile.aboutMe}
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;