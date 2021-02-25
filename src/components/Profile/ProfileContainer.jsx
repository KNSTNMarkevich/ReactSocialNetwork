import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {SetUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {setAuthUserData} from "../../redux/auth-reducer";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = 2;
            }
        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.SetUserProfile(data);
            })


    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let MapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateToProps, {SetUserProfile, setAuthUserData})(WithUrlDataContainerComponent);