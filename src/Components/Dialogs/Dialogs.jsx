import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={s.diarea}>
			Просто иду по шагам препода {props.text}
		</div>
	)
}

export default Dialogs;