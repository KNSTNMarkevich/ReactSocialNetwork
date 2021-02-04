import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state = {props.state}
                     addPost = {props.addPost}
            />
        </div>
    );
}

export default Profile;