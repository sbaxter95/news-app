import React, { Component } from 'react';
import './App.css';

import TopicCard from './components/Card/TopicCard';
import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';

import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faFootballBall } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>News App</h1>
        <h2>What topics are you interested in?</h2>
        <Grid>
          <TopicCard topic="Politics" icon={faBullhorn} />
          <TopicCard topic="Business" icon={faBriefcase} />
          <TopicCard topic="Health" icon={faHeartbeat} />
        </Grid>
        <Grid>
          <TopicCard topic="General" icon={faNewspaper} />
          <TopicCard topic="Entertainment" icon={faMusic} />
          <TopicCard topic="Science" icon={faMicroscope} />
        </Grid>
        <Grid>
          <TopicCard topic="Sports" icon={faFootballBall} />
          <TopicCard topic="Technology" icon={faLaptopCode} />
          <TopicCard topic="None" icon={faTimes} />
        </Grid>
        <ButtonContainer>
          <Button buttonText="Continue" />
        </ButtonContainer>
      </div>
    );
  }
}

export default App;
