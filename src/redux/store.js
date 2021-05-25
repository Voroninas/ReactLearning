import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import friendsReducer from "./friendsReducer"

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Таня", imgSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' },
        { id: 2, name: "Вася", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
        { id: 3, name: "Петя", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
        { id: 4, name: "Саня", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' }
      ],
      messagesData: [
        { id: 1, message: "Типо сообщения пользователя" },
        { id: 2, message: "Сообщение1" },
        { id: 3, message: "Сообщение2" }
      ],
      newMessageText: "текст из this._state.dialogsPage.newMessageText"
    },
    profileData: {
      textDescripBlock: "ava and description",
      imgSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
      postData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 0, imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
        { id: 2, message: "Now the posts data in array and obj", likesCount: 23, imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
        { id: 3, message: "Посты не захардкожены в вёрстке", likesCount: 999, imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' }
      ],
      newPostText: 'текст из this._state.profileData.newPostText'
    },
    friends: [
      { id: 1, name: "Бляблавич", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
      { id: 2, name: "Василийсилиса", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
      { id: 3, name: "Петянский", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
      { id: 4, name: "Саня", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
      { id: 5, name: "Бляблавич", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
      { id: 6, name: "Василийсилиса", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
      { id: 7, name: "Петянский", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
      { id: 8, name: "Саня", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
      { id: 9, name: "Саня", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' }
    ]
  },
  _callSubscriber() { },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.profileData = profileReducer(this._state.profileData, action)
    this._state.friends = friendsReducer(this._state.friends, action)

    this._callSubscriber(this._state)
  }
}

export default store;

window.store = store