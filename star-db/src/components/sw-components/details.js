import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
	getPerson,
	getStarship,
	getPlanet,
	getPersonImageUrl,
	getStarshipImageUrl,
	getPlanetImageUrl,
} = swapiService;


const PersonDetails = ({itemId}) => {
	return (
		<ItemDetails 
			itemId={itemId}
			getData = {getPerson}
			getImageUrl={getPersonImageUrl}
		>
			<Record field="gender" label="Gender"/>
			<Record field="eyeColor" label="Eye color"/>
		</ItemDetails>
	);
};
const PlanetDetails = ({itemId}) => {
	return (
		<ItemDetails
			itemId={itemId}
			getData = {getPlanet}
			getImageUrl={getPlanetImageUrl}
		>
			<Record field="diameter" label="Diameter"/>
			<Record field="population" label="Population"/>
			<Record field="rotationPeriod" label="Rotation Period"/>
		</ItemDetails>
	);
};
const StarshipDetails = ({itemId}) => {
	return (
		<ItemDetails
			itemId={itemId}
			getData = {getStarship}
			getImageUrl={getStarshipImageUrl}
		>
			<Record field="model" label="Model"/>
			<Record field="length" label="Length"/>
			<Record field="costInCredits" label="Cost"/>
		</ItemDetails>
	);
};

export {
	PersonDetails, PlanetDetails, StarshipDetails
};