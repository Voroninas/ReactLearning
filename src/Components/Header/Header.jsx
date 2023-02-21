import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return <header className={s.header}>
    <img src="%PUBLIC_URL%/favicon.ico" alt={"logo"}/>
    {/*{<img src='https://i.pinimg.com/736x/4c/70/63/4c7063212792902ae0d0d517a30aa1ac.jpg'  alt={"logo"}/>}*/}

    <div className={s.loginBlock}>
      {props.isAuth ?
        props.login :
        <NavLink to={'/login'}>Login</NavLink>
      }
    </div>
  </header>
}

export default Header;