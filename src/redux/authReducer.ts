
import { authAPI } from '../api/api.js'

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type initialStateType = typeof initialState

type dataDataType = {
      id: number
      email: string
      login: string
    }

type respondDataType = {
    resultCode: number
    messages: Array<string>
    data: dataDataType
}

let initialState = {
  userId: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false as false | boolean,
  isFetching: false as false | boolean
  //captchaUrl: null as string | null  // я не стал делать этот функционал
}

const authReducer = (state = initialState, action: any) :initialStateType => {
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
// type: typeof TOGGLE_IS_FETCHING задаст полю type одно возможное значение: конкретное значение строки записанное в переменную, а именно 'TOGGLE_IS_FETCHING'
export const toggleIsFetching = (isFetching: boolean) => ({ type: typeof TOGGLE_IS_FETCHING, isFetching })


type setAuthUserDataDataType = { 
  userId: number | null
  email: string | null
  login: string | null
}

type SetAuthUserDataActionType = { 
  type: typeof SET_USER_DATA 
  data: setAuthUserDataDataType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) :SetAuthUserDataActionType => ({ 
  type: SET_USER_DATA, 
  data: { userId, email, login } })

export const getAuthUserData = () => (dispatch: any) => {
  dispatch(toggleIsFetching(true))
  authAPI.me().then((data: respondDataType) => {
    dispatch(toggleIsFetching(false))
    if (data.resultCode === 0) {
      let { id, email, login } = data.data 
      /*let id : number = data.data.id
      let email : string = data.data.email
      let login : string = data.data.login*/
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