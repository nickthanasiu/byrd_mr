import React from 'react';

import './style.scss';

const Input = (props) => {
  return (
    <div className="input__container">
      <label
        htmlFor={props.name}
        className="input__label"
      >
        {props.title}
      </label>
      <input
        className="input__input"
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeHolder}
      />
    </div>
  );
};

export default Input
