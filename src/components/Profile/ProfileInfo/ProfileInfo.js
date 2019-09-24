import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_image_male.png";

const ProfileInfo = ({profile, status, updateStatusThunkCreator, isOwner, savePhotoTC}) => {
	if(!profile) {
		return <Preloader/>
	}

	const mainPhotoSelectedOn = (e) => {
		if (e.target.files.length) {
			savePhotoTC(e.target.files[0]);
		}
	};

	return (
		<div>
			<div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto}  className={classes.mainPhoto} alt={"img"}/>
				{isOwner && <input type={"file"} onChange={mainPhotoSelectedOn}/>}
				<ProfileStatusWithHooks status={status}
							   updateStatusThunkCreator={updateStatusThunkCreator}/>
			</div>
		</div>
	);
};

export default ProfileInfo;