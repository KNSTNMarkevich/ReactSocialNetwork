import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postElements = {props.postElements}/>
        </div>
    );
}

export default Profile;