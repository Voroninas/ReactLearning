import React from 'react';
import s from './Menu.module.css';
import MenuItem from './../MenuItem/MenuItem.jsx';
//import Test from './Test.js';


const Menu = () =>  {
  return (
    <div className = {s.MenuList}>
        <MenuItem textMenuItem = "Первый пункт"/>
        <MenuItem textMenuItem = "Второй пункт"/>
    </div>
  );
}

export default Menu;
