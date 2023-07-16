// https://youtu.be/fmSIHr3WKxk?t=357  
import React, { useState, useEffect, useRef } from 'react';
import s from './CubeCSS.module.css';

const CubeCSS = () => {
  const ref = useRef();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

// keyCode считается устаревшим, вместо них event.code и event.key Свойство key объекта события позволяет получить символ, а свойство code – «физический код клавиши».
/*  // надо потестить
let arrowKeysHandler = (e) => {
    console.log("arrowKeysHandler сработал")
      if (e.keyCode === 37) {e.preventDefault(); setRotateY(rotateY - 2)}
      else if (e.keyCode === 38) {e.preventDefault(); setRotateX(rotateX - 2)}
      else if (e.keyCode === 39) {e.preventDefault(); setRotateY(rotateY + 2)}
      else if (e.keyCode === 40) {e.preventDefault(); setRotateX(rotateX + 2)}
      console.log("onkeydown сработал", e.keyCode)
  }
  document.addEventListener("keydown", arrowKeysHandler, false); */
  /*// аналог componentWillUnmount
  useEffect(() => {
    return () => {
      // возвращаем реакцию на клавиши обратно
      document.removeEventListener("keydown", arrowKeysHandler, false);
      console.log("componentWillUnmount");
    };
  });*/
/*}, []);*/

/*// я ничего не понимаю, оказывается я делал всё в точности как положено, но тогда почему эвент листенер не убрался??? может стоит повесить его на window, а не document&
useEffect(() => {
    const div = innerRef.current;
    // subscribe event
    div.addEventListener("scroll", handleOnScroll);
    return () => {
      // unsubscribe event
      div.removeEventListener("scroll", handleOnScroll);
    };
  }, []);
  */
  useEffect(() => {
    //read what key was used and reacting properly
    document.onkeydown = (e) => {
      console.log("onkeydown сработал", e.keyCode)
      if (e.keyCode === 37) {e.preventDefault(); setRotateY(rotateY - 2)}
      else if (e.keyCode === 38) {e.preventDefault(); setRotateX(rotateX - 2)}
      else if (e.keyCode === 39) {e.preventDefault(); setRotateY(rotateY + 2)}
      else if (e.keyCode === 40) {e.preventDefault(); setRotateX(rotateX + 2)}
    }
      rotateCube(rotateX, rotateY)
  });

  let rotateCube = (rotateX, rotateY) => {
    ref.current.style.transform = 'rotateX(' + rotateX + 'deg)' + 'rotateY(' + rotateY + 'deg)';
    /*document.querySelector('.' + s.cube).style.transform = 'rotateX(' + rotateX + 'deg)' + 'rotateY(' + rotateY + 'deg)'; // устаревший способ*/
  }
  
  let reset = () => {  //just reset cube position and all start again
    rotateCube(0, 0)
    setRotateX(0)
    setRotateY(0)
  }

  return <>
    Use arrows on keyboard to move cube. Click on cube to reset. (Arrows will work only if cube not moving, otherwise this function need enable in code)
    <div className={s.cubeContainer}>
      <div className={s.cube} ref={ref} onClick={reset} >
        <div className={`${s.side} ${s.front}`}>front</div>
        <div className={`${s.side} ${s.back}`}>back</div>
        <div className={`${s.side} ${s.right}`}>right</div>
        <div className={`${s.side} ${s.left}`}>left</div>
        <div className={`${s.side} ${s.top}`}>top</div>
        <div className={`${s.side} ${s.bottom}`}>bottom</div>
      </div>
    </div>
    </>
}

export default CubeCSS;