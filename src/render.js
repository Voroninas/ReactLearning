import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { addPost } from './redux/state';
import { addMessage, updateNewPostText } from './redux/state';
/*import { updateNewPostText } from './redux/state'; путь один и тот же */

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} />
		</BrowserRouter>, document.getElementById('root')
	);
}

