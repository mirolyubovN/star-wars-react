import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import ItemDetails from '../item-details';

export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true
	};

		toggleRandomPlanet = () => {
			this.setState((state) => {
				return {
					showRandomPlanet: !state.showRandomPlanet
				}
			});
		};

	render() {

		if(this.state.hasError) {
			return <ErrorIndicator/>
		}

		const planet = this.state.showRandomPlanet ?
		<RandomPlanet/> : null;

		const {getPerson, getStarship, getPersonImageUrl, getStarshipImageUrl} = this.swapiService;

		const personDetails = (
			<ItemDetails 
				itemId={11}
				getData = {getPerson}
				getImageUrl={getPersonImageUrl}
			/>
		);
		const starshipDetails = (
			<ItemDetails 
				itemId={5}
				getData = {getStarship}
				getImageUrl={getStarshipImageUrl}
			/>
		);

		return (
			<ErrorBoundry>
				<div className="stardb-app">
					<Header />
					<Row 
						left={personDetails}
						right={starshipDetails}
					/>
				</div>
			</ErrorBoundry>
		);
	}
}
