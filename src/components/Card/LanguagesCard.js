import React from 'react';
import './styles.css';

class LanguagesCard extends React.Component {
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
        <h3>{this.props.language}</h3>
        <img src={this.props.image} alt="flag" />
      </div>
    );
  }
}

export default LanguagesCard;
