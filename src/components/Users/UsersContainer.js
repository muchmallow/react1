import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersInnerComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    };

    // props.setUsers([
    // 	{
    // 		id: 1,
    // 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
    // 		followed: true,
    // 		fullName: "Yuriy",
    // 		status: "Im a boss",
    // 		location: {city: "Kharkov", country: "Ukraine"}
    // 	},
    // 	{
    // 		id: 2,
    // 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
    // 		followed: false,
    // 		fullName: "Vladislav",
    // 		status: "Lel",
    // 		location: {city: "Kiev", country: "Ukraine"}},
    // 	{
    // 		id: 3,
    // 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
    // 		followed: true,
    // 		fullName: "Veronika",
    // 		status: "Kek",
    // 		location: {city: "Kiev", country: "Ukraine"}},
    // 	{
    // 		id: 4,
    // 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
    // 		followed: false,
    // 		fullName: "Dmitriy",
    // 		status: "Zaebisya pahnet pisya",
    // 		location: {city: "Kiev", country: "Ukraine"}
    // 	},
    // 	{
    // 		id: 5,
    // 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
    // 		followed: true,
    // 		fullName: "Svetlana",
    // 		status: "A na to ona i pisya wobu pahla zaebisya",
    // 		location: {city: "Kiev", country: "Ukraine"}
    // 	},
    // 	{
    // 		id: 6,
    // 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
    // 		followed: false,
    // 		fullName: "Court",
    // 		status: "Im a boss",
    // 		location: {city: "Washington", country: "USA"}
    // 	},
    // 	{
    // 		id: 7,
    // 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
    // 		followed: true,
    // 		fullName: "Carley",
    // 		status: "Zdarova ebat",
    // 		location: {city: "Massachusetts", country: "USA"}
    // 	}
    // ])

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>;
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            return dispatch(toggleIsFetchingAC(isFetching));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersInnerComponent);

export default UsersContainer;