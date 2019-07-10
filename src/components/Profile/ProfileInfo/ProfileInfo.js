import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg" alt=""/>
			</div>
			<div className={classes.descriptionBlock}>
				ava + description
			</div>
		</div>
	);
};

export default ProfileInfo;