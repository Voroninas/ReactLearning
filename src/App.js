import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs'

// import Menu from './Components/Menu/Menu.jsx';

// <img className="GrapePic" src="https://klumba.guru/wp-content/uploads/post_5ab3c0d4e77ca.jpg" />
// <Menu />
// cntrl+t+f форматирование текста!

function App() {
	return (
		<div className="MainDiv">
			<Header />
			<Navbar />
			<Profile />
			
			<div className="MainDivContentDiv">
				<Dialogs text=" ну и пропсы юзну" />
			</div>
		</div>
	);
}

export default App;
