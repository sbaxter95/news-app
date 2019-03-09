import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TopicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  toggleClass = () => {
    const isSelected = this.state.selected;
    this.setState({ selected: !isSelected });
  };

  render() {
    let className = 'topic-card';
    if (this.state.selected) {
      className = 'topic-card-selected';
    } else {
      className = 'topic-card';
    }
    return (
      <div className={className} onClick={this.toggleClass}>
        <h3>{this.props.topic}</h3>
        <div className="icon-container">
          <FontAwesomeIcon icon={this.props.icon} size="3x" />
        </div>
      </div>
    );
  }
}

export default TopicCard;
