import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helpers';
import ErrorBoundry from '../error-boundry';

const PlanetDetails = (props) => {
	return (
			<ErrorBoundry>
				<ItemDetails {...props}>
					<Record field="diameter" label="Diameter"/>
					<Record field="population" label="Population"/>
					<Record field="rotationPeriod" label="Rotation Period"/>
				</ItemDetails>
			</ErrorBoundry>
		);
};

const mapMethodsToProps = ({getPlanet, getPlanetImageUrl}) => {
	return {
		getData: getPlanet,
		getImageUrl: getPlanetImageUrl
	};
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);