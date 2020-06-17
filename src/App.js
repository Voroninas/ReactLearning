import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu/Menu.jsx';


function App() {
  return (
    <div className="MainDiv">
      <img className="GrapePic" src="https://klumba.guru/wp-content/uploads/post_5ab3c0d4e77ca.jpg" />
      <Menu />
        {/*<header className="App-header"></header>*/}
    </div>
  );
}

export default App;
