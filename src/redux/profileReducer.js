import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
	posts: [
		{id: 1, message: "Hi, how are you?", likeCount: 16},
		{id: 2, message: "It's my first post", likeCount: 20}
	],
	newPostText: "lalala",
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {

	switch(action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likeCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ""
			}
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
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
		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	};
};

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
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