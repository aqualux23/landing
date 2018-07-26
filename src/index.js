import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBUuCBTz7l5Wyoyo08uVCeJA7bqkceDgHU",
    authDomain: "personafisurvey.firebaseapp.com",
    databaseURL: "https://personafisurvey.firebaseio.com",
    projectId: "personafisurvey",
    storageBucket: "personafisurvey.appspot.com",
    messagingSenderId: "77401267244"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
