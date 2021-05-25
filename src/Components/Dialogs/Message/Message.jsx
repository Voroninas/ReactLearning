import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
  let styleObj
  props.id === "2" ? styleObj = s.messageRight : styleObj = s.messages
  return <div className={styleObj} >{props.message}</div>
}

export default Message;