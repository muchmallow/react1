import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo savePhotoTC={props.savePhotoTC} isOwner={props.isOwner}
						 profile={props.profile} status={props.status}
						 updateStatusThunkCreator={props.updateStatusThunkCreator}/>
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;