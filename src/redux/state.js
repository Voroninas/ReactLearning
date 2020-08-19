import { rerenderEntireTree } from './../render';

let state = {
	dialogsPage:{		
		dialogsData: [
			{ id: 1, name: "Таня", imgSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' },
			{ id: 2, name: "Вася", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
			{ id: 3, name: "Петя", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
			{ id: 4, name: "Саня", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' }
		],
		messagesData: [
			{ id: 1, message: "Типо сообщения пользователя" },
			{ id: 2, message: "Сообщение1" },
			{ id: 3, message: "Сообщение2" }
		],	
		newMessageText:"текст из state.dialogsPage.newMessageText"
	},
	profileData: {
		textDescripBlock: "ava and description",
		imgSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
		postData: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 0, imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
			{ id: 2, message: "Now the posts data in array and obj", likesCount: 23, imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
			{ id: 3, message: "Посты не захардкожены в вёрстке", likesCount: 999, imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' }
		],
		newPostText: 'текст из state.profileData.newPostText'
	},
	friends: [
		{ id: 1, name: "Бляблавич", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
		{ id: 2, name: "Василийсилиса", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
		{ id: 3, name: "Петянский", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
		{ id: 4, name: "Саня", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
		{ id: 5, name: "Бляблавич", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
		{ id: 6, name: "Василийсилиса", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
		{ id: 7, name: "Петянский", imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
		{ id: 8, name: "Саня", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
		{ id: 9, name: "Саня", imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' }
	]
}

window.state = state

export let addPost = () => {
	let newPost = { 
		id: 13, 
		message: state.profileData.newPostText, 
		likesCount: 0, 
		imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' 
	}
	state.profileData.postData.push(newPost)
	state.profileData.newPostText = ""
	rerenderEntireTree(state)
};

export let addMessage = () => {
	let newMessage = { 
		id: 77, 
		message: state.dialogsPage.newMessageText 
	}
	state.dialogsPage.messagesData.push(newMessage)
	state.dialogsPage.newMessageText = ""
	rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
	state.profileData.newPostText=newText
	rerenderEntireTree(state)
}

export let updateNewMessageText = (text)=>{
	state.dialogsPage.newMessageText = text
	rerenderEntireTree(state)
}

export default state;
