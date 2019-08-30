import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
	posts: [
		{id: 1, message: "Hi, how are you?", likeCount: 16},
		{id: 2, message: "It's my first post", likeCount: 20}
	],
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {

	switch(action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: action.newPostText,
				likeCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost]
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			}
		}
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => {
	return {
		type: ADD_POST,
        newPostText
	};
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status: status
    };
};

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId: postId
    };
};

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
};

export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};

export default profileReducer;