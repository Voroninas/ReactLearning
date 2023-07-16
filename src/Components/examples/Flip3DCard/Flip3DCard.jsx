import React from 'react'
import styles from './Flip3DCard.module.css';
// https://www.youtube.com/watch?v=Kdal-3AfeRc
//todo сделать из пропсов что-нибудь по оформлению (цвет/картинку фона)

const Flip3DCard = ({frontInfo = "Front", backInfo = "Back"})=>{
/*const Flip3DCard = (props)=>{*/
  return <div className={styles.wrap}>
    <div className={styles.card}>
      {/*<div className={styles.front}><span>Front1 Hover the mouse</span></div>*/}
      <div className={styles.front}>{frontInfo}</div>
      <div className={styles.back}>{backInfo}</div>
    </div>
  </div>
}

/*Flip3DCard.defaultProps = {frontInfo: "Front", backInfo: "Back"}*/

export default Flip3DCard