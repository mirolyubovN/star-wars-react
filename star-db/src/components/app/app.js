import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import {
	PeoplePage,
	PlanetPage,
	StarshipPage,
	LoginPage,
	SecretPage
} from '../pages';

import {SwapiServiceProvider} from '../swapi-service-context';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

	state = {
		swapiService: new SwapiService(),
		isLoggedIn: false
	};

	onServiceChange = () => {
		this.setState(({swapiService}) => {
			const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
			return {
				swapiService: new Service()
			};
		});
	};

	onLogin = () => {
		this.setState({isLoggedIn: true});
	};

	render() {

		if(this.state.hasError) {
			return <ErrorIndicator/>
		}

		const {isLoggedIn} = this.state;

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService}>
					<Router>
						<div className="stardb-app">
							<Header onServiceChange={this.onServiceChange} />
							<RandomPlanet/>
							<Switch>
								<Route path="/"
										render={() => <h2>Welcome to StarDB app</h2>}
										exact/>
								<Route path="/people/:id?" component={PeoplePage}/>
								<Route path="/planets" component={PlanetPage}/>
								<Route path="/starships" exact component={StarshipPage}/>
								<Route path="/starships/:id" 
										render={({match}) => {
											const {id} = match.params 
											return <StarshipDetails itemId={id}/>
										}}/>
								<Route path="/login" render={()=> {
									return <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}} />
								<Route path="/secret" render={()=><SecretPage isLoggedIn={isLoggedIn}/>}/>
								<Route render={() => <h2>This page does not exist</h2>}/>
							</Switch>
						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
};
