
import userPic from '../../src/assets/images/user.png'

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export type initialStateType = typeof initialState

type dialogsDataType = { 
  id: number 
  name: string 
  imgSrc: string }

type messagesDataType = {
   id: number 
   message: string }

let initialState = {
  dialogsData: [
    { id: 1, name: "Таня", imgSrc: userPic },
    { id: 2, name: "Вася", imgSrc: userPic },
    { id: 3, name: "Петя", imgSrc: userPic },
    { id: 4, name: "Саня", imgSrc: userPic }
  ] as Array<dialogsDataType>,
  messagesData: [
    { id: 1, message: "Типо сообщения пользователя" },
    { id: 2, message: "Сообщение1" },
    { id: 3, message: "Сообщение2" }
  ] as Array<messagesDataType>,
  newMessageText: "текст сообщения из this._state.dialogsPage.newMessageText"  // todo: это поле лишнее, должна быть подключена библиотека для работы с формами, я пока на это забил
}

const dialogsReducer = (state = initialState, action: any) :initialStateType => {
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

type addMessageActionCreatorType = { type: typeof ADD_MESSAGE }

export const addMessageActionCreator = () :addMessageActionCreatorType => ({ type: ADD_MESSAGE })

type updateNewMessageTextActionCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    text: string
  }

export const updateNewMessageTextActionCreator = (text: string) :updateNewMessageTextActionCreatorType => (
  {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
  })

export default dialogsReducer