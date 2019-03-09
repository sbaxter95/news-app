import React, { Component } from 'react';
import './App.css';
import TopicCard from './components/Card/TopicCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>News App</h1>
        <h2>What topics are you interested in?</h2>
        <div className="flex-grid">
          <TopicCard topic="Politics" />
          <TopicCard topic="Politics" />
          <TopicCard topic="Politics" />
        </div>
      </div>
    );
  }
}

export default App;
