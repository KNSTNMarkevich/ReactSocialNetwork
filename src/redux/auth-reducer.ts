import {authAPI, CaptchaAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

    export type AuthDataType = {
        userId: number | null
        login:string | null
        email:string | null
        isAuth:boolean
    }
    let initialState = {
        userId: null as number | null,
        login: null as string | null,
        email: null as string | null,
        password: null as string | null,
        isAuth: false as boolean,
        captchaUrl: null as string | null
    }

    export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type setAuthUserDataType = {
    type: typeof SET_USER_DATA
    data: AuthDataType
}

const setAuthUserData = (userId: number | null, login:string | null, email:string | null, isAuth:boolean) : setAuthUserDataType => {
    return {type: SET_USER_DATA, data: {userId, login, email, isAuth}}
}

type setCaptchaUrlSuccessType = {
    type: typeof  GET_CAPTCHA_URL_SUCCESS
    data: { captchaUrl: string }
}

const setCaptchaUrlSuccess = (captchaUrl: string) : setCaptchaUrlSuccessType => {
    return {type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}}
}

export const getAuthUserProfile = () => async (dispatch: any) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await CaptchaAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrlSuccess(captchaUrl));
}

export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer