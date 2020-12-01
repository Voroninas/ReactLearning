import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
	// console.log('>>>>>> Profile props <<<<<', props)
	return (
		<div className={s.content}>
			<ProfileInfo 
				textDescripBlock={props.profileData.textDescripBlock} 
				imgSrc={props.profileData.imgSrc} />
			<MyPosts 
				postData={props.profileData.postData} 
				newPostText={props.profileData.newPostText}
				dispatch={props.dispatch} />
		</div>
	)
}

export default Profile;