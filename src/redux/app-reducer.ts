import {getAuthUserProfile} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

type InitialStateType = {
    initialized: boolean,
    errorMessage: any
}
let initialState : InitialStateType = {
    initialized: false,
    errorMessage: null
}

const appReducer = (state = initialState, action: any) : InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

type setErrorMessageActionType = {
    type: typeof SET_ERROR_MESSAGE,
    errorMessage: any
}

export const initializedSuccess = () : initializedSuccessActionType => {
    return {type: INITIALIZED_SUCCESS}
}

export const setErrorMessage = (errorMessage: any) : setErrorMessageActionType => {
    return {type: SET_ERROR_MESSAGE, errorMessage}
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserProfile())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        });
}


export default appReducer