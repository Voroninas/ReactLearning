// https://youtu.be/fmSIHr3WKxk?t=357
import React from 'react';
import s from './CubeCSS.css';
// todo переделать на модульный css (дописать слово модуль в название файла css и поменять обращение к сss на className={s.item} в файле jsx)

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

  return <><div className="cubeContainer">
    <div className="cube">
      <div className="side front">front</div>
      <div className="side back">back</div>
      <div className="side right">right</div>
      <div className="side left">left</div>
      <div className="side top">top</div>
      <div className="side bottom">bottom</div>
    </div>
  </div></>
}

export default CubeCSS;