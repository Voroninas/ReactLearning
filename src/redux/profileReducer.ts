
import userPic from '../../src/assets/images/user.png'
import { usersAPI, profileAPI } from '../api/api.js'
import { postDataType, profileType } from '../types/types'

const ADD_POST = "ADD-POST"
const DELETE_POST = "DELETE_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
  /*textDescripBlock: "ava and description",
  imgSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',*/
  postData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 0, imgSrc: userPic },
    { id: 2, message: "Now the posts data in array and obj", likesCount: 23, imgSrc: userPic },
    { id: 3, message: "Посты не захардкожены в вёрстке", likesCount: 999, imgSrc: userPic }
  ] as Array<postDataType>,
  newPostText: 'текст из this._state.profileData.newPostText',
  profile: null as null | profileType,
  status: ""
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action :any) :initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        // id: state.postData.length + 1,
        id: 111,
        message: action.newText,
        likesCount: 0,
        imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'
      }
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }case DELETE_POST: {
      return {
        ...state,
        postData: state.postData.filter(post => post.id != action.postId)
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default: return state
  }
}

type addPostActionCreatorActionType = { 
  type: typeof ADD_POST 
  newText: string }

export const addPostActionCreator = (text :string) :addPostActionCreatorActionType => ({ type: ADD_POST, newText: text })

type setUserProfileActionType = { 
  type: typeof SET_USER_PROFILE
  profile: profileType }
export const setUserProfile = (profile :profileType) :setUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type setStatusActionType = { 
  type: typeof SET_STATUS
  status: string }
export const setStatus = (status :string) :setStatusActionType => ({ type: SET_STATUS, status })

type deletePostActionType = { 
  type: typeof DELETE_POST
  postId: number }
export const deletePost = (postId :number) :deletePostActionType => ({ type: DELETE_POST, postId })

type updateNewPostTextActionCreatorActionType = { 
  type: typeof UPDATE_NEW_POST_TEXT
  newText: string }
export const updateNewPostTextActionCreator = (text :string) :updateNewPostTextActionCreatorActionType => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

// т к это thunkCreator, то пока в обучении это пропускается, но у меня это вызывает ошибку, response в принципе я могу типизировать по докам, но пока не буду бежать вперёд, подождём
export const getUserProfile = (userId :number) => (dispatch :any) => {
  usersAPI.getProfile(userId).then(response => {
    /*console.log("getUserProfile response", response)*/
    /*this.props.toggleIsFetching(true)*/
    dispatch(setUserProfile(response.data))
    /*this.props.toggleIsFetching(false)*/
  })
}

export const getStatus = (userId :number) => (dispatch :any) => {
  profileAPI.getStatus(userId).then(response => {
    /*console.log("getStatus response", response)*/
    dispatch(setStatus(response.data))
  })
}

/*export const updateStatus = (status :string) => async (dispatch :any) => {
  const response = await profileAPI.updateStatus(status)*/
export const updateStatus = (status :string) => (dispatch :any) => {
  profileAPI.updateStatus(status).then(response => { // надо глянуть что за структура придёт
    /*console.log("updateStatus response", response)*/
    if (response.data.resultCode === 0){
      dispatch(setStatus(response.data.data))
      /*dispatch(setStatus(response.statusText))*/
    }    
  })
}

export default profileReducer