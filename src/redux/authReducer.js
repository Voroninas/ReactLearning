const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false/*,
  isFetching: false*/ // looks like i need to do it myself
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }/*
    case SET_USERS: {
      return { ...state, auth: [...action.auth] }
    }*/
    default: return state
  }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export default authReducer;