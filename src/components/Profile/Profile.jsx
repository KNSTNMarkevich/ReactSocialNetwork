import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'


const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://cdn.theculturetrip.com/wp-content/uploads/2013/04/rome-e1487329583205.jpg'></img>
            </div>
            <div>
                avarar+descr
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;