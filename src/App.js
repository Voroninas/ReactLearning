import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer.jsx';
import LoginPage from './Components/Login/Login.jsx';
import { Route } from 'react-router-dom'

import Menu from './Components/Menu/Menu.jsx';
import GridExample from './Components/examples/GridExample/GridExample.jsx';
import CurlyText from './Components/examples/CurlyText/CurlyText.jsx';
import CubeCSS from './Components/examples/CubeCSS/CubeCSS.jsx';

function App() {
  //console.log('>>>>>> App props <<<<<', props)
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

        <Route path='/menu'><Menu /></Route>
        <Route path='/GridExample'><GridExample /></Route>
        <Route path='/newExample'>          
          <img style={{ width: "100%" }} src="https://cdn.promodj.com/afs/c51f43e01bd7032aa206135ca8cc8ee312:resize:2000x2000:same:c08837" />
        </Route>
        <Route path='/examples'>
          <CurlyText/>
          <CubeCSS/>
        </Route>
        {/*<Route path='/settings'><img style={{ width: "100%" }} src="https://avatars.mds.yandex.net/get-zen_doc/1857055/pub_5d792ba9fbe6e73d6415732f_5d792c1934808200ad4745e2/scale_1200" /></Route>*/}
      </div>
    </div>
  );
}

export default App;
