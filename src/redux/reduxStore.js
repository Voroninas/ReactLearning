import { createStore, combineReducers } from "redux"
import dialogsReducer from "./dialogsReducer.js"
import profileReducer from "./profileReducer.js"
import friendsReducer from "./friendsReducer.js"
import usersReducer from "./usersReducer.js"

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profileData: profileReducer,
	friends: friendsReducer,
	usersPage: usersReducer
})
let store = createStore(reducers)

window.store = store

export default store