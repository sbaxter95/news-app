import React from 'react';
import './styles.css';

const TopicCard = props => {
  return (
    <div className="topic-card">
      <p>{props.topic}</p>
      <i class="fa fa-bullhorn" aria-hidden="true" />
    </div>
  );
};

export default TopicCard;
