import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
	console.log('>>>>>> props <<<<<', props)
	return (
		<div className={s.content}>
			<ProfileInfo 
				textDescripBlock={props.profileData.textDescripBlock} 
				imgSrc={props.profileData.imgSrc} />
			<MyPosts 
				postData={props.profileData.postData} 
				newPostText={props.profileData.newPostText}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText} />
		</div>
	)
}

export default Profile;