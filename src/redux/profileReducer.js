
import { usersAPI } from '../api/api.js'

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
  /*textDescripBlock: "ava and description",
  imgSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',*/
  postData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 0, imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
    { id: 2, message: "Now the posts data in array and obj", likesCount: 23, imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
    { id: 3, message: "Посты не захардкожены в вёрстке", likesCount: 999, imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' }
  ],
  newPostText: 'текст из this._state.profileData.newPostText',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        // id: state.postData.length + 1,
        id: 111,
        message: state.newPostText,
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
    }
    default: return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(data => {
    /*this.props.toggleIsFetching(true)*/
    dispatch(setUserProfile(data))
    /*this.props.toggleIsFetching(false)*/
  })
}

export const pr = () => () => {

}

export default profileReducer