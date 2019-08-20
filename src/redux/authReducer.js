import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    };
};

export const getAuthUserDataThunkCreator = () => (dispatch) => {
    authAPI.me().then(data => {
        if(data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserDataThunkCreator());
        }
    });
};

export const logoutThunkCreator = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;