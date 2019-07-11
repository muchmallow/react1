import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

	let avatarUrls = props.state.avatarUrls.map(u => <img src={u.url} alt="avatar"/>);

	return(
		<nav className={classes.nav}>
			<div>
				<div className={classes.item}>
					<NavLink to={"/profile"} activeClassName={classes.activeLink}>Profile</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to={"/dialogs"} activeClassName={classes.activeLink}>Messages</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to={"/users"} activeClassName={classes.activeLink}>Find Users</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to={"/news"} activeClassName={classes.activeLink}>News</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to={"/music"} activeClassName={classes.activeLink}>Music</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to={"/settings"} activeClassName={classes.activeLink}>Settings</NavLink>
				</div>
				<div className={classes.friendsWrapper}>
					Your friends
					<div className={classes.friendsAvatars}>
						{avatarUrls}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;