import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helpers';

const StarshipDetails = (props) => {
	return (
			<ItemDetails {...props}>
				<Record field="model" label="Model"/>
				<Record field="length" label="Length"/>
				<Record field="costInCredits" label="Cost"/>
			</ItemDetails>
		);
};

const mapMethodsToProps = ({getStarship, getStarshipImageUrl}) => {
	return {
		getData: getStarship,
		getImageUrl: getStarshipImageUrl
	};
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);