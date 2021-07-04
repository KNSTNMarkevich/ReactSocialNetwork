import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setErrorMessage} from "./app-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 15},
        {id: 2, message: 'React Education', likesCount: 20},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
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
        case UPDATE_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}

export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
}

export const SetUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const SetUserStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const UpdateUserProfile = (profile) => {
    return {type: SET_STATUS, profile}
}

export const SetUserPhoto = (photos) => {
    debugger;
    return {type: SET_PHOTO, photos}
}

export const getMainProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId)
    dispatch(SetUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(SetUserStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(SetUserStatus(status))
            dispatch(setErrorMessage(null))
        } else if (data.resultCode === 1) {
            const message = data.messages[0]
            dispatch(setErrorMessage(message))
        }
    } catch (error){
        dispatch(setErrorMessage(error.message))
    }

}

export const updateUserPhoto = (file) => async (dispatch) => {
    const data = await profileAPI.updatePhoto(file)
    if (data.resultCode === 0) {
        dispatch(SetUserPhoto(data.data.photos))
    }
}


export const updateUserProfile = (profile) => async (dispatch, getState) => {
    debugger;
    const userId = getState().auth.userId
    const data = await profileAPI.updateProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getMainProfile(userId))
    } else {
        debugger;
        dispatch(stopSubmit("profileUpdateForm", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0]);
    }
}


export default profileReducer