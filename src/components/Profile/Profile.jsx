import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     updateNewPostText = {props.updateNewPostText}
                     addPost = {props.addPost}

            />
        </div>
    );
}

export default Profile;