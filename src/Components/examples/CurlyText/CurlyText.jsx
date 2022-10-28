// образец https://www.youtube.com/watch?v=fHRxLEcopNM&list=UUCtCqBwIxqZLSXFsc94HJDg&index=2
import React from 'react';
import s from './CurlyText.module.css';  // в примере был обычный CSS


// текст className={s.letters} должен повторяться в контейнерах bottlesContainer 6 раз
// это повторение для создания иллюзии полукруглого профиля бутылки
const CurlyText = () => {
return <>
<div className={s.bottle}>
  <div className={s.bottlesContainer}>
    <div className={s.letters}>
      <span>X</span>
      <span>Y</span>
      <span>Z</span>
      <span>T</span>
      <span>E</span>
      <span>X</span>
      <span>T</span>      
    </div>
    <div className={s.letters}>
      <span>X</span>
      <span>Y</span>
      <span>Z</span>
      <span>T</span>
      <span>E</span>
      <span>X</span>
      <span>T</span>      
    </div>
    <div className={s.letters}>
      <span>X</span>
      <span>Y</span>
      <span>Z</span>
      <span>T</span>
      <span>E</span>
      <span>X</span>
      <span>T</span>      
    </div>
    <div className={s.letters}>
      <span>X</span>
      <span>Y</span>
      <span>Z</span>
      <span>T</span>
      <span>E</span>
      <span>X</span>
      <span>T</span>      
    </div>
    <div className={s.letters}>
      <span>X</span>
      <span>Y</span>
      <span>Z</span>
      <span>T</span>
      <span>E</span>
      <span>X</span>
      <span>T</span>      
    </div>
    <div className={s.letters}>
      <span>X</span>
      <span>Y</span>
      <span>Z</span>
      <span>T</span>
      <span>E</span>
      <span>X</span>
      <span>T</span>      
    </div>
  </div>
</div>  </>
}

export default CurlyText;