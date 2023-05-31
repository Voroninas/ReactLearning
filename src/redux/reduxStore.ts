import { createStore, combineReducers, applyMiddleware } from "redux"
import dialogsReducer from "./dialogsReducer.ts"
import profileReducer from "./profileReducer.ts"
import friendsReducer from "./friendsReducer.js"
import usersReducer from "./usersReducer.ts"
import authReducer from "./authReducer.ts"
import thunkMiddleware from 'redux-thunk' // wrote "thunkMiddleware" instead "thunk"

let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profileData: profileReducer,
  usersPage: usersReducer,
  friends: friendsReducer,
  auth: authReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store

export default store