import React from 'react';
import s from './AvatarSection.module.css';

const AvatarSection = (props) => {
	/*console.log('>>>>>> props FriendsTable <<<<<', props)*/
	return (
		<div className={s.avatarSection}>
			<img className={s.roundAvatar} src={props.imgSrc} />
			<div className={s.overflowSingle}>
				{props.name}
			</div>
		</div>
	)
}

export default AvatarSection;