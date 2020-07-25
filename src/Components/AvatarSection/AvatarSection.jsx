import React from 'react';
import s from './AvatarSection.module.css';

const AvatarSection = (props) => {
	console.log('>>>>>> props FriendsTable <<<<<', props)
	return (
		<div className={s.avatarSection}>
			<img src={props.imgSrc} />
			<div className={s.overflowSingle}>
				{props.name}
			</div>
		</div>
	)
}

export default AvatarSection;