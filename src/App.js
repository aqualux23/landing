import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import {Icon} from 'react-materialize';
import Particles from 'react-particles-js';
import './App.css';
import ParticleCanvas from './RenderParticles.js';
import PersonalityBox from './RenderPersonalityBox.js';
import SurveyBox from './RenderSurveyBox.js';

class App extends Component {
  render() {
    return (
      // Outermost container
      <div className="App"> 

        {/* Web page header */}
        <header className="App-header"> 
          <h1 className="App-title">Personafi</h1>
          <h2 className="App-subtitle">A Personality Marketplace</h2>
        </header>

          {/* Calls component to generate particle background */}
          <ParticleCanvas/>

          <div className="Video-Block">
            {/* Placeholder flexbox for where product video will eventually go */}
            <Flexbox flexDirection="column" minWidth="35em" className="Video">
              <span className="playcontainer"><Icon large className="Play-Button">play_arrow</Icon></span>
            </Flexbox>
          </div>

          {/* Heading for personality card section*/}
          <div className="Proto-Personalities">

          <h1 className="Proto-Header">Proto-Personalities</h1>

          </div>

          {/* Calls component that displays all the personality cards */}
          <PersonalityBox className ="Personality-box"/>
          
          {/* Calls component that displays the survey */}
          <SurveyBox className="Survey-box"/>
          
        
        {/* Web page footer */}  
        <Flexbox className="App-footer">
          <h2 className = "Contact">info@personafi.co</h2>
        </Flexbox>

      </div>
    );
  }
}

export default App;
