import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputElemenent = null;
  const inputClasses = [classes.InputElement];
  if (props.invalid && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case ('input'):
      inputElemenent = <input
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}/>
      break;
    case ('textarea'):
      inputElemenent = <textarea
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}/>
      break;
    case ('select'):
      inputElemenent = (
                  <select
                      className={classes.InputElement}
                      value={props.value}
                      onChange={props.changed}>
                      {props.elementConfig.options.map(option => (
                          <option
                            key={option.value}
                            value={option.value}>
                            {option.displayValue}
                          </option>
                      ))}
                  </select>);
       break;
    default:
      inputElemenent = <input
                        className={classes.InputElement}
                        {...props.elementConfig}
                        value={props.value}/>
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElemenent}
    </div>
  );
};

export default input;
