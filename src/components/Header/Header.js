import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src="https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300" alt=""/>
		</header>
	);
};

export default Header;