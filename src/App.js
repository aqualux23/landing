import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import {Icon} from 'react-materialize';
import Particles from 'react-particles-js';
import './App.css';
import ParticleCanvas from './RenderParticles.js';
import PersonalityBox from './RenderPersonalityBox.js';
import SurveyBox from './RenderSurveyBox.js';

import Logo from './img/logoWhite.png';
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
          <div className="Logo-Box"> 
            <img src={Logo} alt="Personafi Logo" height="150"/>
          </div>
          <div className="Title-Box">
            <h2 className="App-Title">Personality Survey Tool</h2>
          </div>
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

          <div className="Instruction-Block">
            <h1 className="Instruction-Header">Instructions</h1>
            <h2>What is a Proto-Personality?</h2>
            <h3>A Proto-Personality is conceptual yet-to-be-designed alternative personality for voice assistants like Alexa or Google Home. Each Proto-Personality, once fully designed by Personafi, will feature a unique backstory, personal opinions about the subjects that interest them, a unique sense of humor, and a fresh outlook on the world. Below are brief descriptions of eight different Proto-Personalities.</h3>
            <ol className="Instruction-List">
              <li>Read through the 8 Proto-Personalities described below.</li>
              <li>Tell us about which of the Proto-Personalities you liked the most and which platforms you would be most likely to use them on. Your feedback will help us guage demand for certain character elements, which will drive the design of our very first Virtual Personality!</li>
              <li>By giving us your feedback, you are eligible to enroll in future beta testing. You will be among the first to try out the first Virtual Personality that Personafi deploys. </li>
            </ol>
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
          <div className="Contact-info">
            <h2 className = "ContactTitle">Questions about Personafi? Comments about our Proto-Personalities?</h2>
            <h2 className = "Contact">Contact Us!</h2>
            
            <h2 className = "Email">info@personafi.co</h2>
          </div>
          <div>
            {/*<a href={facebookLink}><img src={facebookIcon} alt="Facebook Icon" style=({width: 20px;height: 20px}}/></a><a href={instagramLink}><img src={instagramIcon} alt="Instagram Icon"/></a><img src={twitterIcon} alt="Twitter Icon"/>*/}
          </div>
        </Flexbox>

      </div>
    );
  }
}

export default App;
