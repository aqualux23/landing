import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import * as Survey from 'survey-react';
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
	     name: "Personality Choices",
	     title: "I like these personalities...",
	     colCount: 4,
	     choices: [
	      {
	       value: "eva",
	       text: "Eva"
	      },
	      {
	       value: "apollo",
	       text: "Apollo"
	      },
	      {
	       value: "momo",
	       text: "Momo"
	      },
	      {
	       value: "maximus",
	       text: "Maximus"
	      },
	      {
	       value: "onyx",
	       text: "Onyx"
	      },
	      {
	       value: "naomi",
	       text: "Naomi"
	      },
	      {
	       value: "marvin",
	       text: "Marvin"
	      },
	      {
	       value: "gia",
	       text: "Gia"
	      }
	     ]
	    },
	    {
	     type: "panel",
	     name: "questionPanel",
	     elements: [
	      {
	       type: "panel",
	       name: "Party Invite",
	       elements: [
	        {
	         type: "rating",
	         name: "evaQ1",
	         visibleIf: "{Personality Choices} contains \"eva\"",
	         title: "If I met someone with this personality, I would love to get to know them!"
	        },
	        {
	         type: "rating",
	         name: "evaQ2",
	         visibleIf: "{Personality Choices} contains \"eva\"",
	         title: "If one of my friends had this personality, I would totally invite them to parties!"
	        },
	        {
	         type: "rating",
	         name: "evaQ3",
	         visibleIf: "{Personality Choices} contains \"eva\"",
	         title: "If one of my friends had this personality, they might become a close friend."
	        },
	        {
	         type: "rating",
	         name: "evaQ4",
	         visibleIf: "{Personality Choices} contains \"eva\"",
	         title: "I think this personality would make me laugh."
	        },
	        {
	         type: "rating",
	         name: "evaQ5",
	         visibleIf: "{Personality Choices} contains \"eva\"",
	         title: "I think this personality would make me curious."
	        }
	       ],
	       title: "Eva"
	      }
	     ],
	     visibleIf: "{Personality Choices} contains \"eva\" \n",
	     title: "1 = Hell No! | 5 = Hell Yes!"
	    },
	    {
	     type: "panel",
	     name: "apolloPanel",
	     elements: [
	      {
	       type: "panel",
	       name: "apolloPanel",
	       elements: [
	        {
	         type: "rating",
	         name: "apolloQ1",
	         visibleIf: "{Personality Choices} contains \"apollo\"",
	         title: "If I met someone with this personality, I would love to get to know them!"
	        },
	        {
	         type: "rating",
	         name: "apolloQ2",
	         visibleIf: "{Personality Choices} contains \"apollo\"",
	         title: "If one of my friends had this personality, I would totally invite them to parties!"
	        },
	        {
	         type: "rating",
	         name: "apolloQ3",
	         visibleIf: "{Personality Choices} contains \"apollo\"",
	         title: "If one of my friends had this personality, they might become a close friend."
	        },
	        {
	         type: "rating",
	         name: "apolloQ4",
	         visibleIf: "{Personality Choices} contains \"apollo\"",
	         title: "I think this personality would make me laugh."
	        },
	        {
	         type: "rating",
	         name: "apolloQ5",
	         visibleIf: "{Personality Choices} contains \"apollo\"",
	         title: "I think this personality would make me curious."
	        }
	       ],
	       title: "Apollo"
	      }
	     ],
	     visibleIf: "{Personality Choices} contains \"apollo\" \n",
	     title: "1 = Hell No! | 5 = Hell Yes!"
	    },
	    {
	     type: "panel",
	     name: "momoPanel",
	     elements: [
	      {
	       type: "panel",
	       name: "panel10",
	       elements: [
	        {
	         type: "rating",
	         name: "momoQ1",
	         visibleIf: "{Personality Choices} contains \"momo\"",
	         title: "If I met someone with this personality, I would love to get to know them!"
	        },
	        {
	         type: "rating",
	         name: "momoQ2",
	         visibleIf: "{Personality Choices} contains \"momo\"",
	         title: "If one of my friends had this personality, I would totally invite them to parties!"
	        },
	        {
	         type: "rating",
	         name: "momoQ3",
	         visibleIf: "{Personality Choices} contains \"apollo\"",
	         title: "If one of my friends had this personality, they might become a close friend."
	        },
	        {
	         type: "rating",
	         name: "momoQ4",
	         visibleIf: "{Personality Choices} contains \"momo\"",
	         title: "I think this personality would make me laugh."
	        },
	        {
	         type: "rating",
	         name: "momoQ5",
	         visibleIf: "{Personality Choices} contains \"momo\"",
	         title: "I think this personality would make me curious."
	        }
	       ],
	       title: "Momo"
	      }
	     ],
	     visibleIf: "{Personality Choices} contains \"momo\" \n",
	     title: "1 = Hell No! | 5 = Hell Yes!"
	    },
	    {
	     type: "panel",
	     name: "panel2",
	     elements: [
	      {
	       type: "panel",
	       name: "panel3",
	       elements: [
	        {
	         type: "rating",
	         name: "maxQ1",
	         visibleIf: "{Personality Choices} contains \"maximus\"",
	         title: "If I met someone with this personality, I would love to get to know them!"
	        },
	        {
	         type: "rating",
	         name: "maxQ2",
	         visibleIf: "{Personality Choices} contains \"maximus\"",
	         title: "If one of my friends had this personality, I would totally invite them to parties!"
	        },
	        {
	         type: "rating",
	         name: "maxQ3",
	         visibleIf: "{Personality Choices} contains \"maximus\"",
	         title: "If one of my friends had this personality, they might become a close friend."
	        },
	        {
	         type: "rating",
	         name: "maxQ4",
	         visibleIf: "{Personality Choices} contains \"maximus\"",
	         title: "I think this personality would make me laugh."
	        },
	        {
	         type: "rating",
	         name: "maxQ5",
	         visibleIf: "{Personality Choices} contains \"maximus\"",
	         title: "I think this personality would make me curious."
	        }
	       ],
	       title: "Maximus"
	      }
	     ],
	     visibleIf: "{Personality Choices} contains \"maximus\" \n",
	     title: "1 = Hell No! | 5 = Hell Yes!"
	    },
	    {
	     type: "panel",
	     name: "onyxPanel",
	     elements: [
	      {
	       type: "panel",
	       name: "panel5",
	       elements: [
	        {
	         type: "rating",
	         name: "onyxQ1",
	         visibleIf: "{Personality Choices} contains \"onyx\"",
	         title: "If I met someone with this personality, I would love to get to know them!"
	        },
	        {
	         type: "rating",
	         name: "onyxQ2",
	         visibleIf: "{Personality Choices} contains \"onyx\"",
	         title: "If one of my friends had this personality, I would totally invite them to parties!"
	        },
	        {
	         type: "rating",
	         name: "onyxQ3",
	         visibleIf: "{Personality Choices} contains \"onyx\"",
	         title: "If one of my friends had this personality, they might become a close friend."
	        },
	        {
	         type: "rating",
	         name: "onyxQ4",
	         visibleIf: "{Personality Choices} contains \"onyx\"",
	         title: "I think this personality would make me laugh."
	        },
	        {
	         type: "rating",
	         name: "onyxQ5",
	         visibleIf: "{Personality Choices} contains \"onyx\"",
	         title: "I think this personality would make me curious."
	        }
	       ],
	       title: "Onyx"
	      }
	     ],
	     visibleIf: "{Personality Choices} contains \"onyx\" \n",
	     title: "1 = Hell No! | 5 = Hell Yes!"
	    },
	    {
	     type: "panel",
	     name: "naomiPanel",
	     elements: [
	      {
	       type: "panel",
	       name: "panel7",
	       elements: [
	        {
	         type: "rating",
	         name: "naomiQ1",
	         visibleIf: "{Personality Choices} contains \"naomi\"",
	         title: "If I met someone with this personality, I would love to get to know them!"
	        },
	        {
	         type: "rating",
	         name: "naomiQ2",
	         visibleIf: "{Personality Choices} contains \"naomi\"",
	         title: "If one of my friends had this personality, I would totally invite them to parties!"
	        },
	        {
	         type: "rating",
	         name: "naomiQ3",
	         visibleIf: "{Personality Choices} contains \"naomi\"",
	         title: "If one of my friends had this personality, they might become a close friend."
	        },
	        {
	         type: "rating",
	         name: "naomiQ4",
	         visibleIf: "{Personality Choices} contains \"naomi\"",
	         title: "I think this personality would make me laugh."
	        },
	        {
	         type: "rating",
	         name: "naomiQ5",
	         visibleIf: "{Personality Choices} contains \"naomi\"",
	         title: "I think this personality would make me curious."
	        }
	       ],
	       title: "Naomi"
	      }
	     ],
	     visibleIf: "{Personality Choices} contains \"naomi\" \n",
	     title: "1 = Hell No! | 5 = Hell Yes!"
	    },
	    {
	     type: "panel",
	     name: "marvinPanel",
	     elements: [
	      {
	       type: "panel",
	       name: "panel9",
	       elements: [
	        {
	         type: "rating",
	         name: "marvinQ1",
	         visibleIf: "{Personality Choices} contains \"marvin\"",
	         title: "If I met someone with this personality, I would love to get to know them!"
	        },
	        {
	         type: "rating",
	         name: "marvinQ2",
	         visibleIf: "{Personality Choices} contains \"marvin\"",
	         title: "If one of my friends had this personality, I would totally invite them to parties!"
	        },
	        {
	         type: "rating",
	         name: "marvinQ3",
	         visibleIf: "{Personality Choices} contains \"marvin\"",
	         title: "If one of my friends had this personality, they might become a close friend."
	        },
	        {
	         type: "rating",
	         name: "marvinQ4",
	         visibleIf: "{Personality Choices} contains \"marvin\"",
	         title: "I think this personality would make me laugh."
	        },
	        {
	         type: "rating",
	         name: "marvinQ5",
	         visibleIf: "{Personality Choices} contains \"marvin\"",
	         title: "I think this personality would make me curious."
	        }
	       ],
	       title: "Marvin"
	      }
	     ],
	     visibleIf: "{Personality Choices} contains \"marvin\" \n",
	     title: "1 = Hell No! | 5 = Hell Yes!"
	    },
	    {
	     type: "panel",
	     name: "giaPanel",
	     elements: [
	      {
	       type: "panel",
	       name: "panel12",
	       elements: [
	        {
	         type: "rating",
	         name: "giaQ1",
	         visibleIf: "{Personality Choices} contains \"gia\"",
	         title: "If I met someone with this personality, I would love to get to know them!"
	        },
	        {
	         type: "rating",
	         name: "giaQ2",
	         visibleIf: "{Personality Choices} contains \"gia\"",
	         title: "If one of my friends had this personality, I would totally invite them to parties!"
	        },
	        {
	         type: "rating",
	         name: "giaQ3",
	         visibleIf: "{Personality Choices} contains \"gia\"",
	         title: "If one of my friends had this personality, they might become a close friend."
	        },
	        {
	         type: "rating",
	         name: "giaQ4",
	         visibleIf: "{Personality Choices} contains \"gia\"",
	         title: "I think this personality would make me laugh."
	        },
	        {
	         type: "rating",
	         name: "giaQ5",
	         visibleIf: "{Personality Choices} contains \"gia\"",
	         title: "I think this personality would make me curious."
	        }
	       ],
	       title: "Gia"
	      }
	     ],
	     visibleIf: "{Personality Choices} contains \"gia\" \n",
	     title: "1 = Hell No! | 5 = Hell Yes!"
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
	       text: "Alexa"
	      },
	      {
	       value: "gHome",
	       text: "Google home"
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
	     type: "panel",
	     name: "panel1",
	     elements: [
	      {
	       type: "rating",
	       name: "useAlexa",
	       visibleIf: "{Devices Used} contains \"alexa\"",
	       title: "I would use Amazon Alexa more if I could modify its personality."
	      },
	      {
	       type: "rating",
	       name: "use gHome",
	       visibleIf: "{Devices Used} contains \"gHome\"",
	       title: "I would use Google Home more if I could modify its personality."
	      },
	      {
	       type: "rating",
	       name: "If I could access my Personafi Personalities on iPhone, I would enjoy this feature.",
	       visibleIf: "{Devices Used} contains \"iphone\"",
	       title: "If I could access my Personafi Personalities on iPhone, I would use this feature.",
	       valueName: "If I could access my Personafi Personalities on iPhone, I would enjoy this feature"
	      },
	      {
	       type: "rating",
	       name: "If I could access my Personafi Personalities on Android, I would enjoy this feature.",
	       visibleIf: "{Devices Used} contains \"android\"",
	       title: "If I could access my Personafi Personalities on Android, I would use this feature.",
	       valueName: "If I could access my Personafi Personalities on Android, I would enjoy this feature"
	      }
	     ]
	    }
	   ]
	  },
	  {
	   name: "page3",
	   elements: [
	    {
	     type: "dropdown",
	     name: "betaInterest",
	     title: "I am interested in Beta Testing ...",
	     choices: [
	      {
	       value: "yes",
	       text: "Yes!"
	      },
	      {
	       value: "no",
	       text: "No!"
	      }
	     ],
	     optionsCaption: "Yes/No"
	    },
	    {
	     type: "radiogroup",
	     name: "betaWhich",
	     visibleIf: "{betaInterest} = \"yes\" ",
	     title: "I am most interested in Beta Testing",
	     choices: [
	      {
	       value: "eva",
	       text: "Eva",
	       visibleIf: "{Personality Choices} contains \"eva\""
	      },
	      {
	       value: "apollo",
	       text: "Apollo",
	       visibleIf: "{Personality Choices} contains \"apollo\""
	      },
	      {
	       value: "momo",
	       text: "Momo",
	       visibleIf: "{Personality Choices} contains \"momo\""
	      },
	      {
	       value: "maximus",
	       text: "Maximus",
	       visibleIf: "{Personality Choices} contains \"maximus\""
	      },
	      {
	       value: "onyx",
	       text: "Onyx",
	       visibleIf: "{Personality Choices} contains \"onyx\""
	      },
	      {
	       value: "naomi",
	       text: "Naomi",
	       visibleIf: "{Personality Choices} contains \"naomi\""
	      },
	      {
	       value: "marvin",
	       text: "Marvin",
	       visibleIf: "{Personality Choices} contains \"marvin\""
	      },
	      {
	       value: "gia",
	       text: "Gia",
	       visibleIf: "{Personality Choices} contains \"gia\""
	      }
	     ]
	    },
	    {
	     type: "text",
	     name: "betaEva",
	     visibleIf: "{betaInterest} = \"yes\" and {betaWhich} = \"eva\"",
	     title: "Beta Test the Eva Personality as Soon as It Becomes Available!",
	     inputType: "email",
	     placeHolder: "Enter Email"
	    },
	    {
	     type: "text",
	     name: "apolloBeta",
	     visibleIf: "{betaInterest} = \"yes\" and {betaWhich} = \"apollo\"",
	     title: "Beta Test the Apollo Personality as Soon as It Becomes Available!",
	     inputType: "email",
	     placeHolder: "Enter Email"
	    },
	    {
	     type: "text",
	     name: "Beta Test the Momo Personality as Soon as It Becomes Available:",
	     visibleIf: "{betaInterest} = \"yes\" and {betaWhich} = \"momo\"",
	     title: "Beta Test the Momo Personality as Soon as It Becomes Available!",
	     inputType: "email",
	     placeHolder: "Enter Email"
	    },
	    {
	     type: "text",
	     name: "maxBeta",
	     visibleIf: "{betaInterest} = \"yes\" and {betaWhich} = \"maximus\"",
	     title: "Beta Test the Maximus Personality as Soon as It Becomes Available!",
	     inputType: "email",
	     placeHolder: "Enter Email"
	    },
	    {
	     type: "text",
	     name: "onyxBeta",
	     visibleIf: "{betaInterest} = \"yes\" and {betaWhich} = \"onyx\"",
	     title: "Beta Test the Onyx Personality as Soon as It Becomes Available!",
	     inputType: "email",
	     placeHolder: "Enter Email"
	    },
	    {
	     type: "text",
	     name: "naomiBeta",
	     visibleIf: "{betaInterest} = \"yes\" and {betaWhich} = \"naomi\"",
	     title: "Beta Test the Naomi Personality as Soon as It Becomes Available!",
	     inputType: "email",
	     placeHolder: "Enter Email"
	    },
	    {
	     type: "text",
	     name: "marvinBeta",
	     visibleIf: "{betaInterest} = \"yes\" and {betaWhich} = \"marvin\"",
	     title: "Beta Test the Marvin Personality as Soon as It Becomes Available!",
	     inputType: "email",
	     placeHolder: "Enter Email"
	    },
	    {
	     type: "text",
	     name: "giaBeta",
	     visibleIf: "{betaInterest} = \"yes\" and {betaWhich} = \"gia\"",
	     title: "Beta Test the Gia Personality as Soon as It Becomes Available!",
	     inputType: "email",
	     placeHolder: "Enter Email"
	    },
	    {
	     type: "comment",
	     name: "question1",
	     title: "Additional Comments and Feedback:"
	    }
	   ]
	  }
	 ],
	 showTitle: false,
	 showQuestionNumbers: "off",
	 showProgressBar: "bottom",
	 pageNextText: "Next",
	 completeText: "Complete"
	};
	  
	

function sendDataToServer(survey){
	survey.sendResult('33927e58-75bd-401c-a6cd-beb22c9797b5');
}

class SurveyBox extends React.Component{

	render(){

		return (
			<div>
				<Survey.Survey json={surveyJSON} onComplete={sendDataToServer}/>   
			</div> 	
			);
	}
}

export default SurveyBox;