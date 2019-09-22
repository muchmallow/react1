import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunkCreator, getUserProfileThunkCreator, updateStatusThunkCreator} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

	render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatusThunkCreator={this.props.updateStatusThunkCreator}/>
            </div>
        );
	}
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
    withRouter
)(ProfileContainer);