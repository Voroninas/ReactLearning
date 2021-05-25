import React from 'react';
import s from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
    <div>
      <img className={s.AppLogo} src="https://klumba.guru/wp-content/uploads/post_5ab3c0d4e77ca.jpg" />
      <span>{props.textMenuItem}</span>
    </div>
  );
}

export default MenuItem;
