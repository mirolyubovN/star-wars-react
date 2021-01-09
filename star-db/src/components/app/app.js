import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { PersonDetails, PersonList, PlanetList, StarshipList, PlanetDetails, StarshipDetails} from '../sw-components';

import {SwapiServiceProvider} from '../swapi-service-context';

export default class App extends Component {

	state = {
		showRandomPlanet: true,
		swapiService : new DummySwapiService() 
	};

	onServiceChange = () => {
		this.setState(({swapiService}) => {
			const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
			return {
				swapiService: new Service()
			};
		});
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

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService}>
					<div className="stardb-app">
						<Header onServiceChange={this.onServiceChange} />
						<Row 
							left={<PersonList onItemSelected={()=>{}}/>}
							right={<PersonDetails itemId={11}/>}
						/>
						<Row 
							left={<PlanetList onItemSelected={()=>{}}/>}
							right={<PlanetDetails itemId={11}/>}
						/>
						<Row 
							left={<StarshipList onItemSelected={()=>{}}/>}
							right={<StarshipDetails itemId={11}/>}
						/>
					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}
