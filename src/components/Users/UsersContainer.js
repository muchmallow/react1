import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersInnerContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             return dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             return dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             return dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             return dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             return dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             return dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// };

export default compose(
    connect(mapStateToProps, {followThunkCreator, unfollowThunkCreator, setCurrentPage, getUsers: getUsersThunkCreator
    })
)(UsersInnerContainer);