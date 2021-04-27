import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return <header className={s.header}>
    {/*eslint-disable-next-line*/}
        <img src='https://i.pinimg.com/736x/4c/70/63/4c7063212792902ae0d0d517a30aa1ac.jpg' />

        <div className={s.loginBlock}>
        					{/*props.login*/} 
        	{ props.isAuth ? 'типо авторизован уже' :
        	<NavLink to={'/login'}>Login</NavLink>
        	}
        </div>
    </header>
}

export default Header;