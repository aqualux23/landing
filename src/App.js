import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import {Icon} from 'react-materialize';
import Particles from 'react-particles-js';
import './App.css';
import ParticleCanvas from './RenderParticles.js';
import PersonalityBox from './RenderPersonalityBox.js';
import SurveyBox from './RenderSurveyBox.js';

import Logo from './img/logo.png';
import Vid from './vid/video.mp4';

import facebookIcon from './img/Facebook.png';
import instagramIcon from './img/Instagram.png';
import twitterIcon from './img/Twitter.png';

const facebookLink = "https://www.facebook.com/pg/personafi";
const instagramLink = "https://www.instagram.com/personafi_official/";

class App extends Component {
  render() {
    return (
      // Outermost container
      <div className="App"> 

        {/* Web page header */}
        <header className="App-header"> 
          <img src={Logo} height="150"/>
        </header>

          {/* Calls component to generate particle background */}
          <ParticleCanvas/>

          <div className="Video-Block">
            {/* Logo video placeholder for product video (still in production) */}
            <Flexbox flexDirection="column" minWidth="35em" className="Video">
              <video width="100%" height = "100%" controls>
                <source src={Vid} type="video/mp4"></source>
              </video>
            </Flexbox>
          </div>

          {/* Heading for personality card section*/}
          <div className="Proto-Personalities">

            <h1 className="Proto-Header">Proto-Personalities</h1>

          </div>
          <div className="personality-container">
            {/* Calls component that displays all the personality cards */}
            <PersonalityBox className ="Personality-box"/>
          </div>

          {/* Calls component that displays the survey */}
          <SurveyBox className="Survey-box"/>
          
        
        {/* Web page footer */}  
        <Flexbox className="App-footer">
          
          <h2 className = "ContactTitle">Questions or Comments?</h2>
          <h2 className = "Contact">Contact Us!</h2>
          
          <h2 className = "Email">info@personafi.co</h2>
          <div>
            {/*<a href={facebookLink}><img src={facebookIcon} alt="Facebook Icon" style=({width: 20px;height: 20px}}/></a><a href={instagramLink}><img src={instagramIcon} alt="Instagram Icon"/></a><img src={twitterIcon} alt="Twitter Icon"/>*/}
          </div>
        </Flexbox>

      </div>
    );
  }
}

export default App;
