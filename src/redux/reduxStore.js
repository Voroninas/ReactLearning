import {createStore, combineReducers} from "redux"
import dialogsReducer from "./dialogsReducer.js"
import profileReducer from "./profileReducer.js"
import friendsReducer from "./friendsReducer.js"

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profileData: profileReducer,
	friends: friendsReducer
})
let store = createStore(reducers)

export default store