import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Components/Menu/Menu.jsx';
import GridExample from './Components/GridExample/GridExample.jsx';

// <img className="GrapePic" src="https://klumba.guru/wp-content/uploads/post_5ab3c0d4e77ca.jpg" />
// <Menu />

function App(props) {
console.log('>>>>>> props App <<<<<', props)
return (
<BrowserRouter>
	<div className="MainDiv">
		<Header />
		<Navbar />
		<div className="MainDivContentDiv">
			{/*<Route path='/dialogs' component={Dialogs} />
			<Route path='/profile' component={Profile} />
			<Route path='/music' component={Menu} />
			<Route path='/news' component={GridExample} />*/}
			<Route path='/dialogs'>
				<Dialogs messagesData={props.messagesData} dialogsData= {props.dialogsData}/>
			</Route>
			<Route path='/profile'>
				<Profile {...props.profileData} />
			</Route>
			<Route path='/music'>
				<Menu />
			</Route>
			<Route path='/news'>
				<GridExample />
			</Route>
			{/*	/messages можно сюда компоненты с SVG вставить
				/settings*/}
		</div>
	</div>
</BrowserRouter>
);
}

export default App;
