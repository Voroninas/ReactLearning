import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom"

const DialogsItem = (props) => {
	let path = "/dialogs/" + props.id
	return <div className={s.dialog}>
		<NavLink to={path}>{props.name}</NavLink>
	</div>
}

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
	let dialogsData = [
		{ id: "1", name: "типо имя" },
		{ id: "2", name: "Вася" },
		{ id: "3", name: "Петя" },
		{ id: "4", name: "Саня" }
	]

	let dialogsElements = dialogsData
		.map(dialogObj => <DialogsItem name={dialogObj.name} id={dialogObj.id} />)

	let messagesData = [
		{ id: "1", message: "Типо сообщения пользователя" },
		{ id: "2", message: "Сообщение1" },
		{ id: "3", message: "Сообщение2" }
	]

	let messageElements = messagesData.map(messageObj => <Message message={messageObj.message} />)

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