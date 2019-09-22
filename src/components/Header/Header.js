import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src="https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300" alt={"header"}/>

			<div className={classes.loginBlock}>
				{props.isAuth
					? <div>
						{props.login}
						<button onClick={props.logoutThunkCreator}>Log Out</button>
					 </div>
					: <NavLink to={"/login"}>Log In</NavLink>}
			</div>
		</header>
	);
};

export default Header;