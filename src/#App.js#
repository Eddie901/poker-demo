import React, { Component } from 'react';
import logo from './logo.svg';
import Hand from "./hand";
import './App.css';

class App extends Component {
		render() {

					var deck = [];
				
				for (var c = 0 ; c < 52; c++) {
						deck[c] = [c]; // Initialize inner array
				}
				
				var j, x, i;
				for (i = deck.length; i; i--) {
						j = Math.floor(Math.random() * i);
						x = deck[i - 1];
						deck[i - 1] = deck[j];
						deck[j] = x;
				}
				

				var values  = [];
				
				// Initialize array
				for (var i = 0 ; i < 5; i++) {
						values[i] = []; // Initialize inner array
						
						//translate rank & suit
						
            values[i][0] = Math.floor(deck[i] % 13)
						values[i][1] = Math.floor(deck[i] / 13)
				}

				console.log(values);
				
				return (
						
								<div className="App">
								<div>
								<Hand cards={values}/>
								</div>
								
						</div>
				);
		}
}



export default App;
