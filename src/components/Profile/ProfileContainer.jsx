import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getMainProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import withAuthRedirect from "../hok/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = 2;
            }
        this.props.getMainProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let MapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId,
});

export default compose(
    connect(MapStateToProps, {getMainProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
