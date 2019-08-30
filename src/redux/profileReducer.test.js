import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 16},
        {id: 2, message: "It's my first post", likeCount: 20}
    ]
};

it('length of posts should be incremented', () => {
	// 1. Preparing initial test data
	let action = addPostActionCreator("It is nice");

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
	expect(newState.posts.length).toBe(3);
});

it('message is "It is nice" ', () => {
    // 1. Preparing initial test data
    let action = addPostActionCreator("It is nice");

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[2].message).toBe("It is nice");
});

it('after deleting should be decremented', () => {
    // 1. Preparing initial test data
    let action = deletePost(1);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
});

it(`after deleting the posts length shouldn't be decremented`, () => {
    // 1. Preparing initial test data
    let action = deletePost(1000);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
});