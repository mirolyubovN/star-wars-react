import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { PersonDetails, PersonList, PlanetList, StarshipList, PlanetDetails, StarshipDetails} from '../sw-components';

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

		const personList = (
			<PersonList
				onItemSelected={()=>{}}
			/>
		);
		const planetList = (
			<PlanetList
				onItemSelected={()=>{}}
			/>
		);
		const starshipList = (
			<StarshipList
				onItemSelected={()=>{}}
			/>
		);

		const personDetails = (
			<PersonDetails itemId={11}/>
		);
		const planetDetails = (
			<PlanetDetails itemId={11}/>
		);
		const starshipDetails = (
			<StarshipDetails itemId={11}/>
		);

		return (
			<ErrorBoundry>
				<div className="stardb-app">
					<Header />
					<Row 
						left={personList}
						right={personDetails}
					/>
					<Row 
						left={planetList}
						right={planetDetails}
					/>
					<Row 
						left={starshipList}
						right={starshipDetails}
					/>
				</div>
			</ErrorBoundry>
		);
	}
}
