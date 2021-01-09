import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => {
	return (
			<ItemDetails {...props}>
				<Record field="gender" label="Gender"/>
				<Record field="eyeColor" label="Eye color"/>
			</ItemDetails>
	);
};

const mapMethodsToProps = ({getPerson, getPersonImageUrl}) => {
	return {
		getData: getPerson,
		getImageUrl: getPersonImageUrl
	};
};

export default withSwapiService(PersonDetails, mapMethodsToProps);