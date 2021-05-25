
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        //id: state.messagesData.length + 1,
        id: 111,
        message: state.newMessageText
      }
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, newMessage]
      }
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.text }
    }
    default: return state
  }
}

export const addMessageActionCreator = () =>
  ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => (
  {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
  })

export default dialogsReducer