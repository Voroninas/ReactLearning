import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom"
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
	/*console.log('>>>>>> props Dialogs <<<<<', props)*/
	/*let {dialogsData, messagesData}=props это работает*/
	let dialogsElements = props.dialogsData
		.map(dialogObj => <DialogsItem name={dialogObj.name} id={dialogObj.id} />)

	let messageElements = props.messagesData
		.map(messageObj => <Message message={messageObj.message} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messageElements}
			</div>
		</div>
	)
}

export default Dialogs;