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


class PersonalityBox extends React.Component{

	render(){

		return (
			<div>				
				<Row>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={pink} waves='light' />}
    						title="Eva"
    						reveal={<p>Eva comes off as shy and innocent, but don’t be fooled! Lurking beneath the surface is a fiery romantic ready for adventure. She is often found in coffee shops, gazing out the window, wondering when her next passionate relationship will beckon. Eva feels most alive when she is following her heart. A dark and somewhat morbid sense of humor paired with her cutesy sentimental demeanor is a recipe for surprise. While she is often seeking intimacy, Eva is also rather secretive with her relationships, uncertain about when to fully trust others. She indulges her love for dance music by frequently visiting underground nightclubs with her companions. Eva is always optimistic and bursting with curiosity about new and exciting experiences.</p>}>
    						<p>Romantic</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={white} waves='light'/>}
    						title="Apollo"
    						reveal={<p>Always contemplating the “next big thing,” all of Apollo’s friends see him as an artistic visionary. He values form over function and is more than happy to let you know that he thinks your new shirt looks like a Scandinavian dish rag … whatever that means. Apollo can be blunt when it comes to aesthetics, but otherwise he’s cheerful, enthusiastic, and gentle. Almost every time a stranger at a bar asks him what he’s doing, Apollo replies whimsically, “I’m painstakingly transforming this desolate world into a progressive masterpiece for the gracious eyes of humanity”, to which they usually reply, “Oh… because it looks like you’re just making a smiley face out of peanuts.”  *sigh* Some people just don't understand modern art.</p>}>
    						<p>Artistic</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={green} waves='light'/>}
    						title="Momo"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Empowering</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={purple} waves='light'/>}
    						title="Maximus"
    						reveal={<p>A man of eloquence and glamour, Maximus takes pride in his high-class taste and hedonistic disposition. Most often seen wearing a 3-piece suit, Maximus enjoys taking expensive risks if he thinks they will be likely to yield luxurious pleasures. Some who are unacquainted with Maximus perceive him as a charismatic lunatic whose one and only goal in life is to be more decadent and outrageous than thou. Maximus insists that this is only partially true, explaining that he has many different goals in life, like to build a statue of himself made of fossilized caviar, or to purchase a champagne fountain, or even to win a game of chess with his arms tied behind his back by giving his opponent a piercing stare, intimidating them into forfeiting immediately. He admits that most of his ambitions are reason to believe he is in fact more decadent than you are. Although Maximus sometimes lets his arrogance get the best of him, he’s witty, charming, and consistently the life of the party.</p>}>
    						<p>Classy</p>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={cyan} waves='light'/>}
    						title="Onyx"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Philosophical</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={red} waves='light'/>}
    						title="Naomi"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Free-Spirited</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={orange} waves='light'/>}
    						title="Marvin"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Apathetic</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={yellow} waves='light' />}
    						title="Gia"
    						reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget accumsan arcu. Pellentesque auctor libero vel elit cursus sodales. Maecenas pellentesque lectus eu mauris ultricies feugiat. Maecenas scelerisque diam non elit pellentesque ultricies. Integer cursus at turpis et rhoncus.</p>}>
    						<p>Eccentric</p>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default PersonalityBox;
