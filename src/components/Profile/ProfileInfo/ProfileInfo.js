import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatusThunkCreator}) => {
	if(!profile) {
		return <Preloader/>
	}

	return (
		<div>
			{/*<div>*/}
				{/*<img src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg" alt=""/>*/}
			{/*</div>*/}
			<div className={classes.descriptionBlock}>
                <img src={profile.photos.large} alt={"img"}/>
				<ProfileStatusWithHooks status={status}
							   updateStatusThunkCreator={updateStatusThunkCreator}/>
			</div>
		</div>
	);
};

export default ProfileInfo;