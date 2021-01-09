import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import ItemDetails, {Record} from '../item-details/item-details';
import ItemList from '../item-list';

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

		const {getPerson, getStarship, getPersonImageUrl, getStarshipImageUrl, getAllPeople, getAllStarships} = this.swapiService;

		const personList = (
			<ItemList
				getData={getAllPeople}
				onItemSelected={()=>{}}
			>
				{({name}) => <span>{name}</span>}
			</ItemList>
		);
		const personDetails = (
			<ItemDetails 
				itemId={11}
				getData = {getPerson}
				getImageUrl={getPersonImageUrl}
			>
				<Record field="gender" label="Gender"/>
				<Record field="eyeColor" label="Eye color"/>
			</ItemDetails>
			
		);
		const starshipList = (
			<ItemList
				getData={getAllStarships}
				onItemSelected={()=>{}}
			>
				{({name}) => <span>{name}</span>}
			</ItemList>
		);
		const starshipDetails = (
			<ItemDetails
				itemId={5}
				getData = {getStarship}
				getImageUrl={getStarshipImageUrl}
			>
				<Record field="model" label="Model"/>
				<Record field="length" label="Length"/>
				<Record field="costInCredits" label="Cost"/>
			</ItemDetails>

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
						left={starshipList}
						right={starshipDetails}
					/>
				</div>
			</ErrorBoundry>
		);
	}
}
