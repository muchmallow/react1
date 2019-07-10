import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
	return(
		<div className={classes.item}>
			<img src="https://amp.businessinsider.com/images/5cc300804a16757b2777a049-750-421.jpg" alt=""/>
			{props.message}
			<div>
				<span>Like </span>{props.likeCount}
			</div>
		</div>
	);
};

export default Post;