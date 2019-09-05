import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {users.map(u => <User user={u}
                                  key={u.id}
                                  followingInProgress={props.followingInProgress}
                                  followThunkCreator={props.followThunkCreator}
                                  unfollowThunkCreator={props.unfollowThunkCreator}/>)}
        </div>
    </div>
};

export default Users;