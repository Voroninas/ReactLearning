import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from "react-router-dom"
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/state';

const Dialogs = (props) => {
	/*let {dialogsData, messagesData}=props это работает*/
	let dialogsElements = props.dialogsPage.dialogsData
		.map(dialogObj => <DialogsItem name={dialogObj.name}
			id={dialogObj.id} imgSrc={dialogObj.imgSrc} />)

	let messageElements = props.dialogsPage.messagesData
		.map(messageObj => <Message {...messageObj} />)

	let onAddMessageClick = () => {
		props.dispatch(addMessageActionCreator())
	}
	// let newMessageElement = React.createRef()
	let onNewMessageChange = (event) => {
		// let text = newMessageElement.current.value
		let text = event.target.value
		props.dispatch(updateNewMessageTextActionCreator(text))
	}
	let newMessageText = props.dialogsPage.newMessageText

	return (
		<div>
			<div className={style.dialogs}>
				<div className={style.dialogsItem}>
					{dialogsElements}
				</div>
				<div className={style.messages}>
					{messageElements}
				</div>
			</div>
			<div>
				<textarea autoFocus
					onChange={onNewMessageChange}
					value={newMessageText}
					placeholder="типо placeholder"
					style={{ width: "400px" }} />
			</div>
			<div>
				<button onClick={onAddMessageClick}>Add message</button>
			</div>
		</div>
	)
}

export default Dialogs;