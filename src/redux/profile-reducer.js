import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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

export const getMainProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(SetUserProfile(data));
            })
    }
}


export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(SetUserStatus(data));
            })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(SetUserStatus(status));
            })
    }
}


export default profileReducer