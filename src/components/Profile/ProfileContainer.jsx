import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {SetUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.SetUserProfile(response.data);
            })

    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
         );
    }
}

let MapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(MapStateToProps, {SetUserProfile})(WithUrlDataContainerComponent);