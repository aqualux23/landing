import React from 'react';
import './App.css';
import Flexbox from 'flexbox-react';
import starbuck from './starbuck.jpeg';
import lee from './leeadama.jpeg';
import sharon from './sharon.jpeg';
import chief from './chief.jpeg';

let personalities = {
	starbuck: {
		name: "Starbuck",
		imgSource: starbuck,
		attributes: ["Rebelious", "Free Spirited", "Sarcastic"]
	},
	lee: {
		name: "Lee",
		imgSource: lee,
		attributes: ["Naive", "Brave", "Golden Retriever"]
	},
	chief: {
		name: "Chief",
		imgSource: chief,
		attributes: ["Analytical", "Protective", "Obedient"]
	},
	sharon: {
		name: "Sharon",
		imgSource: sharon,
		attributes: ["Asian", "Agile", "Abundant"]
	}

};


class PersonalityCard extends React.Component{

	constructor(props){
		super(props);
		
		this.handleClickOut = this.handleClickOut.bind(this);
		this.handleClickIn = this.handleClickIn.bind(this);
		this.handleHoverOut = this.handleHoverOut.bind(this);
		this.handleHoverIn = this.handleHoverIn.bind(this);
	}

	handleClickOut(){
		this.props.onClick(this.props.cardId);
	}

	handleClickIn(){
		this.props.onClickIn(-1);
	}

	handleHoverIn(){
		this.props.onMouseEnter(this.props.cardId);
		
		
	}

	handleHoverOut(){
		this.props.onMouseLeave(this.props.cardId);
		
	}

	render(){

		let buttonVisible = this.props.currentCard === -1 ? {opacity: 0} : {opacity: 1};
		let imgSource;
		let name;
		switch(this.props.cardId){
			case 0:
				name = personalities.starbuck.name;
				imgSource = personalities.starbuck.imgSource;
				break;
			case 1:
				name = personalities.lee.name;
				imgSource = personalities.lee.imgSource;
				break;
			case 2:
				name = personalities.chief.name;
				imgSource = personalities.chief.imgSource;
				break;
			case 3:
				name = personalities.sharon.name;
				imgSource = personalities.sharon.imgSource;
				break;
		}
		
		
		return (
			<Flexbox style={this.props.style} onMouseEnter={this.handleHoverIn} 
			onMouseLeave={this.handleHoverOut} onClick={this.handleClickOut}>
				<h2 style={{fontSize: '1em', marginBottom: '0.3em', marginTop: '0.0em'}} className="name">{name}</h2>
				<img src={imgSource} alt={""} style={{width:'4em', height:'4em', marginTop: '0px', padding: '0px'}}/>
				<Flexbox style={buttonVisible} className="return-button" onClick={this.handleClickIn}>
				</Flexbox>
            </Flexbox>
			);
	}
}

export default PersonalityCard;