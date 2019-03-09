import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopicCard = props => {
  return (
    <div className="topic-card">
      <h3>{props.topic}</h3>
      <div className="icon-container">
        <FontAwesomeIcon icon={props.icon} size="3x" />
      </div>
    </div>
  );
};

export default TopicCard;
