
import { usersAPI } from '../api/api.js'
import { updateObjectInArray } from '../utils/objectHelper.js'
import { profilePhotosType } from 'profileReducer.ts'
import { usersType } from '../types/types.ts'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [] as Array<usersType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,  // this is big spinny thing on/off
  followingInProgress: [] as Array<number> // this is array with id of users, which data we changing right now
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      }
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    }
    default: return state
  }
}

type followSuccessActionType = { 
  type: typeof FOLLOW
  userId: number }
export const followSuccess = (userId: number) :followSuccessActionType => ({ type: FOLLOW, userId })

type unfollowSuccessActionType = { 
  type: typeof UNFOLLOW
  userId: number }
export const unfollowSuccess = (userId: number) :unfollowSuccessActionType => ({ type: UNFOLLOW, userId })

type setUsersActionType = { 
  type: typeof SET_USERS
  users: Array<usersType> }
export const setUsers = (users: Array<usersType>) :setUsersActionType => ({ type: SET_USERS, users })

type setCurrentPageActionType = { 
  type: typeof SET_CURRENT_PAGE
  currentPage: number }
export const setCurrentPage = (currentPage: number) :setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })

type setTotalUsersCountActionType = { 
  type: typeof SET_TOTAL_USERS_COUNT
  count: number }
export const setTotalUsersCount = (totalUsersCount: number) :setTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

type toggleIsFetchingActionType = { 
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean }
export const toggleIsFetching = (isFetching: boolean) :toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type toggleFollowingProgressActionType = { 
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  userId: number
  isFetching: boolean }
export const toggleFollowingProgress = (isFetching: boolean, userId: number) :toggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    /*dispatch(setCurrentPage(currentPage))*/
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}

const followUnfollowFlow = async (dispatch: any, usersId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, usersId))
  let data = await apiMethod(usersId)
  if (data.resultCode == 0) {
    dispatch(actionCreator(usersId))
  }
  dispatch(toggleFollowingProgress(false, usersId))
}

export const follow = (usersId: number) => (dispatch: any) => { followUnfollowFlow(dispatch, usersId, usersAPI.follow.bind(usersAPI), followSuccess) }

export const unfollow = (usersId: number) => (dispatch: any) => { followUnfollowFlow(dispatch, usersId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess) }

export default usersReducer;