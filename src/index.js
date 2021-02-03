import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"

let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>, document.getElementById('root')

	);
}
/* 44 урок по гиту
rerenderEntireTree(store.getState())*/
rerenderEntireTree()

store.subscribe(() => {
	/* 44 урок по гиту
	let state = store.getState()
	rerenderEntireTree(state)*/
	rerenderEntireTree()
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
