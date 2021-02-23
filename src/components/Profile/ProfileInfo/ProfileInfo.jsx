import React, {Component} from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import Post from "../MyPosts/Post/Post";


const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='https://cdn.theculturetrip.com/wp-content/uploads/2013/04/rome-e1487329583205.jpg'></img>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <span>
                {props.profile.fullName}
                </span>
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
            <div></div>
        </div>
    );
}

export default ProfileInfo;