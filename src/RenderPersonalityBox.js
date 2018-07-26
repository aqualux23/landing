import React from 'react';
import './App.css';
// Import Materialize components
import {Row, Col, Card, CardTitle} from 'react-materialize';
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
    						reveal={<p>Momo believes in constantly challenging the status quo. During college, she spent half her time organizing and attending social activism rallies and the other half intently studying political science. Momo has a way of empowering everybody in the room through her forthright and confident demeanor. Although she has sometimes been called fanatical, Momo stands firm and insists on standing up for issues she believes are important. A long supporter of feminist equality principles, she consistently challenges the gender roles so often assumed in our society. Momo has a strong maternal instinct, often looking after those who make friends with her. Her compassion often takes the form of baked treats, a hobby for which she proudly admits her fanaticism.</p>}>
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
    						reveal={<p>Often deep in thought while staring off into the distance at nothing in particular, Onyx is a creature of reflection. Disinterested in small talk, he usually chooses to speak only when he has something remarkable to say. Onyx frequents used book stores and art museums; he enjoys the pervasive silence and the bemusement inherent in abstract art and literature. Onyx tends to keep to himself, but the few friends that he has cherish him for his strong balance of imagination and logical reasoning; they never leave a conversation with Onyx without something profound to ponder. Although he excels in all things cerebral, Onyx has a hard time connecting emotionally with people and can come off as a bit cold sometimes. He doesn’t have many grand ambitions in life, preferring to take the leisurely path through life. Like a leaf in the river, Onyx floats from one experience to another, which, incidentally, has yielded some very…*ahem*… “interesting” experiences.</p>}>
    						<p>Philosophical</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={red} waves='light'/>}
    						title="Naomi"
    						reveal={<p>Naomi brings high-energy everywhere she goes. On any given day, Naomi might be found exploring in some far corner of the world, base jumping off a cliff,  or fencing competitively. Life is just one big adventure and with vibrant enthusiasm, Naomi is always seeking new and exciting experiences. She believes youth is a state of mind, which compels her to lead people to live life to the fullest, regardless of their age. As a result of her impulsive wanderlust, Naomi has come to be regarded as cultured beyond most others. As a result of her vast cultural experience, she has adapted a worldview that is unassuming and adaptive. Life is too short to hold grudges; Naomi is quick to trust and quick to forgive. She has a quirky, playful, fun-loving spirit, often resorting to laughter if a situation ever gets gloomy or difficult. Pessimism is the enemy of resourcefulness after all.</p>}>
    						<p>Free-Spirited</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={orange} waves='light'/>}
    						title="Marvin"
    						reveal={<p>Apathetic as all hell, Marvin would be equally as happy cleaning the dishes or having sex—not that he does either in the first place. What would be the point? Marvin doesn’t care to believe that life is all that meaningful. When others call him a Nihilist and a pessimist—which happens rather often—he plainly agrees, adding that he is also a realist and an absolutely terrible piano player. Although Marvin’s consistent negativity makes him kind of a bummer to be around, he is also a skilled scientist. Skepticism and doubt come naturally to Marvin, which has made him especially good at poking holes in other people’s scientific theories, while being reluctant to produce any of his own. Marvin is avidly self-deprecating, often dramatically expressing the futility of his own actions. He is also avidly other-deprecating, effortlessly pointing out the idiocy with which other people attempt to do just about anything. Marvin is prolifically sarcastic, but not in any attempt to be humorous, just as an additional way of expressing his malcontent. </p>}>
    						<p>Apathetic</p>
						</Card>
					</Col>
					<Col s={3}>
						<Card className = "hoverable center-aligned" header={<CardTitle reveal image={yellow} waves='light' />}
    						title="Gia"
    						reveal={<p>At first glance, Gia seems to be a quaint older lady settling into her normative golden years. However, after a conversation with the woman, it is clear to most that she is far from ordinary. After Gia gleefully lived through the Summer of Love in San Francisco, her down to earth, uninhibited spirit never went away. Many of Gia’s new-age, ritualistic inclinations deliver a sense of bizarre mysticism and vivacious warmth to all those who spend time with her. Gia has a eclectic knowledge of ancient spiritual traditions, often found chanting and dancing naked in the rain with some odd relic or another. Whenever she is told about a friend’s ailment, Gia is always ready with a series of herbal remedies, crystal healing, and nutritive medicine. Namaste.</p>}>
    						<p>Eccentric</p>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default PersonalityBox;
