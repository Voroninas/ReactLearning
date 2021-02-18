const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
	users: [/*
		{ id: 1, photoUrl: 'https://kto-chto-gde.ru/wp-content/uploads/2016/09/1423402942.jpg', 
				followed: true, fullName: 'Sam', status: 'some status', location: { city: 'Moscow', country: 'Russia' } },
		{ id: 2, photoUrl: 'https://www.zbrushcentral.com/uploads/default/original/4X/5/5/b/55b398dd2b0824ca07415adaac899bad13c5d739.jpeg', 
				followed: false, fullName: 'Bob', status: 'some new status', location: { city: 'Minsk', country: 'Russia' } },
		{ id: 3, photoUrl: 'https://awkward.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-06-at-2.53.55-PM.jpg', 
				followed: true, fullName: 'Tom', status: 'some another status', location: { city: 'Stalinsk', country: 'Russia' } }*/
	]
}
// interesting 'callbackfn' is so necessary to write? 
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		}
		case UNFOLLOW: {
			return {
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}
		}
		case SET_USERS: {
			return { ...state, users: [...state.users, ...action.users] }
		}
		default: return state
	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;