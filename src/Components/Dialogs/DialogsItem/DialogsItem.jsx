import React from 'react';
import s from './../Dialogs.module.css';
import commonStyle from './../../Navbar/FriendsTable/AvatarSection/AvatarSection.module.css';
/*стили не от этой компоненты, а от других, это неправильно, 
но сделано как временный вариант, позже переделается*/
import { NavLink } from "react-router-dom"

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id

  return <div className={s.dialog}>
    <NavLink className={s.linkStyle} to={path}>
      <img className={commonStyle.roundAvatar} src={props.imgSrc} alt="round avatar"/>
      {props.name}
    </NavLink>
  </div>
}

export default DialogsItem;