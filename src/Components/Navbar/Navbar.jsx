import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
  return <nav className={s.nav}>

  {/*i don`t know wtf, but link users not active when app start run 
  i know that it most likely wrong style place, it shoud be in NavLink, not in div 
but this steel dont work: 
    <div className={s.item}>
      <NavLink to="/users" className={`${s.item} ${s.activeLink}`} activeClassName={s.activeLink}>Users</NavLink>
    </div>*/}

    <div className={s.item}>
      <NavLink to="/menu" activeClassName={s.activeLink}>Menu</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/svgsample" activeClassName={s.activeLink}>SVGSample</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/GridExample" activeClassName={s.activeLink}>GridExample</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/newExample" activeClassName={s.activeLink}>New example</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/examples" activeClassName={s.activeLink}>Examples</NavLink>
    </div>
  </nav>
}

export default Navbar;