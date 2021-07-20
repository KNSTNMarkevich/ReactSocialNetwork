import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";
import {UserType} from "../types/types";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'


export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number> //Array of user ids
}

let initialState : InitialStateType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action : any) : InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
               users: updateObjectInArray(state.users, action.userId, "id",{followed: false})
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }

}
type followSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSucces = (userId : number) : followSuccessType => {
    return {
        type: FOLLOW,
        userId
    }
}

export type unfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSucces = (userId : number) : unfollowSuccessType => {
    return {type: UNFOLLOW, userId}
}

export type setUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users : Array<UserType>) : setUsersType => {
    return {type: SET_USERS, users}
}

export type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage : number) : setCurrentPageType => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export type setTotalUsersCount = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount : number) : setTotalUsersCount => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}

export type toggleIsFetching = {
    type: typeof  TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching : boolean) : toggleIsFetching => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export type toggleFollowingInProgressType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingInProgress = (isFetching : boolean, userId : number) : toggleFollowingInProgressType => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId}
}

export const requestUsers = (currentPage : number, pageSize : number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const followUnfollowFlow = async (dispatch : any, userId : number, apiMethod : any, actionCreator : any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const data = await apiMethod(userId)

    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}


export const unfollow = (userId : number) => async (dispatch : any) => {
    followUnfollowFlow(dispatch, userId, followAPI.unfollowUser, unfollowSucces)
}

export const follow = (userId : number) => async (dispatch : any) => {
    followUnfollowFlow(dispatch, userId, followAPI.followUser, followSucces)
}


export default usersReducer