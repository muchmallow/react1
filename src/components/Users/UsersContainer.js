import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			return dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			return dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			return dispatch(setUsersAC(users));
		}
	}
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;