import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",{followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
               users: updateObjectInArray(state.users, action.userId, "id",{followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u;
                // })
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

export const followSucces = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSucces = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const toggleFollowingInProgress = (isFetching, userId) => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId}
}

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const data = await apiMethod(userId)

    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}


export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.unfollowUser, unfollowSucces)
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.followUser, followSucces)
}


export default usersReducer