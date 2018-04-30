import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './App.css';
import PersonalityBox from './RenderPersonalityBox.js';
import SurveyBox from './RenderSurveyBox.js';

class App extends Component {
  render() {
    return (
      // Outermost container
      <div className="App"> 

        <header className="App-header"> 
          <h1 className="App-title">Personafi</h1>
          <h2 className="App-subtitle">A Personality Marketplace</h2>
        </header>

        <div>
          <Flexbox flexDirection="column" minWidth="35em" className="Video-block">
          </Flexbox>

          <PersonalityBox/>
          
          <SurveyBox/>
          
        </div>

        <Flexbox className="App-footer">
          <h2 className = "Contact">info@personafi.co</h2>
        </Flexbox>
      </div>
    );
  }
}

export default App;
