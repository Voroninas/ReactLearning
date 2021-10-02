
import { authAPI } from '../api/api.js'

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }  
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    default: return state
  }
}

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const getAuthUserData = () => (dispatch) => {
  dispatch(toggleIsFetching(true))
  authAPI.me().then(data => {
    dispatch(toggleIsFetching(false))
    if (data.resultCode === 0) {
      let { id, email, login } = data.data
      dispatch(setAuthUserData(id, email, login))
// probably it supposed to be in another thunk: 
      /*usersAPI.getProfile(id).then(data => {
        let shet = data //don`t know for what this shit
        console.log(shet)
      })*/
    }
  })
}

export default authReducer;