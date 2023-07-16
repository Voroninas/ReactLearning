import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx';
import Menu from './Components/Menu/Menu.jsx';
import SVGSample from './Components/SVGSample/SVGSample.jsx';
import GridExample from './Components/examples/GridExample/GridExample.jsx';
import NewExample from './Components/examples/NewExample/NewExample.jsx';
import ExamplesList from './Components/examples/ExamplesList.jsx';

function App() {
  return (
    <div className="MainDiv">
      <Header />
      <Navbar />
      <div className="MainDivContentDiv">
        {/*<Route path='/users' render={() => <div></div>} />*/}
        <Route path='/menu'><Menu /></Route>
        <Route path='/svgsample'><SVGSample /></Route>
        <Route path='/GridExample'><GridExample /></Route>
        <Route path='/newExample'><NewExample/></Route>
        <Route path='/examples'><ExamplesList/></Route>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
