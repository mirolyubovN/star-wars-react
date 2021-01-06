import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import SwapiService from '../../services/swapi-service';

import './person-details.css';
import ErrorButton from '../error-button';

export default class PersonDetails extends Component {

	swapiService = new SwapiService();

	state = {
		person: null,
		loading: true
	};

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	updatePerson() {
		this.setState({loading: true});
		const {personId} = this.props;

		if (!personId) {
			return;
		}
		this.swapiService
			.getPerson(personId)
			.then(person => {
				this.setState({person, loading: false});
			});
	}

	render() {

		if (!this.state.person) {
			return <span>Select a person from the list to show details</span>
		}

		if (this.state.loading) {
			return <Spinner/>
		}

		const {id, name, birthYear, gender, eyeColor} = this.state.person;

		return (
			<div className="person-details card" key={id}>
				<img className="person-image"
					src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

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
