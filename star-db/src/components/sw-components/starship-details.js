import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helpers';
import ErrorBoundry from '../error-boundry';


const StarshipDetails = (props) => {
	return (
			<ErrorBoundry>
				<ItemDetails {...props}>
					<Record field="model" label="Model"/>
					<Record field="length" label="Length"/>
					<Record field="costInCredits" label="Cost"/>
				</ItemDetails>
			</ErrorBoundry>
		);
};

const mapMethodsToProps = ({getStarship, getStarshipImageUrl}) => {
	return {
		getData: getStarship,
		getImageUrl: getStarshipImageUrl
	};
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);