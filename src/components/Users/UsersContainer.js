import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		},
		setCurrentPage: (pageNumber) => {
			return dispatch(setCurrentPageAC(pageNumber));
		},
		setTotalUsersCount: (totalCount) => {
			return dispatch(setTotalUsersCountAC(totalCount));
		}
	}
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;