import React from 'react'
import styles from './Flip3DCard.module.css';
// https://www.youtube.com/watch?v=Kdal-3AfeRc
//todo сделать отображение инфы ("Front-Back") из пропсов
// и возможно что-нибудь по оформлению тоже на пропсы повесить (цвет/картинку фона)

const Flip3DCard = ()=>{
  return <div className={styles.wrap}>
    <div className={styles.card}>
      <div className={styles.front}><span>Front</span></div>
      <div className={styles.back}><span>Back</span></div>
    </div>
  </div>
}

export default Flip3DCard