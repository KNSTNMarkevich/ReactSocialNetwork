import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getMainProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = 2;
            }
        this.props.getMainProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />;
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let MapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId,
    isAuth: state.auth.isAuth
});



let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateToProps, {getMainProfile})(WithUrlDataContainerComponent);