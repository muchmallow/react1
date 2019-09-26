import React, {useState} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_image_male.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatusTC, isOwner, savePhotoTC, saveProfileTC}) => {

	const [editMode, setEditMode] = useState(false);

	if(!profile) {
		return <Preloader/>
	}

	const mainPhotoSelectedOn = (e) => {
		if (e.target.files.length) {
			savePhotoTC(e.target.files[0]);
		}
	};

	const onSubmit = (formData) => {
		saveProfileTC(formData).then(
			() => {
				setEditMode(false);
			}
		);
	};

	return (
		<div>
			<div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto}  className={classes.mainPhoto} alt={"img"}/>
				{isOwner && <input type={"file"} onChange={mainPhotoSelectedOn}/>}
				{editMode
					? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
					: <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}
				<ProfileStatusWithHooks status={status}
										updateStatusTC={updateStatusTC}/>
			</div>
		</div>
	);
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
	return (
		<div>
			{isOwner && <div>
				<button onClick={goToEditMode}>edit</button>
			</div>}
			<div>
				Full Name: {profile.fullName}
			</div>
			<div>
				Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
			</div>
			{profile.lookingForAJob &&
			<div>
				My professional skills: {profile.lookingForAJobDescription}
			</div>
			}
			<div>
				About me: {profile.aboutMe}
			</div>
			<div>
				Contacts: {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
			})}
			</div>
		</div>
	);
};

const Contact = ({contactTitle, contactValue}) => {
	return (
		<div className={classes.contact}>
			{contactTitle}: {contactValue}
		</div>
	);
};

export default ProfileInfo;