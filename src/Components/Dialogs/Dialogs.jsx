import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
	/*let {dialogsData, messagesData}=props это работает*/
	let dialogsElements = props.dialogsData
		.map(dialogObj => <DialogsItem name={dialogObj.name}
			id={dialogObj.id} key={dialogObj.id} imgSrc={dialogObj.imgSrc} />)
/*let messageElements = props.messagesData
    .map(messageObj => <Message {...messageObj} />)*/
	let messageElements = props.messagesData
		.map(messageObj => <Message {...messageObj} key={messageObj.id}  />)

	let onAddMessageClick = () => {
		props.addMessage()
	}
	// let newMessageElement = React.createRef()
	let onNewMessageChange = (event) => {
		// let text = newMessageElement.current.value
		let text = event.target.value
		props.updateNewMessageBody(text)
	}
	let newMessageText = props.newMessageText

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