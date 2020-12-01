import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import Menu from './Components/Menu/Menu.jsx';
import GridExample from './Components/GridExample/GridExample.jsx';

function App(props) {
	//console.log('>>>>>> App props <<<<<', props)
return (
	<div className="MainDiv">
		<Header />
		<Navbar friends = {props.state.friends} />
		<div className="MainDivContentDiv">
			<Route path='/dialogs'>
				<Dialogs 
					dialogsPage={props.state.dialogsPage} 
					dispatch={props.dispatch} />
			</Route>
			<Route path='/profile'>
				<Profile 
					profileData={props.state.profileData} 
					dispatch={props.dispatch} />
			</Route>
			<Route path='/menu'>
				<Menu />
			</Route>
			<Route path='/news'>
				<GridExample />
			</Route>
			<Route path='/messages'>
				<img style={{width: "900px"}} src="http://swiatgry.pl/media/tapety/974/you-are-empty-1920x1080.jpg" />
			</Route>
			<Route path='/settings'>
				<img style={{width: "900px"}} src="https://avatars.mds.yandex.net/get-zen_doc/1857055/pub_5d792ba9fbe6e73d6415732f_5d792c1934808200ad4745e2/scale_1200" />
			</Route>
		</div>
	</div>
);
}

export default App;
