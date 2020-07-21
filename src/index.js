import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let myData = {
	dialogsData: [
		{ id: "1", name: "типо имя что" },
		{ id: "2", name: "Вася" },
		{ id: "3", name: "Петя" },
		{ id: "4", name: "Саня" }
	],
	messagesData: [
		{ id: "1", message: "Типо сообщения пользователя" },
		{ id: "2", message: "Сообщение1" },
		{ id: "3", message: "Сообщение2" }
	],
	profileData: {
		textDescripBlock: "ava and description",
		imgSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
		postData: [
			{ id: "1", message: 'Hi, how are you?', likesCount: '0', imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'},
			{ id: "2", message: "Now the posts data in array and obj", likesCount: '23', imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg'},
			{ id: "3", message: "Посты не захардкожены в вёрстке", likesCount: '999', imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'}
		]
	}
}

ReactDOM.render(<App {...myData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
