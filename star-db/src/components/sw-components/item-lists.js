import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
	return (props) => {
		return (
			<Wrapped {...props}>
				{fn}
			</Wrapped>
		);
	};
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;


const ListWithChildren = withChildFunction(renderName)(ItemList);

const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData : swapiService.getAllPeople
	};
};
const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData : swapiService.getAllPlanets
	};
};
const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData : swapiService.getAllStarships
	};
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
					withData(ListWithChildren)
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
					withData(ListWithChildren)
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
						withData(
							withChildFunction(renderModelAndName)(ItemList)
						)
);

export {
	PersonList, PlanetList, StarshipList
};