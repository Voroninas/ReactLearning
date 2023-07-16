import React from 'react';
import s from './GridExample.module.css';

//import Flip3DCard from '../Flip3DCard/Flip3DCard.jsx';

// в планах передавать в GridExample картинки или текст массивом
// для отображения в дивах вместо 1,2,3...
const GridExample = (props) => {
  return (<>
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
  </>)
}

export default GridExample;