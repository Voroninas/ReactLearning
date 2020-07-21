import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
/*console.log('>>>>>> props Profile <<<<<', props)*/
	return (
		<div className={s.content}>
			<ProfileInfo textDescripBlock={props.textDescripBlock} imgSrc={props.imgSrc} />
			<MyPosts postData={props.postData} />
		</div>
	)
}

export default Profile;