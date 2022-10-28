// https://youtu.be/fmSIHr3WKxk?t=357
import React from 'react';
import s from './CubeCSS.module.css';

const CubeCSS = () => {
/*  // i`m too tired for this shet, it`s not working yet
  (function(){
      let rotateX = 0
      let rotateY = 0
      document.onkeydown = function(e){
        if(e.keyCode===37) rotateY -=4
        else if(e.keyCode===38) rotateX -=4
        else if(e.keyCode===39) rotateY -=4
        else if(e.keyCode===40) rotateX -=4
      }
      document.querySelector('.cube').style.transform = 
      'rotateX(' + rotateX + 'deg)' + 'rotateY(' + rotateY + 'deg)';
    })()*/

  return <><div className={s.cubeContainer}>
    <div className={s.cube}>
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