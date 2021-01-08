import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import SwapiService from '../../services/swapi-service';

import './item-details.css';
import ErrorButton from '../error-button';

export default class ItemDetails extends Component {

	swapiService = new SwapiService();

	state = {
		item: null,
		loading: true,
		image: null
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	updateItem() {
		this.setState({loading: true});
		const {itemId, getData, getImageUrl} = this.props;

		if (!itemId) {
			return;
		}
		getData(itemId)
			.then(item => {
				this.setState({
					item, 
					loading: false, 
					image: getImageUrl(item)
				});
			});
	}

	render() {

		if (!this.state.item) {
			return <span>Select a person from the list to show details</span>
		}

		if (this.state.loading) {
			return <Spinner/>
		}

		const {item, image} = this.state;
		const {id, name, birthYear, gender, eyeColor} = item;


		return (
			<div className="person-details card" key={id}>
				<img className="person-image"
					src={image}/>

				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth Year</span>
							<span>{birthYear}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye Color</span>
							<span>{eyeColor}</span>
						</li>
						<li className="list-group-item">
							<ErrorButton/>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
