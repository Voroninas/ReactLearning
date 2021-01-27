import React from 'react';
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogsReducer.js';

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
		}

export default DialogsContainer;