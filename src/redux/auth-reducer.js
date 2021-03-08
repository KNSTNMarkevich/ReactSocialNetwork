import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
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


const setAuthUserData = (userId, login, email ) => {
    return {type: SET_USER_DATA, data: {userId, login, email}}
}

const setAuthLogin = (email, password, userId) => {
    return {type: SET_AUTH_LOGIN, email, password, userId}
}

export const getAuthUserProfile = () => {
    return (dispatch) => {
        authAPI.getAuthUserProfile()
            .then(data => {
                if(data.resultCode === 0){
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email));
                }
            })
    }
}

export const postAuthLogin = (email,password) => {
    return (dispatch) => {
        authAPI.postAuthLogin()
            .then(data => {
                if(data.resultCode === 0){
                    let userId = data.data.userId
                    dispatch(setAuthLogin(email, password, userId));
                }
            })
    }
}

export default authReducer