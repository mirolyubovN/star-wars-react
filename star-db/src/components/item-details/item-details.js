import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

import './item-details.css';
import ErrorButton from '../error-button';

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
		image: null
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId ||
			this.props.getData !== prevProps.getData) {
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
		const {id, name} = item;


		return (
			<div className="person-details card" key={id}>
				<img className="person-image"
					src={image}/>

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
