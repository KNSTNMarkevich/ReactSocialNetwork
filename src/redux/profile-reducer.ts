import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setErrorMessage} from "./app-reducer";
import {ProfileType, UserPhotosType, UserPostsType} from "../types/types";

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
    ] as Array<UserPostsType>,
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any) : InitialStateType => {
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
                } as ProfileType
            }
        }
        default:
            return state;
    }

}

export type addPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPostActionCreator = (newPostText : string): addPostActionCreatorType => {
    return {
        type: ADD_POST, newPostText
    }
}

export type deletePostType = {
    type: typeof DELETE_POST
    postId: number
}

export const deletePost = (postId : number): deletePostType => {
    return {type: DELETE_POST, postId}
}

export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const SetUserProfile = (profile: ProfileType) : SetUserProfileType => {
    return {type: SET_USER_PROFILE, profile}
}

export type SetUserStatusType = {
    type: typeof SET_STATUS
    status: string
}

export const SetUserStatus = (status: string) : SetUserStatusType => {
    return {type: SET_STATUS, status}
}

export type UpdateUserProfileType = {
    type: typeof SET_STATUS,
    profile: ProfileType
}

export const UpdateUserProfile = (profile: ProfileType) : UpdateUserProfileType => {
    return {type: SET_STATUS, profile}
}

export type SetUserPhotoType = {
    type: typeof SET_PHOTO
    photos: UserPhotosType
}

export const SetUserPhoto = (photos: UserPhotosType): SetUserPhotoType => {
    return {type: SET_PHOTO, photos}
}


export const getMainProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getUserProfile(userId)
    dispatch(SetUserProfile(data));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(SetUserStatus(data));
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
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

export const updateUserPhoto = (file: any) => async (dispatch: any) => {
    const data = await profileAPI.updatePhoto(file)
    if (data.resultCode === 0) {
        dispatch(SetUserPhoto(data.data.photos))
    }
}


export const updateUserProfile = (profile: any) => async (dispatch: any, getState: any) => {
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