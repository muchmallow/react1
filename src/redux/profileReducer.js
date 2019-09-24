import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccess = (photos) => {
	return {
		type: SAVE_PHOTO_SUCCESS,
		photos
	}
};

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setUserStatus(response.data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if(response.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
};

export const savePhotoTC = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);
	if(response.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};

export default profileReducer;