import React from 'react';
import s from './GridExample.module.css';

//import Flip3DCard from '../Flip3DCard/Flip3DCard.jsx';

// в планах передавать в GridExample картинки или текст массивом
// для отображения в дивах вместо 1,2,3...
const GridExample = (props) => {
  return (<>
    <div className="sticky-top">Блок прилипший к верху, при прокрутке экрана остаётся наверху</div>



    <div className={s.myGridTest}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    {/*it`s working*/}
      {/*<div><Flip3DCard /></div>*/ }
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>

{/*
xs <576px  
sm ≥576px  
md ≥768px  
lg ≥992px  
xl ≥1200px 
xxl ≥1400px
*/}

{/*text-center - это готовый бутстрапный класс для текста, там много полезных классов, надо бы подробнее почитать*/}
<div className="container">
  <div className="row">
    <div className="col-12 text-center">Заголовок во всю ширину</div>
  </div>
  <div className="row">
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка1
    </div>
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка2
    </div>
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка3
    </div>
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка4
    </div>
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка5
    </div>
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка6
    </div>
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка7
    </div>
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка8
    </div>
    <div className="col-lg-4 col-sm-6 col-xs-12 text-center">
      Колонка9
    </div>
  </div>
  <div className="row">
    <div className="col-xs-12 col-lg-6 text-center">Пример1</div>
    <div className="col-xs-12 col-lg-6 text-center">Пример2</div>
    <div className="col-xs-12 col-lg-6 text-center">Пример3</div>
    <div className="col-xs-12 col-lg-6 text-center">Пример4</div>
    <div className="col-xs-12 col-lg-6 text-center">Пример5</div>
    <div className="col-xs-12 col-lg-6 text-center">Пример6</div>
  </div>
</div>

<div className="sticky-bottom">Липкий подвал, звучит пошло</div>

  </>)
}

export default GridExample;