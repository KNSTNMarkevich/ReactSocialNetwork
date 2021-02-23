import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {SetUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(MapStateToProps, {SetUserProfile})(ProfileContainer);