import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer.jsx';
import LoginPage from './Components/Login/Login.jsx';
import { Route } from 'react-router-dom'

import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="MainDiv">
      <HeaderContainer />
      {/*димыч гад так и не сделал эту домашку, а мне 
    надоело править поломки появляющиеся из-за этого куска кода
    <Navbar friends = {props.state.friends} />*/}
      <Navbar />
      <div className="MainDivContentDiv">
        <Route path='/dialogs'><DialogsContainer /></Route>
        <Route path='/profile/:userId?'><ProfileContainer /></Route>
        {/*<Route path='/users' render={() => <div></div>} />*/}
        <Route path='/users'><UsersContainer /></Route>
        <Route path='/login'><LoginPage /></Route>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
