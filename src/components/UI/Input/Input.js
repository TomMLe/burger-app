import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputElemenent = null;

  switch (props.inputtype) {
    case ('input'):
      inputElemenent = <input className={classes.InputElement} {...props}/>
      break;
    case ('textarea'):
      inputElemenent = <textarea className={classes.InputElement} {...props} />
      break;
    default:
      inputElemenent = <input className={classes.InputElement} {...props} />
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElemenent}
    </div>
  );
};

export default input;
