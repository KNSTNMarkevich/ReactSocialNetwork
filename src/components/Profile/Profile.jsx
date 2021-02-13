import React, { Component } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store = {props.store}
            />
        </div>
    );
}

export default Profile;