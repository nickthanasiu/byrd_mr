import React from 'react';

import './style.scss';

const TextArea = (props) => {
  return (
    <div className="text-area__container">
      <label
        htmlFor={props.name}
        className="text-area__label"
      >
        {props.title}
      </label>
      <textarea
        className="text-area__input"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeHolder}
      />
    </div>
  );
};

export default TextArea;
