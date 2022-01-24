import React from 'react';
import { render } from '@testing-library/react';
import dialogsReducer,
{ addMessageActionCreator, updateNewMessageTextActionCreator } from "./dialogsReducer.js"

let state = {
  dialogsData: [
    { id: 1, name: "Таня", imgSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' },
    { id: 2, name: "Вася", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
    { id: 3, name: "Петя", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' }
  ],
  messagesData: [
    { id: 1, message: "Типо сообщения пользователя" },
    { id: 2, message: "Сообщение1" },
    { id: 3, message: "Сообщение2" }
  ],
  newMessageText: "текст из this._state.dialogsPage.newMessageText"
}

test('length of arr messagesData is increased', () => {
  let action = addMessageActionCreator("New message")
  let newState = dialogsReducer(state, action)
  expect(newState.messagesData).toHaveLength(4);
  /*expect(newState.newMessageText).toBe("");*/
  expect(newState.newMessageText).toBeFalsy();
});

test('updateNewMessageTextActionCreator change newMessageText to new_Text', () => {
  let action = updateNewMessageTextActionCreator("new_Text")
  let newState = dialogsReducer(state, action)
  expect(newState.newMessageText).toBe("new_Text");
});