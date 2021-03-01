import React, {Component} from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
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
            <div className={style.profileContainer}>
                <div className={style.avatar}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div className={style.descriptionBlock}>
                    <div >
                        {props.profile.fullName}
                    </div>
                    <ProfileStatus status = {'My status'}/>
                    {/*<ProfileStatus status = {props.profile.aboutMe}/>*/}
                    {/*<div>*/}
                    {/*    {props.profile.aboutMe}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;