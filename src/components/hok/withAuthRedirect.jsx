import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
let withAuthRedirect = (Component) => {

    let MapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    });

    class withAuthRedirectContainer extends React.Component {

        render(){
            if (!this.props.isAuth) return <Redirect to={"/login"} />;
            return  <Component {...this.props} />
        }

    }


    return connect(MapStateToProps)(withAuthRedirectContainer)

}

export default withAuthRedirect