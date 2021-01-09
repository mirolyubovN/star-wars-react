import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';


const PersonDetails = ({itemId}) => {
	return (
		<SwapiServiceConsumer>
			{
				(swapiService) => {
					return (
						<ItemDetails 
							itemId={itemId}
							getData = {swapiService.getPerson}
							getImageUrl={swapiService.getPersonImageUrl}
						>
							<Record field="gender" label="Gender"/>
							<Record field="eyeColor" label="Eye color"/>
						</ItemDetails>
					);
				}
				
			}
		</SwapiServiceConsumer>
	);
};
const PlanetDetails = ({itemId}) => {
	return(
		<SwapiServiceConsumer>
			{
				(swapiService) => {
					return (
						<ItemDetails
							itemId={itemId}
							getData = {swapiService.getPlanet}
							getImageUrl={swapiService.getPlanetImageUrl}
					>
							<Record field="diameter" label="Diameter"/>
							<Record field="population" label="Population"/>
							<Record field="rotationPeriod" label="Rotation Period"/>
						</ItemDetails>
					);
				}
			}
		</SwapiServiceConsumer>
	);
};
const StarshipDetails = ({itemId}) => {
	return(
		<SwapiServiceConsumer>
			{
				({getStarship, getStarshipImageUrl}) => {
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
				}
			}
		</SwapiServiceConsumer>
	);
};

export {
	PersonDetails, PlanetDetails, StarshipDetails
};