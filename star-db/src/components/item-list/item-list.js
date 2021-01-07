import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

	state = {
		peopleList: null
	};

	componentDidMount() {

		const {getData} = this.props;

		getData()
			.then(itemList=> {
				this.setState({
					itemList
				});
			});
	}

	renderItems(items) {
		return items.map(({id, name}) => {
			return (
				<li className="list-group-item" 
					key={id}
					onClick={() => this.props.onItemSelected(id)}>
					{name}
				</li>
			);
		});
	}

	render() {

		const {itemList} = this.state;

		if(!itemList) {
			return <Spinner/>;
		}
		const items = this.renderItems(itemList);

		
		return (
			<ul className="item-list list-group">
				{items}
			</ul>
		);
	}
}
