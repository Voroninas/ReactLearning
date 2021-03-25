import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom"
import FriendsTable from "./FriendsTable/FriendsTable"

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


        <div className={s.item}>
            <NavLink to="/menu" activeClassName={s.activeLink}>Menu</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div>
            {/*<FriendsTable {...props} />*/}
        </div>
    </nav>
}

export default Navbar;