import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from '../hoc/withAuthRedirect.jsx'
import Dialogs from './Dialogs'
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from './../../redux/dialogsReducer.js';

/*let AuthRedirectComponent = withAuthRedirect(Dialogs)*/

/*let AuthRedirectComponent = (props) => {  // it was just a example, a variation how to do redirect
  if (!props.isAuth) return <Redirect to={'/login'} />
  return <Dialogs {...props} />
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

/*const DialogsContainer = connect(
  mapStateToProps, 
  mapDispatchToProps)(AuthRedirectComponent)*/

export default compose(
  connect(mapStateToProps, mapDispatchToProps), 
  withAuthRedirect) (Dialogs); 