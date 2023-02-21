import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom"
//import FriendsTable from "./FriendsTable/FriendsTable"

const Navbar = (props) => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={`${s.item} ${s.activeLink}`}>
      <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
    </div>

  {/*i don`t know wtf, but link users not active when app start run 
  i know that it most likely wrong style place, it shoud be in NavLink, not in div 
but this steel dont work: 
    <div className={s.item}>
      <NavLink to="/users" className={`${s.item} ${s.activeLink}`} activeClassName={s.activeLink}>Users</NavLink>
    </div>*/}

    <div>
      {/*<FriendsTable {...props} />*/}
    </div>
  </nav>
}

export default Navbar;