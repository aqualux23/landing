import React from 'react';
import './App.css';
// Import Materialize components
import {Row, Col, Icon, Button, Card, CardTitle} from 'react-materialize';
// Import Orb Images
import white from './img/WhiteOrb.jpg';
import red from './img/RedOrb.jpg';
import orange from './img/OrangeOrb.jpg';
import yellow from './img/YellowOrb.jpg';
import pink from './img/PinkOrb.jpg';
import cyan from './img/CyanOrb.jpg';
import purple from './img/PurpleOrb.jpg';
import green from './img/GreenOrb.jpg';

//const klass = classNames(`${hoverable} ${center-aligned}`);
class PersonalityBox extends React.Component{

	render(){

		return (
			<div>				
				<Row>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={pink} waves='light'/>}
    						title="Eva"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Balls</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={white} waves='light'/>}
    						title="Apollo"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Quote</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={green} waves='light'/>}
    						title="Momo"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Quote</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={purple} waves='light'/>}
    						title="Maximus"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Quote</p>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={cyan} waves='light'/>}
    						title="Onyx"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Quote</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={red} waves='light'/>}
    						title="Naomi"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Quote</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={orange} waves='light'/>}
    						title="Marvin"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Quote</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={yellow} waves='light' />}
    						title="Gia"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Quote</p>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default PersonalityBox;
