import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader.js'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img style={{width: "500px"}} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
        {/*<img style={{width: "500px"}} src={props.imgSrc} />*/}
      </div>
      <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} />
        ava and description
      </div>
    </div>
  )
}

export default ProfileInfo;