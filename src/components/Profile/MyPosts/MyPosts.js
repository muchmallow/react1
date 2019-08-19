import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
	return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"addPost"} onChange={props.onPostChange} cols="50" rows="5" value={props.newPostText}/>
            </div>
            <button onClick={props.addPost}>Add post
            </button>
		</form>
	);
};

const AddPostReduxForm = reduxForm({
    // a unique name for the form
    form: "addPost"
})(AddPostForm);

const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

	let addPost = () => {
		props.addPost();
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);
	};

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} cols="50" rows="5" value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post
                </button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;