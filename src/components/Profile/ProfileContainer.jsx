import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getMainProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import withAuthRedirect from "../hok/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.authorizedUserId;
            }
        this.props.getMainProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateUserStatus}
            />
        );
    }
}

let MapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    status: state.profilePage.status
});

export default compose(
    connect(MapStateToProps, {getMainProfile,getUserStatus, updateUserStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)
