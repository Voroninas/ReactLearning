import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<div className={s.dialog}>
					<NavLink to="/dialogs/1">типо имя пользователя</NavLink>
				</div>
				<div className={s.dialog + " " + s.active}>
					<NavLink to="/dialogs/2">Вася</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3">Петя</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4">Саня</NavLink>
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Типо сообщения пользователя</div>
				<div className={s.message}>Сообщение1</div>
				<div className={s.message}>Сообщение2</div>
				<div className={s.message}>Сообщение3</div>
			</div>
		</div>
	)
}

export default Dialogs;