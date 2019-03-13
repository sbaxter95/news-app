import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Topics from './pages/Topics';
import Home from './pages/Home';
import Languages from './pages/Languages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/topics" component={Topics} />
            <Route path="/languages" component={Languages} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
