import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helpers';

const PlanetDetails = (props) => {
	return (
			<ItemDetails {...props}>
				<Record field="diameter" label="Diameter"/>
				<Record field="population" label="Population"/>
				<Record field="rotationPeriod" label="Rotation Period"/>
			</ItemDetails>
	);
};

const mapMethodsToProps = ({getPlanet, getPlanetImageUrl}) => {
	return {
		getData: getPlanet,
		getImageUrl: getPlanetImageUrl
	};
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);