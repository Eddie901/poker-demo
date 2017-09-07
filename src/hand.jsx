import React, { Component } from 'react';
import Card from "./card";
import './Hand.css';


class Hand extends Component {
		
		state = {
				
				ranks: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"],
				suits: ["clubs", "diamonds", "hearts", "spades"]
		};
		
		render() {
				
				var cards = this.props.cards.map(function(card) {
						return (
								<Card
								rank={this.state.ranks[card[0]]}
								suit={this.state.suits[card[1]]}
								/>
						)}, this);
				
				return(
						<div className="hand">
								{cards}
						</div>
				);
		}
}

export default Hand;

