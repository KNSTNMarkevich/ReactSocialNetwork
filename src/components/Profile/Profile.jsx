import React, { Component } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         updatePhoto={props.updatePhoto}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         updateProfile={props.updateProfile}
                         errorMessage={props.errorMessage}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;