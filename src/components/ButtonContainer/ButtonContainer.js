import React from 'react';
import './styles.css';

const ButtonContainer = props => {
  return <div className="flex-grid-button">{props.children}</div>;
};

export default ButtonContainer;
