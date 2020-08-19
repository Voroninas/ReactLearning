import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from "react-router-dom"
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
	/*let {dialogsData, messagesData}=props это работает*/
	let dialogsElements = props.dialogsPage.dialogsData
		.map(dialogObj => <DialogsItem name={dialogObj.name} 
				id={dialogObj.id} imgSrc={dialogObj.imgSrc} />)

	let messageElements = props.dialogsPage.messagesData
		.map(messageObj => <Message {...messageObj} />)

	let addMessage = () => {
		props.addMessage()
	}
	let newMessageElement = React.createRef()
	let onMessageChange = ()=>{
		props.updateNewMessageText(newMessageElement.current.value)
	}

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
					onChange={onMessageChange}
					value={props.dialogsPage.newMessageText}
					placeholder="типо placeholder" 
					ref={newMessageElement}
					style={{width:"400px"}} />
			</div>
			<div>
				<button onClick={addMessage}>Add message</button>
			</div>						
		</div>
	)
}

export default Dialogs;