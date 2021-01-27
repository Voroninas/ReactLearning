import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
/*import state, { addMessage, 
		addPost, 
		updateNewMessageText, 
		updateNewPostText,
		subscribe } from './redux/state';
//import state from './redux/state';
//import { rerenderEntireTree } from './render';*/

//11:20 на 44 уроке преп говорит как создать контекст, StoreContext.Provider
// но на след уроке он будет браться из другого источника, 
// так что пока не пишу импорт для него
let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<StoreContext.Provider value={store}>
				{/* из-за контекста оставляю голый App 
				<App state={state}
					store={store}
					dispatch={store.dispatch.bind(store)} />*/}
				<App />
				{/*addPost={store.addPost.bind(store)} 
				addMessage={store.addMessage.bind(store)} 
				updateNewPostText={store.updateNewPostText.bind(store)}
				updateNewMessageText={store.updateNewMessageText.bind(store)}*/}
			</StoreContext.Provider>
		</BrowserRouter>, document.getElementById('root')

	);
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
