// https://youtu.be/fmSIHr3WKxk?t=357  
import React, { useState, useEffect } from 'react';
import s from './CubeCSS.module.css';

// maybe i should add some animation 
// like spinning when keys not using
const CubeCSS = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    //read what key was used and reacting properly
    document.onkeydown = (e) => {
      if (e.keyCode === 37) setRotateY(rotateY - 2)
      else if (e.keyCode === 38) setRotateX(rotateX - 2)
      else if (e.keyCode === 39) setRotateY(rotateY + 2)
      else if (e.keyCode === 40) setRotateX(rotateX + 2)

      rotateCube(rotateX, rotateY)
    }
  });

  let rotateCube = (rotateX, rotateY) => {
    document.querySelector('.' + s.cube).style.transform =
      'rotateX(' + rotateX + 'deg)' + 'rotateY(' + rotateY + 'deg)';
  }

  //just reset cube position and all start again
  let reset = () => {
    rotateCube(0, 0)
    setRotateX(0)
    setRotateY(0)
  }

  return <>
    Use arrows on keyboard to move cube. Click on cube to reset.
    <div className={s.cubeContainer}>
      <div className={s.cube} onClick={reset} >
        <div className={`${s.side} ${s.front}`}>front</div>
        <div className={`${s.side} ${s.back}`}>back</div>
        <div className={`${s.side} ${s.right}`}>right</div>
        <div className={`${s.side} ${s.left}`}>left</div>
        <div className={`${s.side} ${s.top}`}>top</div>
        <div className={`${s.side} ${s.bottom}`}>bottom</div>
      </div>
    </div></>
}

export default CubeCSS;