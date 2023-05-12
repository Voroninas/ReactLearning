import { createStore, combineReducers, applyMiddleware } from "redux"
import dialogsReducer from "./dialogsReducer.ts"
import profileReducer from "./profileReducer.ts"
import friendsReducer from "./friendsReducer.js"
import usersReducer from "./usersReducer.ts"
import authReducer from "./authReducer.ts"
import thunkMiddleware from 'redux-thunk' // wrote "thunkMiddleware" instead "thunk"

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profileData: profileReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store