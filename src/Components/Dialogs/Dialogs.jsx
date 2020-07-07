import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from"react-router-dom"

const DialogsItem = (props) => {
	let path = "/dialogs/" + props.id
	return <div className={s.dialog}>
		<NavLink to={path}>{props.name}</NavLink>
	</div>
}

const Message = (props) =>{
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogsItem name="типо имя" id="1"/>
				<DialogsItem name="Вася" id="2"/>
				<DialogsItem name="Петя" id="3"/>
				<DialogsItem name="Саня" id="4"/>
			</div>
			<div className={s.messages}>
				<Message message="Типо сообщения пользователя"/>
				<Message message="Сообщение1"/>
				<Message message="Сообщение2"/>
			</div>
		</div>
	)
}

export default Dialogs;