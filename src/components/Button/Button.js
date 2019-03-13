import React from 'react';
import './styles.css';

const Button = props => {
  return (
    <div className="button-container" onClick={props.onClick}>
      <h3>{props.buttonText}</h3>
    </div>
  );
};

export default Button;
