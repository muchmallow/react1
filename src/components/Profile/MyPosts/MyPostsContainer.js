import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../storeContext";

const MyPostsContainer = (props) => {

	return (<storeContext.Consumer>
			{(store) => {

				let state = store.getState();

				let onAddPost = () => {
					store.dispatch(addPostActionCreator());
				};

				let onPostChange = (text) => {
					store.dispatch(updateNewPostTextActionCreator(text));
				};

				return (
					<MyPosts updateNewPostText={onPostChange} addPost={onAddPost}
					         posts={state.profilePage.posts}
					         newPostText={state.profilePage.newPostText}/>
				);
			}
			}
		</storeContext.Consumer>
	);
};

export default MyPostsContainer;