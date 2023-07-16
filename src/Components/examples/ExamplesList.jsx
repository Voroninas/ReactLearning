import React from 'react';
import CurlyText from './CurlyText/CurlyText.jsx';
import CubeCSS from './CubeCSS/CubeCSS.jsx';
import Flip3DCard from './Flip3DCard/Flip3DCard.jsx';
// import ShrinkingHeader from './ShrinkingHeader/ShrinkingHeader.jsx';
import SelectForm from './SelectForm.jsx';

import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
/* или так
import { Button } from 'react-bootstrap'; // так даже можно несколько компонентов через запятую импортнуть, но можно запутаться и на сайте почему-то этот способ считается хуже*/

/*хочу разгрузить App.js от кучи тегов с примерами, 
там и так хватает писанины, так что для примеров 
будет вот этот отдельный компонент*/



// свойство accesskey
/* для создания комбинации клавиш для текущего элемента. Этот атрибут содержит список разделенных пробелами символов. Браузер должен использовать первый имеющийся в раскладке клавиатуры символ из списка.*/

// contenteditable указывает, нужно ли предоставить пользователю возможность редактировать элемент. значения true\пустая строка или false
// draggable true/false можно ли перетаскивать элемент используя Drag and Drop API
// title Содержит текст, предоставляющий консультативную информацию об элементе. Эта информация может, но не обязательно, показываться пользователю в виде всплывающей подсказки.
// autofocus устанавливает, что список получает фокус после загрузки страницы, при этом список становится доступным для выбора пунктов, например, с помощью клавиатуры.

// todo ShrinkingHeader

const ExamplesList = (props) => {
  return (<div>
    <div>

      <div>this is proved that bootstrap is enabled</div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div>В react-bootstrap есть куча полезных фич и готовых компонент вроде: Alerts,
Accordion,
Badge,
Breadcrumb,
Buttons,
Button Group,
Cards,
Carousel,
Close Button,
Dropdowns,
Figures,
Images,
List Group,
Modal,
Navs,
Navbar,
Offcanvas,
Overlays,
Pagination,
Placeholder,
Popovers,
Progress,
Spinners,
Table,
Tabs,
Tooltips,
Toasts</div>

      <ol start={9}> {/*ol - ordered list; type={"I"}*/}
        <li>az</li>  {/*li - list item*/}
        <li>buki</li>
        <li>vedi</li>
      </ol>

      <hr></hr>{/*горизонтальная черта*/}

      <ul type="square">  {/*ul - unordered list;*/}
        <li>hkkj</li>
        <li>hkkj</li>
        <li>hkkj</li>
        <li>hkkj</li>
      </ul>

      <br></br>{/*перенос на новую строку (текста)*/}
      <abbr title="свойство title создаёт подсказки и может применяться ко всем тегам, а не только к этой аббревиатуре">abbr Наведи мышь</abbr>
      <br></br>
      <br></br>
      <form action=""> {/*без тега формы некоторый функционал типа "очистки полей формы" работать не будет*/}
        <label for="inputColorId"></label>
        {/*атрибут for привязывает надпись-лейбл к конкретному инпуту, так что при клике по нему фокус переходит на инпут*/}
        <input type="color" id="inputColorId" />  {/*it`s work not for all brausers*/}<br></br>
        <input type="date" />  {/*it`s work not for all brausers*/}<br></br>
        <input type="time" />  {/*it`s work not for all brausers*/}<br></br>
        <input type="datetime" />  {/*it`s work not for all brausers*/}<br></br>
        <input type="checkbox" /><br></br>
        <input type="file" /><br></br>
        <input type="radio" name="testRadio" />
        {/*radio инпут выбирает один вариант из нескольких инпутов объединённых общим атрибутом name*/}
        <input type="radio" name="testRadio" />
        <input type="radio" name="testRadio" /><br></br>
        <input title="просто инпут с type=button" type="button" /><br></br>
        <input type="submit" value="submit отправку" /><br></br>
        <input type="reset" value="очистить форму" /><br></br>
      </form>
      {/*типа новый тег от html5, по умолчанию добавляет бегающую полосу загрузки*/}
      <progress></progress> {/*имеет атрибуты max и value, можно использовать для показа загрузки*/}
      <details>
        <summary>Щёлкни меня, я спойлер</summary>
        Lorem ipsum dolor sit amet.
      </details>
    </div>
    <SelectForm />
    <CubeCSS />
    <Flip3DCard frontInfo={"123"} backInfo="456" />
    <Flip3DCard frontInfo={<img src='https://i.pinimg.com/736x/4c/70/63/4c7063212792902ae0d0d517a30aa1ac.jpg' alt={"logo"} />} backInfo="456" />
    <Flip3DCard />
    <CurlyText />
  </div>)
}

export default ExamplesList;