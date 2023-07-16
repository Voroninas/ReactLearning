// проводил опыты на https://codepen.io/pen/?editors=1010 
import React from 'react';
import { useState } from "react";
// import styles from './SVGSample.module.css'

// может это пригодится: иерархическая структура данных типа дерево
// это тоже может понадобиться svg граф js https://code.tutsplus.com/articles/best-free-javascript-graph-visualization-libraries--cms-41710
const SVGSample = () => {
  let SVGObj = document.getElementById("testObj")
  const [budVal, budValChange] = useState(1);
  const [internodeLengthVal, internodeLengthValChange] = useState(10); // internodeLength для краткости IL

// на входе передаём количество точек-почек и опционально настроечные данные типа расстояния меж узлами, первоначальную точку и толщины лозы, на выходе получим строку с координатами почек на лозе или сразу весь тег path
  let createVine = (budCount = 1, factorInternodeLength = 10, start = {x: 200, y: 0,}, prevStart = {x: 200, y: -10,}) => {
    let internodeLength = 10 * factorInternodeLength // типо расчёт длины междоузлий, т е расстояния между почками
// надо сделать запоминание координат уже имеющихся почек на лозах и строить новые лозы опираясь на эти данные

    let pointsForSVG = start.x + "," + start.y
    let pointX = 0
    let pointY = 0

// идея: лозы должны расти на обе стороны, так что либо с transform/translate химичить, 
// ЛИБО на вход функции передаём координаты начальной точки, функция определяет по ним в какую сторону будет расти лоза (право-лево, низ-верх) и соответственно присваивает не только положительные значения координат точкам, но и отрицательные меняя таким образом направление построения лозы
// ИЛИ совместить оба варианта: по координатам начальной точки определить смещение целиком лозы относительно этой точки с помощью transform
    for (let I_budCount = 1; I_budCount <= budCount; I_budCount++) {
      pointX = start.x + (I_budCount * internodeLength) 
      pointY = start.y + (I_budCount % 2 === 0 ? 5 : -5)
    //debugger
      pointsForSVG = pointsForSVG + " " + pointX + "," + pointY
    }
    return pointsForSVG
  }
  // возможно в будущем budCount будет не числом, а массивом с объектами в каждом объекте будут данные по конкретной почке, типа повреждение морозом, вероятность дать гроздь и тд
 
/*объект точка-почка. смена её координат также влияет на координаты её потомков
{
  coordinates: {
    x: 70,
    y: 34,
  },
  alive: true,
  age: 1,
  flexibility: true,
  stepchild: 3,   
  sideBranch: [побеги из почек этой ветки]
}*/

  let onNewBudValue = (event) => {
    let budCountVal = event.target.value
    budValChange(budCountVal)
  }

  let onNewILValue = (event) => {
    let internodeLengthCountVal = event.target.value
    internodeLengthValChange(internodeLengthCountVal)
  }

  return (<>
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="400">
      <circle cx="400" cy="50" r="5" stroke="red"/>
      {/*<circle cx="200" cy="10" r="5" stroke="blue"/>*/}
      <polyline id="testObj" points="0,0"
        style={{
          fill: "none",
          stroke: "#C18425",
          strokeWidth: 3
        }}
        transform="translate(200,50)" />
    </svg>

    <input
      title="Длина междоузлий"
      type="range"
      max="10"
      min="5"
      step="1"
      onChange={onNewILValue}
    />

    <input
      type="number"
      max="30"
      min="1"
      autoFocus={true}
      className="form-control"
      id="budCountInp"
      placeholder="Введите количество почек (число от 1 до 30)"
      onChange={onNewBudValue}
    />

    {/*// SVGObj.style.stroke="red"
//SVGObj.setAttribute("transform", "translate(130,80) rotate(10 50 85)")*/}
    <button onClick={() => {
      SVGObj.setAttribute("points", createVine(budVal, internodeLengthVal))
      SVGObj.setAttribute("transform", "translate(200,50)")      
      }}>
      Выставить настройки лозы
    </button>
  </>)
}
export default SVGSample


/*SVG в реакте имеет другой синтаксис: 

style="color: purple" → style={{color: 'purple'}}
style={{marginRight: spacing + 'em'}}
strokeWidth="2"

For any namespaced (colon-separated) attribute, e.g. xlink:href, remove the : and capitalize the second part of the attribute, e.g. xlinkHref. Here’s an example of an svg with <defs>, <use>, and inline styles:

function SvgWithXlink (props) {
    return (
        <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <style>
                { `.classA { fill:${props.fill} }` }
            </style>
            <defs>
                <g id="Port">
                    <circle style={{fill:'inherit'}} r="10"/>
                </g>
            </defs>
            <text y="15">black</text>
            <use x="70" y="10" xlinkHref="#Port" />
            <text y="35">{ props.fill }</text>
            <use x="70" y="30" xlinkHref="#Port" className="classA"/>
            <text y="55">blue</text>
            <use x="0" y="50" xlinkHref="#Port" style={{fill:'blue'}}/>
        </svg>
    );
}*/