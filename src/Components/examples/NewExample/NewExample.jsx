import { memo, useState, useCallback } from 'react';
import stl from './NewExample.module.css';

// хотел потестить хук useCallback, передача функции в дочерний компонент для возможности смены отображения родительского элемента через дочерний
const ControlPannel = memo(({changer}) => {
  return (
    <div>
      <button onClick={changer}>Do rundome</button>
    </div>
  );
});

const NewExample = (props) => {
  const [value, valueChange] = useState(Math.random());
 
  // смысл в том, что при перерисовке родителя его метод changer не пересоздаётся, а берётся из ранее сохранённого значения, таким образом дочерняя компонента тоже не перерисовывается т к её аргументы не менялись и она обёрнута в memo 
  const changer = useCallback(() => valueChange(Math.random()), []);

  return <>

      {value}
      <ControlPannel changer={changer} />

    <div className={stl.resize}>
      <div>
        <button className={stl.testButtonRed}>special color</button>
      </div>      
    </div>



<hr />

<img className={stl.train} src="https://js.cx/clipart/train.gif" onClick={ ()=>{
  /*debugger*/
  /*this.style.left='450px'*/
  console.log(stl.train)
  console.log(this)
  /*stl.train.left='450px'*/
  } } alt={"logo"}/>

  </>
}

export default NewExample;

/*
//из статьи про веб воркеры избавляющие приложение от подвисаний путём выноса операций в параллельный поток вычислений. интересная реализация имитации выполнения длительных вычислений, которые заполняют основной поток деятельности, как результат ПРИЛОЖЕНИЕ ЗАВИСАЕТ пока не закончится подсчёт.
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const count = document.getElementById('count');

// эта функция создаёт "сложные вычисления" создавая тормоза в приложении, принимает время торможения в миллисекундах
const pause = (ms) => {
  let time = new Date();
  while ((new Date()) - time <= ms) {}
}

const bumpCount = () => {
  count.innerText = Number(count.innerText) + 1;
}

button1.addEventListener('click', async function () {
    pause(3000);
    bumpCount();
});

button2.addEventListener('click', function () {
    bumpCount();
});
*/

/*
// выясняем количество прослушивателей событий, прикреплённых к элементам DOM различных страниц. Этот скрипт можно запустить прямо в консоли инструментов разработчика.
Array
  .from([document, ...document.querySelectorAll('*')])
  .reduce((accumulator, node) => {
    let listeners = getEventListeners(node);
    for (let property in listeners) {
      accumulator = accumulator + listeners[property].length
    }
    return accumulator;
  }, 0);
  */

/*
// пример хука useReducer
import {useReducer} from "react";
 
const initialState = {count: 0};
 
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, };
    case "decrement":
      return { ...state, count: state.count - 1, };
    default: throw new Error(); } }
 
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
    </>
  );
};*/