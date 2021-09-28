import { createStore, combineReducers, applyMiddleware } from "redux"
import dialogsReducer from "./dialogsReducer.js"
import profileReducer from "./profileReducer.js"
import friendsReducer from "./friendsReducer.js"
import usersReducer from "./usersReducer.js"
import authReducer from "./authReducer.js"
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