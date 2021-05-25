import React from 'react';
import Dialogs from './Dialogs'
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from './../../redux/dialogsReducer.js';
import { connect } from "react-redux"
/* 45 урок, заменили контейнерную компоненту сделанную руками
на автосгенерированную библиотекой "react-redux"
const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addMessage = () => {
          store.dispatch(addMessageActionCreator())
        }

        let newMessageChange = (text) => {
          let action = updateNewMessageTextActionCreator(text)
          store.dispatch(action)
        }
        return <Dialogs
          dialogsData={store.getState().dialogsPage.dialogsData}
          messagesData={store.getState().dialogsPage.messagesData}
          newMessageText={store.getState().dialogsPage.newMessageText}
          addMessage={addMessage}
          updateNewMessageBody={newMessageChange} />
        }
      }
      </StoreContext.Consumer>)
    }*/

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;