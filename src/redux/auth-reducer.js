import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_LOGIN = 'SET_AUTH_LOGIN';


let initialState = {
    userId: null,
    login: null,
    email: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_AUTH_LOGIN:
            return {
                ...state,
                login: action.login,
                password: action.password,
                userId: action.userId
            }
        default:
            return state;
    }
}


const setAuthUserData = (userId, login, email, isAuth) => {
    return {type: SET_USER_DATA, data: {userId, login, email, isAuth}}
}


export const getAuthUserProfile = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true));
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserProfile())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some Error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer