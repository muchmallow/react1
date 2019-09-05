import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user_image_male.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollowThunkCreator, followThunkCreator}) => {
    return (
        <div>
			    <span>
					<div>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={classes.userPhoto} alt={"userPhoto"}/>
                        </NavLink>
					</div>
					    <div>
							{user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollowThunkCreator(user.id);
                                          }}>
                                    Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              followThunkCreator(user.id);
                                          }}>
                                    Follow</button>}
						</div>
				</span>
            <span>
					<span>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</span>
					<span>
						<div>{"user.location.city"}</div>
						<div>{"user.location.country"}</div>
					</span>
				</span>
        </div>
    );
};

export default User;