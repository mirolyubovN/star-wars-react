import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

import './item-details.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

const Record = ({field, label, item}) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	);
};

export {
	Record
};

export default class ItemDetails extends Component {

	state = {
		item: null,
		loading: true,
		image: null,
		error: true
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId ||
			this.props.getData !== prevProps.getData ||
			this.props.getImageUrl !== prevProps.getImageUrl) {
			console.log('updated');
			this.updateItem();
		}
	}

	updateItem() {
		this.setState({
			loading: true,
			error: false
		});
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
			})
			.catch(() => {
				this.setState({
					loading: false,
					error: true
				})
			});
	}

	render() {

		if (!this.state.item) {
			return <span>Select an item from the list to show details</span>
		}

		if (this.state.loading) {
			return <Spinner/>
		}
		
		if (this.state.error) {
			return <ErrorIndicator/>
		}

		const {item, image} = this.state;
		const {id, name} = item;

		return (
			<div className="person-details card" key={id}>
				<img className="person-image"
					src={image}
					alt="SW item"	
				/>

				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						{
							React.Children.map(this.props.children, child => {
								return React.cloneElement(child, {item});
							})
						}
						<li className="list-group-item">
							<ErrorButton/>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
