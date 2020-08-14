import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from "react-router-dom"
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
	/*console.log('>>>>>> props Dialogs <<<<<', props)*/
	/*let {dialogsData, messagesData}=props это работает*/
	let dialogsElements = props.dialogsData
		.map(dialogObj => <DialogsItem name={dialogObj.name} id={dialogObj.id} imgSrc={dialogObj.imgSrc} />)

	let messageElements = props.messagesData
		.map(messageObj => <Message {...messageObj} />)

	let newMessageElement = React.createRef()
	let addMessage = () => {
		let textOfMessage = newMessageElement.current.value
		props.addMessage(textOfMessage)
		// alert(textOfMessage)
		newMessageElement.current.value = ""
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
				<textarea autoFocus placeholder="типо placeholder" ref={newMessageElement}></textarea>
			</div>
			<div>
				<button onClick={addMessage}>Add message</button>
			</div>						
		</div>
	)
}

export default Dialogs;