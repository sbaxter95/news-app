import React from 'react';
import './styles.css';

const Grid = props => {
  return <div className="flex-grid">{props.children}</div>;
};

export default Grid;
