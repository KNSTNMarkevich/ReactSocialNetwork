import {authAPI, CaptchaAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    userId: null,
    login: null,
    email: null,
    password: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}


const setAuthUserData = (userId, login, email, isAuth) => {
    return {type: SET_USER_DATA, data: {userId, login, email, isAuth}}
}


const setCaptchaUrlSuccess = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}}
}



export const getAuthUserProfile = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await CaptchaAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrlSuccess(captchaUrl));
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserProfile())
    } else {
        if(data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
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