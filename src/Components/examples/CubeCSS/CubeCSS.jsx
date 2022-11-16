// https://youtu.be/fmSIHr3WKxk?t=357
import React from 'react';
import s from './CubeCSS.module.css';

const CubeCSS = () => {
  // ref is not the best option, 
  // probably should use hook or componentDidMount 
  (() => {
      let rotateX = 0
      let rotateY = 0
      document.onkeydown = (e) => {
        if(e.keyCode===37) rotateY -=4
        else if(e.keyCode===38) rotateX -=4
        else if(e.keyCode===39) rotateY +=4
        else if(e.keyCode===40) rotateX +=4
        
        ref.current.style.transform = 
        'rotateX(' + rotateX + 'deg)' + 'rotateY(' + rotateY + 'deg)';
      }
      /*document.querySelector('.cube').style.transform = 
      'rotateX(' + rotateX + 'deg)' + 'rotateY(' + rotateY + 'deg)';*/
    })()

  let ref = React.createRef()

  let reset = ()=> {
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg)"
    /*rotateX = 0
    rotateY = 0*/
  }

  return <><div className={s.cubeContainer}>
    <div className={s.cube} onClick={reset} ref={ref}>   {/*delete ref*/}
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