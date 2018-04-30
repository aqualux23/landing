import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import * as Survey from 'survey-react';
import Sortable from 'sortablejs';
import './survey.css';

var surveyJSON = { 
	title: "Tell us what you think", 
	completedHtml: "<h1>Thanks!</h1>",
	pages: [
  {
   name: "page1",
   elements: [
    {
     type: "checkbox",
     name: "Personality Choice",
     title: "I like these personalities:",
     choices: [
      {
       value: "starbuck",
       text: "Starbuck"
      },
      {
       value: "lee",
       text: "Lee"
      },
      {
       value: "chief",
       text: "Chief"
      },
      {
       value: "sharon",
       text: "Sharon"
      }
     ]
    },
    {
     type: "panel",
     name: "panel1",
     elements: [
      {
       type: "rating",
       name: "Starbuck Friend Rating",
       visibleIf: "{Personality Choice} contains \"starbuck\"",
       title: "Starbuck",
       rateValues: [
        "5",
        "4",
        3,
        "2",
        "1"
       ]
      },
      {
       type: "rating",
       name: "Lee Friend Rating",
       visibleIf: "{Personality Choice} contains \"lee\"",
       title: "Lee",
       rateValues: [
        "5",
        "4",
        3,
        "2",
        "1"
       ]
      },
      {
       type: "rating",
       name: "Chief Friend Rating",
       visibleIf: "{Personality Choice} contains \"chief\"",
       title: "Chief",
       rateValues: [
        "5",
        "4",
        3,
        "2",
        "1"
       ]
      },
      {
       type: "rating",
       name: "Sharon Friend Rating",
       visibleIf: "{Personality Choice} contains \"sharon\"",
       title: "Sharon",
       rateValues: [
        "5",
        "4",
        3,
        "2",
        "1"
       ]
      }
     ],
     title: "If one of my friends had this personality, I would enjoy that friend."
    },
    {
     type: "panel",
     name: "panel3",
     title: "If one of my friends had this personality, I would invite them to parties."
    }
   ]
  },
  {
   name: "page2",
   elements: [
    {
     type: "checkbox",
     name: "Devices Used",
     title: "I use these devices:",
     choices: [
      {
       value: "alexa",
       text: "Amazon Alexa"
      },
      {
       value: "gHome",
       text: "Google Home"
      },
      {
       value: "iphone",
       text: "iPhone"
      },
      {
       value: "android",
       text: "Android"
      }
     ]
    },
    {
     type: "rating",
     name: "Would Use Alexa More",
     visibleIf: "{Devices Used} contains \"alexa\"",
     title: "I would use Amazon Alexa more if it spoke to me with a unique personality.",
     rateValues: [
      "5",
      "4",
      "3",
      "2",
      "1"
     ]
    },
    {
     type: "rating",
     name: "Would Use gHome More",
     visibleIf: "{Devices Used} contains \"gHome\"",
     title: "I would use Google Home more if it spoke to me with a unique personality.",
     rateValues: [
      "5",
      "4",
      "3",
      "2",
      "1"
     ]
    }
   ]
  },
  {
   name: "page3",
   elements: [
    {
     type: "panel",
     name: "panel2",
     elements: [
      {
       type: "radiogroup",
       name: "Personality For Beta",
       titleLocation: "hidden",
       choices: [
        {
         value: "starbuck",
         text: "Starbuck"
        },
        {
         value: "lee",
         text: "Lee"
        },
        {
         value: "chief",
         text: "Chief"
        },
        {
         value: "sharon",
         text: "Sharon"
        }
       ]
      },
      {
       type: "dropdown",
       name: "Platform Preference",
       visibleIf: "{Devices Used} contains \"alexa\" and {Devices Used} contains \"gHome\"",
       title: "I would prefer to Beta Test on ...",
       choices: [
        {
         value: "alexa",
         text: "Alexa"
        },
        {
         value: "gHome",
         text: "Google Home"
        }
       ]
      },
      {
       type: "text",
       name: "Starbuck Alexa Beta",
       visibleIf: "({Personality For Beta} = \"starbuck\" and {Devices Used} = \"alexa\") \nor ({Personality For Beta} = \"starbuck\" and {Platform Preference} = \"alexa\")\n",
       title: "Beta Test the Starbuck Personality on Amazon Alexa:",
       inputType: "email",
       placeHolder: "Enter Email"
      },
      {
       type: "text",
       name: "Lee Alexa Beta",
       visibleIf: "({Personality For Beta} = \"lee\" and {Devices Used} = \"alexa\")\nor ({Personality For Beta} = \"lee\" and {Platform Preference} = \"alexa\")",
       title: "Beta Test the Lee Personality on Amazon Alexa:",
       inputType: "email",
       placeHolder: "Enter Email"
      },
      {
       type: "text",
       name: "Chief Alexa Beta",
       visibleIf: "({Personality For Beta} = \"chief\" and {Devices Used} = \"alexa\")\nor ({Personality For Beta} = \"chief\" and {Platform Preference} = \"alexa\")",
       title: "Beta Test the Chief Personality on Amazon Alexa:",
       inputType: "email",
       placeHolder: "Enter Email"
      },
      {
       type: "text",
       name: "Sharon Alexa Beta",
       visibleIf: "({Personality For Beta} = \"sharon\"  and {Devices Used} = \"alexa\")\nor ({Personality For Beta} = \"sharon\" and {Platform Preference} = \"alexa\")",
       title: "Beta Test the Sharon Personality on Amazon Alexa:",
       inputType: "email",
       placeHolder: "Enter Email"
      },
      {
       type: "text",
       name: "Starbuck gHome Beta",
       visibleIf: "({Personality For Beta} = \"starbuck\" and {Devices Used} = \"gHome\")\nor ({Personality For Beta} = \"starbuck\" and {Platform Preference} = \"gHome\")",
       title: "Beta Test the Starbuck Personality on Google Home:",
       inputType: "email",
       placeHolder: "Enter Email"
      },
      {
       type: "text",
       name: "Lee gHome Beta",
       visibleIf: "({Personality For Beta} = \"lee\" and {Devices Used} = \"gHome\")\nor ({Personality For Beta} = \"lee\" and {Platform Preference} = \"gHome\")",
       title: "Beta Test the Lee Personality on Google Home:",
       inputType: "email",
       placeHolder: "Enter Email"
      },
      {
       type: "text",
       name: "Chief gHome Beta ",
       visibleIf: "({Personality For Beta} = \"chief\" and {Devices Used} = \"gHome\")\nor ({Personality For Beta} = \"chief\" and {Platform Preference} = \"gHome\")",
       title: "Beta Test the Chief Personality on Google Home:",
       inputType: "email",
       placeHolder: "Enter Email"
      },
      {
       type: "text",
       name: "Sharon gHome Beta",
       visibleIf: "({Personality For Beta} = \"sharon\" and {Devices Used} = \"gHome\")\nor ({Personality For Beta} = \"sharon\" and {Platform Preference} = \"gHome\")",
       title: "Beta Test the Sharon Personality on Google Home:",
       inputType: "email",
       placeHolder: "Enter Email"
      }
     ],
     title: "I am interested in Beta Testing ..."
    }
   ]
  }
 ],
 sendResultOnPageNext: true,
 showQuestionNumbers: "off",
 showProgressBar: "bottom",
 pagePrevText: "Prev",
 pageNextText: "Next",
 completeText: "Done"
	};
	  
	

function sendDataToServer(survey){
	survey.sendResult('33927e58-75bd-401c-a6cd-beb22c9797b5');
}

class SurveyBox extends React.Component{

	render(){

		return (
			<Survey.Survey json={surveyJSON} onComplete={sendDataToServer}/>    	
			);
	}
}

export default SurveyBox;