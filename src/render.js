import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state';
/*import { updateNewPostText } from './redux/state'; путь один и тот же */

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} 
				addPost={addPost} 
				addMessage={addMessage} 
				updateNewPostText={updateNewPostText}
				updateNewMessageText={updateNewMessageText} />
		</BrowserRouter>, document.getElementById('root')
	);
}

