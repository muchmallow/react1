import React, {PureComponent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

class MyPosts extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state;
    // }

    render() {
        let postsElements = this.props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        };

        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }
}

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post message"}
                       validate={[required, maxLength10]} />
            </div>
            <button>Add post</button>
        </form>
    );
};

const AddNewPostReduxForm = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm);

export default MyPosts;