import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helpers';
import ErrorBoundry from '../error-boundry';

const PersonDetails = (props) => {
	return (
			<ErrorBoundry>
				<ItemDetails {...props}>
					<Record field="gender" label="Gender"/>
					<Record field="eyeColor" label="Eye color"/>
				</ItemDetails>
			</ErrorBoundry>
	);
};

const mapMethodsToProps = ({getPerson, getPersonImageUrl}) => {
	return {
		getData: getPerson,
		getImageUrl: getPersonImageUrl
	};
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);